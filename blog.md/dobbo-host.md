# Docker 容器内运行 Dobbo 服务

在使用 Docker 容器内运行 Dobbo 服务的时候一个令人很头痛的问题就是服务地址注册。

Docker 容器内有自己的 IP 段，和宿主主机是隔离的，Dobbo 会使用容器内的 IP 注册到 zookeeper 注册中心上。这样其他的服务是无法访问的。

## 方式一：--host

一个很直接的方案就是直接使用 Docker 的 `--host` 选项：

```sh
docker run --name my-micro-server -d --host --restart=always my-micro-server-image
```

这样 Docker 容器将会和宿主主机共享网络。自然就不会有 IP 注册问题了。

但是，当你的机器含有多个虚拟网卡是，Dobbo 有时会抽风，包括你在 Window 环境下调试是 Comsumer 的 IP 也会抽风。

因此，这里推荐第二种方式：

## 方式二：DUBBO_IP_TO_REGISTRY

其实 Dobbo 提供了一个环境变量 `DUBBO_IP_TO_REGISTRY`，当次环境变量存在时，Dobbo 会使用次环境变量的值去注册。因此我们把启动容器脚本改为：

```sh
docker run --name my-micro-server -d -p 8080:8080 -p 28880:28880 --restart=always -e DUBBO_IP_TO_REGISTRY=192.168.2.2  my-micro-server-image
```

上面的 IP  和端口根据实际情况填写。完美解决注册 IP 乱掉的问题。

其他相关环境变量：

- DUBBO_IP_TO_REGISTRY --- 注册到注册中心的IP地址
- DUBBO_PORT_TO_REGISTRY --- 注册到注册中心的端口
- DUBBO_IP_TO_BIND --- 监听IP地址
- DUBBO_PORT_TO_BIND --- 监听端口
