# libmicrohttpd 一个 C 编写的小型 HTTP 库

> 原文：<http://www.aqcoder.com/post/content?id=39> by ravenq

libmicrohttpd 是 GUN 下开源的一个小型的 HTTP 库，能够方便的嵌入到系统中。支持 HTTP 1.1 可以同时侦听多个端口，具有 select, poll, pthread, thread poo 等多种模式，库平台支持 GNU/Linux, FreeBSD, OpenBSD, NetBSD, Android, Darwin (macOS), W32, OpenIndiana/Solaris, z/OS 等。

- 主页： <http://www.gnu.org/software/libmicrohttpd/>
- Git: <https://git.gnunet.org/libmicrohttpd.git>
- FTP: <ftp://ftp.gnu.org/gnu/libmicrohttpd/>

## 编译与安装

libmicrohttpd 有提供编译好的二进制，可自行下载： <ftp://ftp.gnu.org/gnu/libmicrohttpd/>

官方编译版本使用的是 MT 选项，如果需要 MD，或者其他编译选项，可以下载源码，根据不同平台进行编译。

## 简单示例

```C
#include <microhttpd.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

#define PAGE "<html><head><title>libmicrohttpd demo</title>"\
             "</head><body>libmicrohttpd demo</body></html>"

static int ahc_echo(void * cls,
                    struct MHD_Connection * connection,
                    const char * url,
                    const char * method,
                    const char * version,
                    const char * upload_data,
                    size_t * upload_data_size,
                    void ** ptr) {
  static int dummy;
  const char * page = cls;
  struct MHD_Response * response;
  int ret;

  if (0 != strcmp(method, "GET"))
    return MHD_NO; /* unexpected method */
  if (&dummy != *ptr)
    {
      /* The first time only the headers are valid,
         do not respond in the first round... */
      *ptr = &dummy;
      return MHD_YES;
    }
  if (0 != *upload_data_size)
    return MHD_NO; /* upload data in a GET!? */
  *ptr = NULL; /* clear context pointer */
  response = MHD_create_response_from_buffer (strlen(page),
                                              (void*) page,
                                              MHD_RESPMEM_PERSISTENT);
  ret = MHD_queue_response(connection,
                          MHD_HTTP_OK,
                          response);
  MHD_destroy_response(response);
  return ret;
}

int main(int argc,
        char ** argv) {
  struct MHD_Daemon * d;
  if (argc != 2) {
    printf("%s PORT\n", argv[0]);
    return 1;
  }
  d = MHD_start_daemon(MHD_USE_THREAD_PER_CONNECTION,
                      atoi(argv[1]),
                      NULL,
                      NULL,
                      &ahc_echo,
                      PAGE,
                      MHD_OPTION_END);
  if (d == NULL)
    return 1;
  (void) getc (stdin);
  MHD_stop_daemon(d);
  return 0;
}
```

此示例效果为访问服务器返回一个简单的页面，页面内容见 `PAGE` 宏定义。

可以看到 libmicrohttpd 的使用很简单。 `MHD_start_daemon` 函数启动服务，并且需要一个回调入参 `ahc_echo`，注意此方法是非阻塞的，此示例使用 `getc` 函数等待用户输入终止。

`ahc_echo` 回到函数在每次请求的时候都会进入。使用 `MHD_create_response_from_buffer` 函数创建一个响应结构体，然后使用 `MHD_queue_response` 函数把响应结构推入响应队列，libmicrohttpd 会帮我们执行响应。最后使用 `MHD_destroy_response` 清理内存。

注意此实例只能处理 GET 请求， POST 请求比较复杂，下文我们接着会介绍。

## 跨域问题

现代很多应用都是前后端分离的，libmicrohttpd 可以方便的用于本地小型 httpd 服务器。可以在本地和你的应用通过 http 进行交互，你的应用甚至可以是 WEB 应用。

![app message](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/microhttpd-app-message.png)

使用此方法可以解决 ActiveX 技术被现代浏览器禁用的问题。可以使用 libmicrohttpd 把你的 ActiveX 控件封装到本地服务里，然后使用 http 和 WEB 应用交互。

此时会产生跨域问题。首先我们来了解下跨域访问的原理。

浏览器在发送 POST 请求前，首先会进行一次 OPTION 预请求，OPTION 请求返回的头部信息会决定浏览器是否发送真正的 POST 请求。关键的头部信息包括：

- Access-Control-Allow-Origin
- Access-Control-Allow-Headers
- Access-Control-Allow-Methods

![post option](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/microhttpd-post-option.png)

理解了原理，就好办了，我们在请求处理回调中先处理一次 OPTION 与请求。

```C
response = MHD_create_response_from_buffer(strlen(METHOD_ERROR),
                                            (void *)METHOD_ERROR,
                                            MHD_RESPMEM_PERSISTENT);

MHD_add_response_header(response, "Access-Control-Allow-Origin", "*");
MHD_add_response_header(response, "Access-Control-Allow-Headers", "content-type"); // 包括你定义的额外的头部字段
MHD_add_response_header(response, "Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

ret = MHD_queue_response(connection,
                          MHD_HTTP_NOT_ACCEPTABLE,
                          response);
MHD_destroy_response(response);
```

这样，你的 HTTP 服务就可以处理跨域请求了。
注意：不能用上面的 GET 示例，应为上面的示例拦截非 GET 的所有请求。

## POST 求参数获取

首先，很遗憾的 libmicrohttpd 不支持 `application/json` 格式的 post 请求，其实，他只支持两种格式的 POST 请求：

```C
#define MHD_HTTP_POST_ENCODING_FORM_URLENCODED "application/x-www-form-urlencoded"
#define MHD_HTTP_POST_ENCODING_MULTIPART_FORMDATA "multipart/form-data"
```

对于这一点，我也表示很疑惑，为什么不支持 `application/json` 呢？

不支持，就不支持吧，我们可以使用 `application/x-www-form-urlencoded` 代替，我们来看一个实例代码（代码有点长，关键位置我的写了注释了，耐心看）：

```C
/**
 * Data kept per request.
 */
struct Request
{
  /**
   * Post processor handling form data (IF this is
   * a POST request).
   */
  struct MHD_PostProcessor *pp;

  /**
   * URL to serve in response to this POST (if this request
   * was a 'POST')
   */
  const char *post_url;

  /**
   * 用一个 string 来存储 POST 数据，因为 POST 数据是分段进回调接收的。
   * 如果你传输的数据不是字符串，可以使用 char 数组接收。
   */
  std::string post_data;
};

static int
post_iterator(void *cls,
              enum MHD_ValueKind kind,
              const char *key,
              const char *filename,
              const char *content_type,
              const char *transfer_encoding,
              const char *data, uint64_t off, size_t size)
{
  struct Request *request = cls;
  struct Session *session = request->session;
  (void)kind;              /* Unused. Silent compiler warning. */
  (void)filename;          /* Unused. Silent compiler warning. */
  (void)content_type;      /* Unused. Silent compiler warning. */
  (void)transfer_encoding; /* Unused. Silent compiler warning. */

  // 这里也可以处理请求参数，但是这里会进入更多次，经我实践是没 512 个字节进入一次。
  // 并且要注意，使用 application/x-www-form-urlencoded 时，POST 请求数据必须是如下格式：
  // key=xxxxxxxx
  // key 就是这个回调的 key 参数， xxxxxxxx 是你的请求参数。
}

static int
handle_request(void *cls,
                struct MHD_Connection *connection,
                const char *url,
                const char *method,
                const char *version,
                const char *upload_data,
                size_t *upload_data_size,
                void **ptr)
{
  struct MHD_Response *response;
  struct Request *request;
  struct Session *session;
  int ret;
  unsigned int i;
  (void)cls;     /* Unused. Silent compiler warning. */
  (void)version; /* Unused. Silent compiler warning. */

  request = *ptr;
  if (NULL == request)
  {
    request = calloc(1, sizeof(struct Request));
    if (NULL == request)
    {
      fprintf(stderr, "calloc error: %s\n", strerror(errno));
      return MHD_NO;
    }
    *ptr = request;
    if (0 == strcmp(method, MHD_HTTP_METHOD_POST))
    {
      request->pp = MHD_create_post_processor(connection, 1024,
                                              &post_iterator, request);
      if (NULL == request->pp)
      {
        fprintf(stderr, "Failed to setup post processor for `%s'\n",
                url);
        return MHD_NO; /* internal error */
      }
    }
    return MHD_YES;
  }

  if (0 == strcmp(method, MHD_HTTP_METHOD_OPTIONS))
  {
    // 允许跨域请求
    MHD_add_response_header(response, "Access-Control-Allow-Origin", "*");
    MHD_add_response_header(response, "Access-Control-Allow-Headers", "content-type"); // 包括你定义的额外的头部字段
    MHD_add_response_header(response, "Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    const char *res_get = "you call option method.";
    response = MHD_create_response_from_buffer(strlen(res_get),
                                               (void *)res_get,
                                               MHD_RESPMEM_PERSISTENT);
    ret = MHD_queue_response(connection,
                             MHD_HTTP_OK,
                             response);
    MHD_destroy_response(response);
  }

  if (0 == strcmp(method, MHD_HTTP_METHOD_POST))
  {
    /* evaluate POST data */
    MHD_post_process(request->pp,
                     upload_data,
                     *upload_data_size);
    if (0 != *upload_data_size)
    {
      // 请求回调会进入多次，直到 POST 请求的所有数据接收完毕。
      // 我们在这里拼接请求参数
      request.post_data += std::string(upload_data, *upload_data_size);

      *upload_data_size = 0;
      return MHD_YES;
    }

    // 这里得到了完整的请求参数，可以执行你的代码逻辑
    std::string data = request.post_data;
    // do somthing...

    /* done with POST data, serve response */
    MHD_destroy_post_processor(request->pp);
    request->pp = NULL;

    if (NULL != request->post_url)
      url = request->post_url;

    // 返回最终的 POST 请求
    const char *res_post = "{\"result\": \"success\", \"message\":\"you call post method.\"}";
    response = MHD_create_response_from_buffer(strlen(res_post),
                                               (void *)res_post,
                                               MHD_RESPMEM_PERSISTENT);
    MHD_add_response_header(response, "content-type", "applicaton/json"); // 返回格式可以是 json
    ret = MHD_queue_response(connection,
                             MHD_HTTP_OK,
                             response);
    MHD_destroy_response(response);
    return ret;
  }

  if ((0 == strcmp(method, MHD_HTTP_METHOD_GET)) ||
      (0 == strcmp(method, MHD_HTTP_METHOD_HEAD)))
  {
    const char *res_get = "you call get method.";
    response = MHD_create_response_from_buffer(strlen(res_get),
                                               (void *)res_get,
                                               MHD_RESPMEM_PERSISTENT);
    ret = MHD_queue_response(connection,
                             MHD_HTTP_OK,
                             response);
    MHD_destroy_response(response);
    return ret;
  }
  /* unsupported HTTP method */
  response = MHD_create_response_from_buffer(strlen(METHOD_ERROR),
                                             (void *)METHOD_ERROR,
                                             MHD_RESPMEM_PERSISTENT);

  ret = MHD_queue_response(connection,
                           MHD_HTTP_NOT_ACCEPTABLE,
                           response);
  MHD_destroy_response(response);
  return ret;
}

static void
request_completed_callback(void *cls,
                           struct MHD_Connection *connection,
                           void **con_cls,
                           enum MHD_RequestTerminationCode toe)
{
  struct Request *request = *con_cls;
  (void)cls;        /* Unused. Silent compiler warning. */
  (void)connection; /* Unused. Silent compiler warning. */
  (void)toe;        /* Unused. Silent compiler warning. */

  if (NULL == request)
    return;
  if (NULL != request->pp)
    MHD_destroy_post_processor(request->pp);
  free(request);
}

int main(int argc, char ** argv) {
  struct MHD_Daemon * d;
  if (argc != 2) {
    printf("%s PORT\n", argv[0]);
    return 1;
  }
  d = MHD_start_daemon(MHD_USE_ERROR_LOG,
                       atoi(argv[1]),
                       NULL, NULL,
                       &handle_request, NULL,
                       MHD_OPTION_CONNECTION_TIMEOUT, (unsigned int)15,
                       MHD_OPTION_NOTIFY_COMPLETED, &request_completed_callback, NULL,
                       MHD_OPTION_END);
  if (d == NULL)
    return 1;
  (void) getc (stdin);
  MHD_stop_daemon(d);
  return 0;
}
```

上面的源码关键位置我都注释了，这里稍微讲解一下。当 POST 请求数据量比较大时，请求回调函数 `handle_request` 是会进入多次来接收数据的。

因此我们使用了一个结构体 `Request` 并使用 `post_data` 字段来存储 POST 请求数据，每次进入时拼接起来，当 `0 == *upload_data_size` 时就证明数据接收完毕了。

同时，我还加入了官方示例的代码

```C
if (0 == strcmp(method, MHD_HTTP_METHOD_POST))
{
  request->pp = MHD_create_post_processor(connection, 1024,
                                          &post_iterator, request);
  if (NULL == request->pp)
  {
    fprintf(stderr, "Failed to setup post processor for `%s'\n",
            url);
    return MHD_NO; /* internal error */
  }
}
```

这样处理会跟多此的进入 POST 数据接收回调函数 `post_iterator`。对于很多应用场景这部分有点多余，可以去除掉。

## 应用代码

这里假设我们的应用是一个 WEB 应用，我们使用 axios 库进行 http 请求：

```js
const data = { data: "this is a very big string." };
const data2 = "key=" + JSON.stringfy({ data: "this is a very big string." }); // 如果你要在 post_iterator 接受数据，data 要这么写
axios.post("http://127.0.0.1:7080/", data, {
  headers: { "Content-Type": "application/x-www-form-urlencoded" } // 这里我们使用 application/x-www-form-urlencoded 类型
}); // 其实接收到的是 json 字符串
```

## 注意事项

有些网友在断点调试时，发现 connection 对象里有个成员 `read_buffer`，这个成员里存储了他的 POST 请求数据，那不是直接可以获取到请求数据了么。

但发现编译报错了，因为 `MHD_Connection` 结构体根本就么有导出。于是就想到了修改源码， 修改 `MHD_lookup_connection_value` 函数，直接返回 `read_buffer` 成员数据。

于是有了这样的修改：

```C
const char * MHD_lookup_connection_value (struct MHD_Connection *connection, enum MHD_ValueKind kind, const char *key)
{
  struct MHD_HTTP_Header *pos;

  if (NULL == connection)
    return NULL;

  if (kind == MHD_POSTDATA_KIND) return connection->read_buffer;//只需要添加改行代码即可

  for (pos = connection->headers_received; NULL != pos; pos = pos->next)
    if ((0 != (pos->kind & kind)) &&
      ( (key == pos->header) || ( (NULL != pos->header) &&
      (NULL != key) &&
      (0 == strcasecmp (key, pos->header))) ))
      return pos->value;
  return NULL;
}
```

**这样做是不行的**
**这样做是不行的**
**这样做是不行的**

重要的话要说三遍。为什么呢，因为 libmicrohttpd 是异步接收 POST 请求数据的，数据量小的话，调试的时候可以看到你的 POST 请求数据，但是数据量一大，你看到的可能是部分数据，或者是空。

## 最后

libmicrohttpd 还可以做很多事情，但是，我这里要推荐另外一个库，由 Microsoft 开源提供：<https://github.com/Microsoft/cpprestsdk>。

这个库我也在研究单中，它用来做 REST 风格的 http 服务器应该会更加的简单，然后原生支持 `application/json` 数据格式了。

![ravenq](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/ravenq-qr-gray.png)
