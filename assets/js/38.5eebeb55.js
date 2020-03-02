(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{204:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("原文："),r("a",{attrs:{href:"http://www.aqcoder.com/post/content?id=41",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.aqcoder.com/post/content?id=41"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("在使用 Docker 容器内运行 Dubbo 服务的时候一个令人很头痛的问题就是服务地址注册。")]),t._v(" "),r("p",[t._v("Docker 容器内有自己的 IP 段，和宿主主机是隔离的，Dubbo 会使用容器内的 IP 注册到 zookeeper 注册中心上。这样其他的服务是无法访问的。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),r("p",[t._v("这样 Docker 容器将会和宿主主机共享网络。自然就不会有 IP 注册问题了。")]),t._v(" "),r("p",[t._v("但是，当你的机器含有多个虚拟网卡是，Dubbo 有时会抽风，包括你在 Window 环境下调试是 Comsumer 的 IP 也会抽风。")]),t._v(" "),r("p",[t._v("因此，这里推荐第二种方式：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),r("p",[t._v("上面的 IP  和端口根据实际情况填写。完美解决注册 IP 乱掉的问题。")]),t._v(" "),r("p",[t._v("其他相关环境变量：")]),t._v(" "),t._m(7),t._v(" "),t._m(8)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"docker-容器内运行-dubbo-服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器内运行-dubbo-服务","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 容器内运行 Dubbo 服务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"方式一：-host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方式一：-host","aria-hidden":"true"}},[this._v("#")]),this._v(" 方式一：--host")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("一个很直接的方案就是直接使用 Docker 的 "),e("code",[this._v("--host")]),this._v(" 选项：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker run --name my-micro-server -d --host --restart=always my-micro-server-image\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"方式二：dubbo-ip-to-registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方式二：dubbo-ip-to-registry","aria-hidden":"true"}},[this._v("#")]),this._v(" 方式二：Dubbo_IP_TO_REGISTRY")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("其实 Dubbo 提供了一个环境变量 "),e("code",[this._v("Dubbo_IP_TO_REGISTRY")]),this._v("，当次环境变量存在时，Dubbo 会使用次环境变量的值去注册。因此我们把启动容器脚本改为：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker run --name my-micro-server -d -p 8080:8080 -p 28880:28880 --restart=always -e Dubbo_IP_TO_REGISTRY=192.168.2.2  my-micro-server-image\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Dubbo_IP_TO_REGISTRY --- 注册到注册中心的IP地址")]),this._v(" "),e("li",[this._v("Dubbo_PORT_TO_REGISTRY --- 注册到注册中心的端口")]),this._v(" "),e("li",[this._v("Dubbo_IP_TO_BIND --- 监听IP地址")]),this._v(" "),e("li",[this._v("Dubbo_PORT_TO_BIND --- 监听端口")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/ravenq-qr-gray.png",alt:"ravenq"}})])}],!1,null,null,null);e.default=a.exports}}]);