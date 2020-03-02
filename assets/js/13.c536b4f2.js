(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{190:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("GNU 编译器套装（英语：GNU Compiler Collection，缩写为 GCC），一套编程语言编译器，以 GPL 及 LGPL 许可证所发布的自由软件，也是 GNU 项目的关键部分，也是 GNU 工具链的主要组成部份之一。GCC（特别是其中的 C 语言编译器）也常被认为是跨平台编译器的事实标准。1985 年由理查德·马修·斯托曼开始发展，现在由自由软件基金会负责维护工作。")]),t._v(" "),s("p",[t._v("原名为 GNU C 语言编译器（GNU C Compiler），因为它原本只能处理 C 语言。GCC 很快地扩展，变得可处理 C++。之后也变得可处理 Fortran、Pascal、Objective-C、Java、Ada，以及 Go 与其他语言。")]),t._v(" "),s("p",[t._v("许多操作系统，包括许多类 Unix 系统，如 Linux 及 BSD 家族都采用 GCC 作为标准编译器。苹果电脑 Mac OS X 操作系统也采用这个编译器。")]),t._v(" "),s("p",[t._v("原本用 C 开发，后来因为 LLVM、Clang 的崛起，令 GCC 更快将开发语言转换为 C++。许多 C 的爱好者在对 C++一知半解的情况下主观认定 C++的性能一定会输给 C，但是 Taylor 给出了不同的意见，并表明 C++不但性能不输给 C，而且能设计出更好，更容易维护的程序（GCC's move to C++）。\nps: 摘自 wiki "),s("a",{attrs:{href:"http://zh.wikipedia.org/zh-cn/GCC",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://zh.wikipedia.org/zh-cn/GCC"),s("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("一些文件:")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("gcc 的编译流程分为了四个步骤：")]),t._v(" "),s("p",[t._v("预处理（Pre-Processing----\x3e编译（Compiling）-----\x3e汇编（Assembling）-----\x3e链接（Linking）")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("gcc 有超过 100 个的可用选项，主要包括总体选项、告警和出错选项、优化选项和体系结构相关选项。这里列一些常用选项")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("关于 -fPIC 选项是使共享库能使代码可以在多个进程间共享,需要一些汇编知识和代码运行堆栈机制知识,其实我还没怎么搞懂,给个博文地址研究研究吧\n"),s("a",{attrs:{href:"http://www.cnblogs.com/catch/p/3857964.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.cnblogs.com/catch/p/3857964.html"),s("OutboundLink")],1)]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("Linux 系统中动态链接库的配置文件一般在/etc/ld.so.conf 文件内，它里面存放的内容是可以被 Linux 共享的动态联库所在的目录的名字. /etc/ld.so.cache 是 /lib/ /usr/lib/ 目录下 /etc/ld.so.conf 中的记录 /etc/ld.so.conf.d/ 目录下所有文件的记录的缓存.动态加载时系 ld 加载器会从这个缓存中找共享库的位值(这里要注意和 windows 不同,linux 不会从可执行文件所在的目录搜索共享库,如果是临时使用可以使用命令 ldconfig `pwd`)")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("下面举个实例说明:\ncat.c")]),t._v(" "),t._m(9),s("p",[t._v("mouse.c")]),t._v(" "),t._m(10),s("p",[t._v("animal.h")]),t._v(" "),t._m(11),s("p",[t._v("main.c")]),t._v(" "),t._m(12),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),s("p",[t._v("-L. 选项: 库搜索目录列表添加当前目录(注意后面有个点,没有空格)\n-lanimal 选项: 连接名位 libanimal.a 后者 libanimal.M.N.so 的库文件,M 为主版本号 N 为副版本号(注意 l 后面没有空格)")]),t._v(" "),t._m(18),t._v(" "),t._m(19),s("p",[t._v("出错了,为什么呢, 用 ldd 命令看一下依赖关系")]),t._v(" "),t._m(20),s("p",[t._v("找不到动态库,为什么呢,上面说了,没有配置 ld 加载缓存")]),t._v(" "),t._m(21),t._m(22),t._v(" "),s("p",[t._v("好了,这就是 linux 下用 gcc 编译程序的过程和一些总结,但是在实际生成环境中真的是这样编译代码的吗?\n当然不是的,这个过程只是为了学习一下 gcc 的编译过程以及静态库和共享库的一些知识,在实际生产环境中是使用 make 工具进行管理工程和编译的以及安装卸载的,make 工具需要 Makefile 文件,那么这个 Makefile 文件是手动编写的吗?\n当然可以手动编写,但生产环境一般是用 automake 工具进行自动生成 Makefile 文件的(就是你编译安装软件是用的 ./configure)这个工具的使用篇幅也不小,有空在写吧...\n小弟正在学习当中,有错误请大神指出,赐教^_^----Aquarius_Coder")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"linux-环境开发-gcc-编译以及动态连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-环境开发-gcc-编译以及动态连接","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux 环境开发--gcc 编译以及动态连接")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 简介")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"一些基础概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些基础概念","aria-hidden":"true"}},[this._v("#")]),this._v(" 一些基础概念")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("后缀名")]),t._v(" "),s("th",[t._v("含义")]),t._v(" "),s("th",[t._v("后缀名")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v(".o")]),t._v(" "),s("td",[t._v("c 代码文件")]),t._v(" "),s("td",[t._v(".s/.S")]),t._v(" "),s("td",[t._v("汇编语言原始程序")])]),t._v(" "),s("tr",[s("td",[t._v(".c/.cc/.cxx")]),t._v(" "),s("td",[t._v("C++ 代码文件")]),t._v(" "),s("td",[t._v(".h")]),t._v(" "),s("td",[t._v("预处理文件（头文件）")])]),t._v(" "),s("tr",[s("td",[t._v(".m")]),t._v(" "),s("td",[t._v("Objective-C 代码文件")]),t._v(" "),s("td",[t._v(".o")]),t._v(" "),s("td",[t._v("可重定向文件")])]),t._v(" "),s("tr",[s("td",[t._v(".i")]),t._v(" "),s("td",[t._v("经过预处理的 C 代码文件")]),t._v(" "),s("td",[t._v(".a/.so")]),t._v(" "),s("td",[t._v("编译后的库文件")])]),t._v(" "),s("tr",[s("td",[t._v(".ii")]),t._v(" "),s("td",[t._v("经过预处理的 C++ 代码文件")]),t._v(" "),s("td"),t._v(" "),s("td")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"常用编译选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用编译选项","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用编译选项")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("选项")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-c")]),t._v(" "),s("td",[t._v("生成目标文件“.o”")])]),t._v(" "),s("tr",[s("td",[t._v("-S")]),t._v(" "),s("td",[t._v("生成汇编代码")])]),t._v(" "),s("tr",[s("td",[t._v("-E")]),t._v(" "),s("td",[t._v("只进行预编译")])]),t._v(" "),s("tr",[s("td",[t._v("-g")]),t._v(" "),s("td",[t._v("在可执行程序中包含标准调试信息")])]),t._v(" "),s("tr",[s("td",[t._v("-o")]),t._v(" "),s("td",[t._v("输出文件")])]),t._v(" "),s("tr",[s("td",[t._v("-v")]),t._v(" "),s("td",[t._v("打印出编译过程")])]),t._v(" "),s("tr",[s("td",[t._v("-I")]),t._v(" "),s("td",[t._v("添加头文件搜索目录")])]),t._v(" "),s("tr",[s("td",[t._v("-L")]),t._v(" "),s("td",[t._v("添加库搜索目录")])]),t._v(" "),s("tr",[s("td",[t._v("-static")]),t._v(" "),s("td",[t._v("生成链接静态库")])]),t._v(" "),s("tr",[s("td",[t._v("-llibrary")]),t._v(" "),s("td",[t._v("连接名为library的库文件(注意没有空格)")])]),t._v(" "),s("tr",[s("td",[t._v("-fPIC")]),t._v(" "),s("td",[t._v("地址无关代码")])]),t._v(" "),s("tr",[s("td",[t._v("-shared")]),t._v(" "),s("td",[t._v("生成共享库")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"静态库和共享库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态库和共享库","aria-hidden":"true"}},[this._v("#")]),this._v(" 静态库和共享库*")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("静态库: 在 linux 中一般以 libxxx.a 命名.静态库中包含了所有代码和数据,在编译时会把代码和数据拷贝合并到可执行文件当中.因此,静态库是编译时需要的,不是执行时需要的.")]),this._v(" "),a("li",[this._v("共享库:在 linux 中一般以 libxxx.M.N.so 命名,MN 为主副版本号,so 文件当中有自己的代码和函数,当可执行文件运行并调用动态库中的文件时需要借助连接程序 ld 把控制全交给动态库中执行.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat_say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I am cat\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mouse_say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I am cat\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("ifndef")]),t._v(" __ANIMAL_H__")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat_say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mouse_say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdlib.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"animal.h"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat_say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("[aquarius@localhost libtest]$ ll\n-rw-rw-r--: 1 aquarius aquarius 65 Mar  1 15:16 animal.h\n-rw-rw-r--: 1 aquarius aquarius 63 Mar  1 17:05 cat.c\n-rw-rw-r--: 1 aquarius aquarius 78 Mar  1 15:20 main.c\n-rw-rw-r--: 1 aquarius aquarius 67 Mar  1 15:21 mouse.c\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("直接生成可执行文件")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("[aquarius@localhost libtest]$ gcc -o main main.c cat.c\n  [aquarius@localhost libtest]$ ./main\nI am cat\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("使用静态库")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("[aquarius@localhost libtest]$ gcc -c cat.c mouse.c\n  [aquarius@localhost libtest]$ ll \\*.o\n-rw-rw-r--. 1 aquarius aquarius 1488 Mar 8 22:09 cat.o\n-rw-rw-r--. 1 aquarius aquarius 1488 Mar 8 22:09 mouse.o\n[aquarius@localhost libtest]$ ar -crv libanimal.a cat.o mouse.o\n  a - cat.o\n  a - mouse.o\n  [aquarius@localhost libtest]$ gcc -o main main.c -L. -lanimal\n[aquarius@localhost libtest]\\$ ./main\nI am cat\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("使用共享库")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("[aquarius@localhost libtest]$ gcc -fPIC -shared -o libanimal.so cat.c mouse.c\n  [aquarius@localhost libtest]$ gcc -o main main.c -L. -lanimal.1.0\n[aquarius@localhost libtest]\\$ ./main\n./main: error while loading shared libraries: libanimal.1.0.so: cannot open shared object file: No such file or directory\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("[aquarius@localhost libtest]$ ldd ./main\n    linux-vdso.so.1 =>  (0x00007fff921f8000)\n    libanimal.1.0.so => not found\n    libc.so.6 => /lib64/libc.so.6 (0x00007fd5d0fd7000)\n    /lib64/ld-linux-x86-64.so.2 (0x00007fd5d13bc000)\n[aquarius@localhost libtest]$ sudo ldconfig `pwd`\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("[aquarius@localhost libtest]$ ldd ./main\n    linux-vdso.so.1 =>  (0x00007fff477fb000)\n    libanimal.1.0.so => /home/aquarius/libtest/libanimal.1.0.so (0x00007f45cb476000)\n    libc.so.6 => /lib64/libc.so.6 (0x00007f45cb0b8000)\n    /lib64/ld-linux-x86-64.so.2 (0x00007f45cb69f000)\n[aquarius@localhost libtest]$ ./main\nI am cat\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])}],!1,null,null,null);a.default=n.exports}}]);