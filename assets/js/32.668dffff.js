(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{177:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）。几乎没有性能开销,可以很容易地在机器和数据中心中运行。最重要的是,他们不依赖于任何语言、框架包括系统。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("docker 登录账户密码是随机生成的，可以通过以下命令查看密码：")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),a("p",[t._v("-a 为可选项：查看所有容器，包括已经停止的容器。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),a("p",[t._v("想清楚所有容器，可以使用命名组合：")]),t._v(" "),t._m(11),a("p",[t._v("其中 -q 为只列出容器 id。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),a("p",[t._v("如果一个镜像 id 对应着连个不同的镜像名称可以使用 rmi 命令来删除多余的 tag:")]),t._v(" "),t._m(20),t._m(21),t._v(" "),a("p",[t._v("运行容器的参数比较多，详见 help。这里列出常见的命令。")]),t._v(" "),t._m(22),a("p",[t._v("第一种为连接容器的 STDIN 相当于进入了容器的 bash。")]),t._v(" "),a("p",[t._v("-- name 选项为设置容器的名称。")]),t._v(" "),a("p",[t._v("-i 保存容器的标准输入 STDIN。")]),t._v(" "),a("p",[t._v("-t 分配一个伪终端。")]),t._v(" "),a("p",[t._v("-d 分离。")]),t._v(" "),a("p",[t._v("-p 端口映射，前面为本机端口，后面为容器端口。")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._m(27),a("p",[t._v("save 保存的是镜像，包括镜像的历史。\nexport 导出的只是荣建快照，不包含镜像历史等，相对较小。")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),a("p",[t._v("为了达到数据可持久性存储、备份、共享，docker 提出了 volume 数据卷的概念。你可以把 volume 理解为一个指定的特殊的数据存储区，由于他绕过了镜像的 Union File System，所以如下命令对 volume 中的数据是无效的：")]),t._v(" "),t._m(33),t._m(34),t._v(" "),a("p",[t._v("创建 volume 有两种方式：")]),t._v(" "),t._m(35),a("p",[t._v("第一种方式会创建一个数据卷，并挂载数据卷到指定的容器中的目录。所有容器对此目录的数据操作都会复制到数据卷中。")]),t._v(" "),a("p",[t._v("第二种方式会挂载宿主主机的目录到容器中的目录，此时宿主主机的目录就相当于是数据卷。")]),t._v(" "),a("p",[t._v("你可以使用 docker cp 命令来拷贝数据卷中的数据：")]),t._v(" "),t._m(36),t._m(37),t._v(" "),a("p",[t._v("容器之间的数据卷可以共享：")]),t._v(" "),t._m(38),t._m(39),t._v(" "),a("p",[t._v("数据卷是独立于 docker 的 union file system 的，使用 -v 选项可以删除数据卷：")]),t._v(" "),t._m(40),a("p",[t._v("关于数据卷的更多内容可以参考: "),a("a",{attrs:{href:"http://www.tuicool.com/articles/uYzeAnz",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.tuicool.com/articles/uYzeAnz"),a("OutboundLink")],1)]),t._v(" "),t._m(41),t._v(" "),a("p",[t._v("Dockerfile是一个镜像的表示，可以通过Dockerfile来描述构建镜像的步骤，并自动构建一个容器")]),t._v(" "),a("p",[t._v("所有的 Dockerfile 命令格式都是:")]),t._v(" "),t._m(42),a("p",[t._v("Dockerfile 的注释使用 # 开头。\n虽然指令忽略大小写，但是建议使用大写。")]),t._v(" "),a("p",[t._v("下面列出常用命令和用法：")]),t._v(" "),t._m(43),t._v(" "),t._m(44),a("p",[t._v("指定构建的镜像使用的基础镜像。")]),t._v(" "),t._m(45),t._v(" "),t._m(46),a("p",[t._v("指明镜像的维护者。")]),t._v(" "),t._m(47),t._v(" "),a("p",[t._v("RUN 命令在构建的时候执行命令。相当于在镜像内执行命令。")]),t._v(" "),t._m(48),a("p",[t._v("或:")]),t._v(" "),t._m(49),t._m(50),t._v(" "),a("p",[t._v("指定镜像内的用户，可以多次指定，对其后的命令生效，最后一个会作为容器启动时进入的用户。")]),t._v(" "),t._m(51),t._m(52),t._v(" "),a("p",[t._v("EXPOSE 命令可以开发容器的端口")]),t._v(" "),t._m(53),t._m(54),t._v(" "),a("p",[t._v("用于设置运行容器的环境变量")]),t._v(" "),t._m(55),t._m(56),t._v(" "),a("p",[t._v("从主机复制文件到镜像")]),t._v(" "),t._m(57),t._m(58),t._v(" "),a("p",[t._v("配置 RUN, CMD, ENTRYPOINT 命令设置当前工作路径")]),t._v(" "),t._m(59),t._m(60),t._v(" "),a("p",[t._v("CMD 命令为启动容器时需要执行的命令，如果在 RUN 命令的参数中指定了命令参数则会覆盖此命令。\n一个 Dockerfile 里只能有一个 CMD，如果有多个，只有最后一个生效。")]),t._v(" "),t._m(61),t._m(62),t._v(" "),a("p",[t._v("设置容器的进入点。")]),t._v(" "),t._m(63),a("p",[t._v("或")]),t._v(" "),t._m(64),t._m(65),t._v(" "),a("p",[t._v("创建数据卷")]),t._v(" "),t._m(66),a("p",[t._v("注意：不要把 ENTRYPOINT 和 CMD 命令搞混，你可以吧 ENTRYPOINT 理解为把容器变成了一个执行程序，启动容器是就相当于执行了 ENTRYPOINT 指定的命令这个“程序”。同时 CMD 命令可以给他提供默认参数，当然也可以不提供。")]),t._v(" "),t._m(67),t._v(" "),a("p",[t._v("这些就是 docker 的基础使用教程。列举的都是命令，可以当手册、笔记用。\n记下来我会把我迁移本博客到 docker 的整个过程记录下来，当做本文的一个实战。如果你对这些命令摸不着头脑的话不放看看我的实例。")]),t._v(" "),a("p",[t._v("<实例没写完，后期不上地址>")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"docker-简明教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-简明教程","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 简明教程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"docker-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-简介","aria-hidden":"true"}},[this._v("#")]),this._v(" docker 简介")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"docker-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-命令","aria-hidden":"true"}},[this._v("#")]),this._v(" docker 命令")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-查看容器的root用户密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看容器的root用户密码","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 查看容器的root用户密码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker logs <container name or ID> 2>&1 | grep '^User: ' | tail -n1\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-查看容器日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看容器日志","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 查看容器日志")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker logs -f <container name or ID>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-查看正在运行的容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看正在运行的容器","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 查看正在运行的容器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker ps [-a]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-删除容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-删除容器","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 删除容器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker rm <container name or ID>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker rm $(docker ps -a -q)\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-停止、启动、杀死容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-停止、启动、杀死容器","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 停止、启动、杀死容器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker stop <container name or ID>\ndocker start <container name or ID>\ndocker kill <container name or ID>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_6-查看所有镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-查看所有镜像","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. 查看所有镜像")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker images\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_7-删除镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-删除镜像","aria-hidden":"true"}},[this._v("#")]),this._v(" 7. 删除镜像")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker rmi <image id>\n\ndocker rmi $(docker images -q) // 删除所有镜像\n\ndocker rmi $(docker images -q -f dangling=true) // 删除所有没有标签的镜像\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_8-镜像标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-镜像标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 8. 镜像标签")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker tag <image id> <tag name>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("aqcoder@ubuntu:~$ sudo docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE\nzggj                latest              327b06d562de        21 hours ago        1.096 GB\nzggj2               latest              327b06d562de        21 hours ago        1.096 GB\naqcoder@ubuntu:~$ sudo docker rmi zggj2\nUntagged: zggj2:latest\naqcoder@ubuntu:~$ sudo docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE\nzggj                latest              327b06d562de        21 hours ago        1.096 GB\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_9-运行容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-运行容器","aria-hidden":"true"}},[this._v("#")]),this._v(" 9. 运行容器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker run --name test -it 80:80 -p 22:22 -d zggj /bin/bash\ndocker run --name test -p 80:80 -p 22:22 -d zggj\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-拉取镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-拉取镜像","aria-hidden":"true"}},[this._v("#")]),this._v(" 10. 拉取镜像")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker pull <镜像名:tag>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"镜像本地迁移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像本地迁移","aria-hidden":"true"}},[this._v("#")]),this._v(" 镜像本地迁移")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker save <image id> > /path/to/save.tar // 保存镜像到本地\ndocker load < /path/to/save.tar // 加载镜像\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker export -o /path/to/save.tar <container id>\ndocker import /path/to/save.tar\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_11-构建镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-构建镜像","aria-hidden":"true"}},[this._v("#")]),this._v(" 11. 构建镜像")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker build -t <image name> /path/to/Dockerfile\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_12-拷贝文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-拷贝文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 12. 拷贝文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker cp <container id>:/path/to/file /path/to/save  // 从容器中考出\ndocker cp /path/to/file <conttainer id>:/path/to/save // 考至容器\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_13-volume"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-volume","aria-hidden":"true"}},[this._v("#")]),this._v(" 13. volume")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker save\ndocker export\ndocker commit\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"a-创建-volume"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-创建-volume","aria-hidden":"true"}},[this._v("#")]),this._v(" a. 创建 volume")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker run -v /path/in/container/ <image id>\ndocker run -v /path/to/host:/path/to/container <image id> # 挂载方式\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker cp <container id>:/path/to/volume /path/to/host\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"b-数据共享"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#b-数据共享","aria-hidden":"true"}},[this._v("#")]),this._v(" b. 数据共享")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker run --name container1 -v /data image1\ndocker run --name container2 --volumes-from container1 image2\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"c-数据卷管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-数据卷管理","aria-hidden":"true"}},[this._v("#")]),this._v(" c. 数据卷管理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker rm -v <container id>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile","aria-hidden":"true"}},[this._v("#")]),this._v(" Dockerfile")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# this is comment\nINSTRUCTION arguments\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-from"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-from","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. FROM")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("FROM <image>[:<tag>]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-maintainer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-maintainer","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.MAINTAINER")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("MAINTAINER <name>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-run","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. RUN")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("RUN <command>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('RUN ["executable", "param1", "param2" ... ]\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-user","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. USER")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("USER <user name>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-expose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-expose","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. EXPOSE")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("EXPOSE <port> [<port>...]\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_6-env"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-env","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. ENV")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("ENV <key> <value>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_7-add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-add","aria-hidden":"true"}},[this._v("#")]),this._v(" 7. ADD")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("ADD <src> <dest>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_8-workdir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-workdir","aria-hidden":"true"}},[this._v("#")]),this._v(" 8. WORKDIR")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("WORKDIR /path/to/workdir\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_9-cmd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-cmd","aria-hidden":"true"}},[this._v("#")]),this._v(" 9. CMD")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('CMD ["executable","param1","param2"]\nCMD ["param1","param2"] // 作为 ENTRYPOINT 的默认参数\nCMD command param1 param2\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-entrypoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-entrypoint","aria-hidden":"true"}},[this._v("#")]),this._v(" 10. ENTRYPOINT")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("ENTRYPOINT cmd param1 param2 ...\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('ENTRYPOINT ["cmd", "param1", "param2"...]\n\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_11-voloume"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-voloume","aria-hidden":"true"}},[this._v("#")]),this._v(" 11. VOLOUME")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("VOLOUME /data\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"后记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后记","aria-hidden":"true"}},[this._v("#")]),this._v(" 后记")])}],!1,null,null,null);e.default=r.exports}}]);