(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{180:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("刚学 Python 不久,写下自己的认识,当做学习笔记吧,有什么不对的地方欢迎拍砖...")]),t._v(" "),t._m(1),t._v(" "),t._m(2),a("p",[t._v("python 类的定义语法如上,简单吧.但是 Python 类有区别 C++ 等语言特殊的地方,这里我们主要来谈谈这些特殊的地方")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("在类定义的紧接下一行的三引号中的注释是类的 doc, 调用内建函数 help() 时可以看到这些注释信息,这是 python 的标准")]),t._v(" "),t._m(4),a("p",[t._v("python 类的定义语法如上,简单吧.但是 Python 类有区别 C++ 等语言特殊的地方,这里我们主要来谈谈这些特殊的地方")]),t._v(" "),a("p",[t._v("在类定义的紧接下一行的三引号中的注释是类的 doc, 调用内建函数 help() 时可以看到这些注释信息,这是 python 的标准注释方法")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("python 类中定义的属性是类的属性")]),t._v(" "),t._m(8),a("p",[t._v("这两个属性就是类属性,就像是 C++ 中的静态成员变量.")]),t._v(" "),t._m(9),a("p",[t._v("那么怎么定义实例属性呢? python 的属性可以是动态的,对没错是动态的,对与玩 C++ 的我看到这点我快惊呆了,还可以这么玩...")]),t._v(" "),t._m(10),a("p",[t._v("认真分析这段代码,当实例化实例 ia 时,ia 的 version 属性就是类的属性,所以更改了类的属性值后, 实例 ia 的值也跟这改变了\n当对实例 ia 赋值后,实例 ia 也有了 version 属性,此同名属性会隐藏掉类的 version 属性,这里其实有两个 version 属性,所以当改变类 clsA.version 的值后 ia.version 没有改变.")]),t._v(" "),t._m(11),a("p",[t._v("删除实例属性后,实例有将使用类的属性.\n接下来我们在看一个可变类型的属性,其实是一样的,但是要注意理解可变类型的特性")]),t._v(" "),t._m(12),a("p",[t._v("关键的地方我都注释了,天才的你肯定可以看懂,我就不多啰嗦了^_^...")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),a("p",[t._v("直接调用抛出异常,实例化后调用就正常了,那么有没有静态方法呢,有的")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),a("p",[t._v("这里使了函数修饰,不懂什么是函数修饰打童鞋可以去搜搜 python 函数修饰.\nps: 这个特性也是个很有意思打特性,以前哇只热衷与 C/C++, 没想到这些动态语言这么有意思,哈哈,学海无涯啊...有种闹东大开打感觉...\n好啦,就总结这些,当笔记,例外打个广告: 我在边学 python 的时候边用 Django 搭建啦一个个人主页 "),a("a",{attrs:{href:"http://aquariushome.duapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://aquariushome.duapp.com/"),a("OutboundLink")],1),t._v(" 欢迎拍砖吐槽哈....")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"谈谈-python-类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#谈谈-python-类","aria-hidden":"true"}},[this._v("#")]),this._v(" 谈谈 Python 类")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"类定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类定义","aria-hidden":"true"}},[this._v("#")]),this._v(" 类定义")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("clsA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''this is doc'''")]),t._v("\n  version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v("刚学 Python 不久"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("写下自己的认识"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("当做学习笔记吧"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("有什么不对的地方欢迎拍砖"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("clsA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''this is doc'''")]),t._v("\n  version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v("\n  log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'log0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"doc-注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doc-注释","aria-hidden":"true"}},[this._v("#")]),this._v(" doc 注释")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'log0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"init-self-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init-self-方法","aria-hidden":"true"}},[this._v("#")]),this._v(" __init__(self)方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("int")]),this._v("(self) 方法不是构造函数,他只是类实例化后 "),s("strong",[this._v("第一个")]),this._v(" "),s("strong",[this._v("自动执行")]),this._v(" ,的方法,这个方法也可带上参数来完成必要的出事化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"类属性和实例属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类属性和实例属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 类属性和实例属性")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v("\nlog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'log0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(">>>clsA.version\n0.1\n>>>clsA.version = 0.2\n>>>clsA.version\n0.2\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(">>>ia = clsA()\n>>>ia.version\n0.2\n>>>clsA.version = 0.3\n>>>ia.version\n0.3 # 注意这里值变了\n>>>ia.version = 0.4\n>>>clsA.version\n0.3 # 注意这里还是 0.3\n>>>ia.version\n0.4\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("  >>>del ia.version\n  >>>ia.version\n  0.3\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(">>>ib = clsA()\n>>>ib.log\n{'0':'log0'}\n>>>ib.log['1':'log1']     # 并没有创建实例属性，只是引用了类属性\n>>>ib.log\n{'0':'log0', '1':'log1' }\n>>>clsA.log\n{'0':'log0', '1':'log1' } # 所以类属性被修改\n>>>\n>>>ib.log = {}            # 这样就创建了实例属性，类属性被隐蔽了\n>>>ib.log\n{}\n>>>clsA.log\n{'0':'log0', '1':'log1' }\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"类的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类的方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 类的方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("类的方法必须是在实例中调用,用 python 术语是叫 "),s("strong",[this._v("绑定")]),this._v(",")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('>>>clsA.fun()\nTraceback (most recent call last):\nFile "<stdin>", line 1, in <module>\nTypeError: unbound method fun() must be called with clsA instance as first argument (got nothing instead)\n>>>\n>>>ia.fun()\n>>>\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"静态方法和类方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态方法和类方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 静态方法和类方法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestStaticMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    @"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("staticmethod")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'calling static method foo()'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestClassMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    @"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("classmethod")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 传入类")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'calling static method foo()'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(">>>tsm = TestStaticMethod()\n>>>tsm.foo()\n'calling static method foo()'\n>>>TestStaticMethod.foo()\n'calling static method foo()'\n>>>\n>>>tcm = TestClassMethod()\n>>>tcm.foo()\n'calling static method foo()'\n>>>TestClassMethod.foo()\n'calling static method foo()'\n")])])])}],!1,null,null,null);s.default=e.exports}}]);