# libmicrohttpd 一个 C 编写的小型 HTTP 库

libmicrohttpd 是 GUN 下开源的一个小型的 HTTP 库，能够方便的嵌入到系统中。支持 HTTP 1.1 可以同时侦听多个端口，具有 select, poll, pthread, thread poo 等多种模式，库平台支持 GNU/Linux, FreeBSD, OpenBSD, NetBSD, Android, Darwin (macOS), W32, OpenIndiana/Solaris, z/OS 等。

主页： <http://www.gnu.org/software/libmicrohttpd/>
Git: <https://git.gnunet.org/libmicrohttpd.git>
FTP: <ftp://ftp.gnu.org/gnu/libmicrohttpd/>

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