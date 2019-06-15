(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{196:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("原文： "),s("a",{attrs:{href:"https://wiki.openoffice.org/wiki/Writer/Code_Conventions",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.openoffice.org/wiki/Writer/Code_Conventions"),s("OutboundLink")],1),s("br"),t._v("\n作者：OpenOffice.org 译者：aqcoder(flw_dream@126.com)")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("本约定为作为"),s("a",{attrs:{href:"https://wiki.openoffice.org/wiki/Cpp_Coding_Standards",target:"_blank",rel:"noopener noreferrer"}},[t._v("OppenOffice.org 代码规范"),s("OutboundLink")],1),t._v("的附加说明为开发者制定 cpp 代码的编写约定。约定基本有实践总结得到。")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("目前 OOo 代码命名规范是相当模糊的。“入乡随俗。”如果现有代码本身就是不一致将不对其做改动。本约定只做为新代码的命名约定。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),s("p",[t._v("有些老的模块使用前缀来代替命名空间，当在其加入新代码时使用包含在内的命名空间，不要新建模块。")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),s("p",[t._v("在 sw 模块，在全局命名空间的类需要加前缀 Sw")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),s("p",[t._v("方法使用小写前缀驼峰法或者大写前缀驼峰法，通常以动词开头。")]),t._v(" "),t._m(15),s("p",[t._v("注意,甚至缩写通常大写都只有第一个字母大写。如果一个类没有遵循这个惯例,使用旧的惯例或更新类是完全符合本约定的。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),s("p",[t._v("有些值类型使用特定前缀而不是使用 a")]),t._v(" "),t._m(23),t._v(" "),s("p",[t._v("如果一个方法没有遵循本约定，保持原来的约定或者更新到现有约定。\n下面给出一些好的/坏的匈牙利符号")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"http://herbsutter.wordpress.com/2008/07/15/hungarian-notation-is-clearly-goodbad/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://herbsutter.wordpress.com/2008/07/15/hungarian-notation-is-clearly-goodbad/"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://en.wikipedia.org/wiki/Hungarian_notation",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://en.wikipedia.org/wiki/Hungarian_notation"),s("OutboundLink")],1)])]),t._v(" "),t._m(24)]),t._v(" "),t._m(25),t._m(26),t._v(" "),s("p",[t._v("参数命名遵从的规则和局部变量一致，但是有一些附加前缀：")]),t._v(" "),t._m(27),t._v(" "),s("p",[t._v("如果函数没有遵从本约定，则保留原来的约定或者都改为遵从本约定。")]),t._v(" "),t._m(28),t._v(" "),s("p",[t._v("成员变量命名遵从局部变量的约定，但是需要加上前缀 ‘m_’。")]),t._v(" "),t._m(29),s("p",[t._v("如果函数没有遵从本约定，则保留原来的约定或者都改为遵从本约定。")]),t._v(" "),t._m(30),t._v(" "),s("p",[t._v("成员变量命名遵从局部变量的约定，但是需要加上前缀 ‘our_’。")]),t._v(" "),t._m(31),s("p",[t._v("如果函数没有遵从本约定，则保留原来的约定或者都改为遵从本约定。")]),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),s("p",[t._v("typedefs 必须以 _t 或者 _type 结尾。")]),t._v(" "),t._m(36),s("p",[t._v("模板参数必须以大写字母 t 开始，紧接着小写开头单词：")]),t._v(" "),t._m(37),t._m(38),t._v(" "),s("p",[t._v("命名前缀规则:")]),t._v(" "),t._m(39),s("p",[t._v("scope-prefix 是如下其中一个:")]),t._v(" "),t._m(40),t._v(" "),s("p",[t._v("匈牙利前缀参考上文所述。")]),t._v(" "),t._m(41),t._v(" "),s("p",[t._v("Makefile 中的列表您可能的一个入口占一行，且按字母顺序排列，这样容易合并。")]),t._v(" "),t._m(42),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),s("p",[t._v("如果对可读性没有帮助，在这些情况下不要断行，记住：字符串常量可以断行：")]),t._v(" "),t._m(47),s("ul",[s("li",[s("p",[t._v("缩进方法遵循 "),s("a",{attrs:{href:"http://en.wikipedia.org/wiki/Indent_style#Allman_style_.28bsd_in_Emacs.29",target:"_blank",rel:"noopener noreferrer"}},[t._v("Allman-Style"),s("OutboundLink")],1)])]),t._v(" "),t._m(48)]),t._v(" "),t._m(49),s("p",[t._v("但是要注意即使语句很短，在调试的时候换行对设置断点是很有用的。所以尽量不要在 if 语句中使用一行。")]),t._v(" "),t._m(50),t._v(" "),t._m(51),s("p",[t._v("当在一个列表(如参数列表或 for 语句)使用换行，使每条语句为一行。")]),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._m(56),t._v(" "),t._m(57),t._m(58),t._v(" "),t._m(59),t._m(60),t._v(" "),t._m(61),t._v(" "),s("h2",{attrs:{id:"不宜使用的类型-已经被-openoffice-org-编码规范覆盖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不宜使用的类型-已经被-openoffice-org-编码规范覆盖","aria-hidden":"true"}},[t._v("#")]),t._v(" 不宜使用的类型(已经被 "),s("a",{attrs:{href:"https://wiki.openoffice.org/wiki/Cpp_Coding_Standards",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenOffice.org"),s("OutboundLink")],1),t._v(" 编码规范覆盖)")]),t._v(" "),t._m(62)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"openoffice-代码约定规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#openoffice-代码约定规范","aria-hidden":"true"}},[this._v("#")]),this._v(" OpenOffice 代码约定规范")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"如何使用本代码约定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何使用本代码约定","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何使用本代码约定")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"命名约定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命名约定","aria-hidden":"true"}},[this._v("#")]),this._v(" 命名约定")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"工程结构、文件名、命名空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工程结构、文件名、命名空间","aria-hidden":"true"}},[this._v("#")]),this._v(" 工程结构、文件名、命名空间")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("工程目录结构：源文件必须在模块的 "),s("code",[t._v("source/")]),t._v(" 目录下，包含头文件必须在模块的 "),s("code",[t._v("source/inc/")]),t._v(" 或者 "),s("code",[t._v("inc/")]),t._v(" 目录下。")]),t._v(" "),s("li",[s("code",[t._v("inc/foo.hxx")]),t._v(" 或者 "),s("code",[t._v("source/inc/foo.hxx")]),t._v(" 是给模块内部使用的头文件，而 "),s("code",[t._v("inc/$PRJ_NAME/foo.hxx")]),t._v(" 是导出头文件。")]),t._v(" "),s("li",[t._v("对于导出的头文件，尽量减小头文件的内部依赖，如果一个导出头文件一部分需要导出一部分内部使用，则切分这个头文件。")]),t._v(" "),s("li",[t._v("文件名只能匹配为 [a-zA-Z][a-za-z0-9.-]*，且头文件/源文件的扩展名为 hxx/cxx。类名推荐使用驼峰法。")]),t._v(" "),s("li",[t._v("命名空间全为小写。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("namespace com { namespace sun { namespace star { }}}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("namespace sw { namespace newnamespace {}}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"类名、方法名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类名、方法名","aria-hidden":"true"}},[this._v("#")]),this._v(" 类名、方法名")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"类名和接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类名和接口","aria-hidden":"true"}},[this._v("#")]),this._v(" 类名和接口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("使用大写前缀驼峰法命名类名")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("namespace sw\n{\n    class SomeClassExample;\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("class SwSomeClassExample;\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("接口以 I 为前缀，接口必须是纯虚基类。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("namespace sw\n{\n    class ISomeInterfaceExample;\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("void SomeClassExample::appendChild();\nvoid fixUrlHeaders();\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("关于方法名使用大写前缀驼峰法还是小写驼峰法：当实现 UNO 接口时类的方法使用小写前缀驼峰法。")]),this._v(" "),e("li",[this._v("本地方法使用静态函数，并且定义在匿名命名空间中，以 lcl_ 做为前缀。")]),this._v(" "),e("li",[this._v("函数返回布尔值需要以回答问题的方式(译者注：应该是指一些成员函数)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("bool hasChild();\nbool isLeaf();\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"变量、参数、成员、常亮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量、参数、成员、常亮","aria-hidden":"true"}},[this._v("#")]),this._v(" 变量、参数、成员、常亮")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"局部变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#局部变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 局部变量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("局部变量使用匈牙利命名法，用个小写字母做为前缀，紧跟着大写前缀名称。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("const sal_Int32 aParameterName;\nconst OUString& rParameterByReference;\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("前缀")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("r")]),t._v(" "),s("td",[t._v("引用")])]),t._v(" "),s("tr",[s("td",[t._v("x")]),t._v(" "),s("td",[t._v("UNO 引用")])]),t._v(" "),s("tr",[s("td",[t._v("p")]),t._v(" "),s("td",[t._v("指针(包括 STL 风格的迭代器和智能指针，UNO 引用除外)")])]),t._v(" "),s("tr",[s("td",[t._v("a")]),t._v(" "),s("td",[t._v("一些值")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("前缀")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("c")]),t._v(" "),s("td",[t._v("字符型")])]),t._v(" "),s("tr",[s("td",[t._v("e")]),t._v(" "),s("td",[t._v("枚举类型")])]),t._v(" "),s("tr",[s("td",[t._v("f")]),t._v(" "),s("td",[t._v("浮点型")])]),t._v(" "),s("tr",[s("td",[t._v("n")]),t._v(" "),s("td",[t._v("整型")])]),t._v(" "),s("tr",[s("td",[t._v("s")]),t._v(" "),s("td",[t._v("字符串型")])]),t._v(" "),s("tr",[s("td",[t._v("v")]),t._v(" "),s("td",[t._v("容器 (vector)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("布尔类型变量需要使用回答的形式，使用 is/has 作为匈牙利前缀。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("bool isLeaf;\nbool hasChild;\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 参数")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("前缀")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("i_")]),t._v(" "),s("td",[t._v("传入参数")])]),t._v(" "),s("tr",[s("td",[t._v("o_")]),t._v(" "),s("td",[t._v("传出参数")])]),t._v(" "),s("tr",[s("td",[t._v("io_")]),t._v(" "),s("td",[t._v("传入传出")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"成员变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#成员变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 成员变量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("SwPosition m_aPosition;\nNode const * const m_pParent;\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"静态成员变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态成员变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 静态成员变量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("static ::osl::Mutex our_aFileMutex;\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"常量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常量","aria-hidden":"true"}},[this._v("#")]),this._v(" 常量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("不要使用预处理宏代替常量，尽量不要使用全局常量。")]),this._v(" "),e("li",[this._v("如果可能的话尽量使用 static const 修饰常量。")]),this._v(" "),e("li",[this._v("在 cxx 文件中，常量成员放到匿名命名空间中。(不要将他们放到头文件中)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('namespace\n{\n    static const OUString sLogging = OUString::createFromAscii("com.sun.star.logging");\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"typedefs-和模板参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typedefs-和模板参数","aria-hidden":"true"}},[this._v("#")]),this._v(" typedefs 和模板参数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("class MyClass\n{\n    typedef ::rtl::OUString string_t;\n    typeded sal_Int32 element_t;\n};\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("template<typename Tparam> class MyTemplateClass {};\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"一般命名规则和语义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一般命名规则和语义","aria-hidden":"true"}},[this._v("#")]),this._v(" 一般命名规则和语义")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("<scope-prefix>_<hungarian-prefix>VariableName;\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("前缀")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td"),t._v(" "),s("td",[t._v("局部变量")])]),t._v(" "),s("tr",[s("td",[t._v("i_")]),t._v(" "),s("td",[t._v("传入参数")])]),t._v(" "),s("tr",[s("td",[t._v("o_")]),t._v(" "),s("td",[t._v("传出参数")])]),t._v(" "),s("tr",[s("td",[t._v("io")]),t._v(" "),s("td",[t._v("传入传出参数")])]),t._v(" "),s("tr",[s("td",[t._v("m_")]),t._v(" "),s("td",[t._v("成员变量")])]),t._v(" "),s("tr",[s("td",[t._v("our_")]),t._v(" "),s("td",[t._v("金泰成员变量")])]),t._v(" "),s("tr",[s("td",[t._v("g_")]),t._v(" "),s("td",[t._v("全局变量")])]),t._v(" "),s("tr",[s("td",[t._v("lcl_")]),t._v(" "),s("td",[t._v("文件局部成员函数或变量")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"书写格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#书写格式","aria-hidden":"true"}},[this._v("#")]),this._v(" 书写格式")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-Makefile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-makefile"}},[s("code",[t._v("SLOFILES"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \\\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SLO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$/config.obj")]),t._v(" \\\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SLO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$/corecontroller.obj")]),t._v(" \\\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SLO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$/errormail.obj")]),t._v(" \\\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SLO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$/invitejob.obj")]),t._v(" \\\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SLO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$/logpacker.obj")]),t._v(" \\\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SLO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$/logstorage.obj")]),t._v(" \\\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SLO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$/myconfigurationhelper.obj")]),t._v(" \\\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SLO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$/onlogrotatejob.obj")]),t._v(" \\\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SLO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$/oooimprovement_exports.obj")]),t._v(" \\\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SLO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$/soaprequest.obj")]),t._v(" \\\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SLO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$/soapsender.obj")]),t._v(" \\\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("cpp 文件按如下顺序布局")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("license")]),t._v(" "),s("li",[t._v("includes")]),t._v(" "),s("li",[t._v("defines (if and)")]),t._v(" "),s("li",[t._v("global using statements")]),t._v(" "),s("li",[t._v("anonymous namespace with local functions and data(implementation files only)")]),t._v(" "),s("li",[t._v("anything else")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("尽量保持每行少于 80 个字符(否则你就要考虑重构了)。在如下条件下可以忽略这条约定：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("头文件声明不允许，类型名很长。")]),this._v(" "),e("li",[this._v("在子类声明中罗列基类的虚函数时不允许换行。")]),this._v(" "),e("li",[this._v("定义字符串常量。")]),this._v(" "),e("li",[this._v("断言字符串，等。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('static const SOME_STRING = ::rtl::OUString::createFromAscii(\n    "Libertatem quam peperere maiores digne studeat servare posteritas.\\n"\n    "means\\n"\n    "May the freedom won by our forefathers be conserved in dignity for posterity.\\n");\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("if 判断时，语义通顺且短，可以放在一行中：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("if(!pData) return;\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在一份声明中如果使用换行(如果 if 语句, 参数列表),不使用空间对齐语句。其不良维护。简单的缩进线继续发表声明就可以了:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Reference<XInterface> MyConfigurationHelper::openConfig(\n    const Reference<XMultiServiceFactory> xSMGR,\n    const OUString& sPackage,\n    sal_Int32 eMode)\n{ }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v('代码注释中不要包含时间戳("created on", "last modified by")，因为他们是无效的。在 bug/issues 中注明修改，即使只有简单的几行说明，这是为了方便问题回归。')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"通用约定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用约定","aria-hidden":"true"}},[this._v("#")]),this._v(" 通用约定")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("在源文件中不要出现交叉包含。例如：sw/source/ui 下的源文件只能包含 sw 模块的全局包含目录 sw/inc 和 ui 下的包含目录 /sw/source/ui/inc。他不能包含项 /sw/source/core/inc 和 sw/source/filter/inc 这样的其他目录下的头文件。")])]),this._v(" "),e("li",[e("p",[this._v("保证成员变量都是私有的或者是受保护的。如果需要的话生命内联属性器方法 getter/setter。属性器的名称是成员变量的名称去除前缀。如果一定要定义共有的成员请使用结构体关键字 struct 代替 class。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("class SomeExampleClass\n{\n    public:\n        ::rtl::OUString getName();\n        void setName(const OUString& rName);\n    private:\n        ::rtl::OUString m_aName;\n};\nstruct AnotherExampleClass\n{\n   public:\n       ::rtl::OUString m_aName;\n};\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("函数实现不要超过 200 行(超过的话请重构)")]),this._v(" "),e("li",[this._v("如果可能的话使用块限制局部变量的范围。一个局部变量应该很少超过一个屏幕的长度(30 - 60 LOC)。")]),this._v(" "),e("li",[this._v("保证头文件的可读性\n** 在头文件中使用 handle/body(pimpl) 或者虚基类来屏蔽具体的实现细节。使用 boost::scoped_ptr<>(详见 "),e("img",{attrs:{src:"http://www.boost.org/doc/libs/1_35_0/libs/smart_ptr/scoped_ptr.htm",alt:"http://www.boost.org/doc/libs/1_35_0/libs/smart_ptr/scoped_ptr.htm"}}),this._v(" 和 "),e("img",{attrs:{src:"http://www.boost.org/doc/libs/1_35_0/libs/smart_ptr/sp_techniques.html",alt:"http://www.boost.org/doc/libs/1_35_0/libs/smart_ptr/sp_techniques.html"}}),this._v(") 代替纯指针，因为具体实现不需要暴露在头文件中。\n** 尽量避免在头文件中定义私有的成员函数。如果实现函数只需访问一些成员对象，在匿名命名空间中实现这些函数。如果需要访问太多的成员对象，请重构。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("namespace\n{\n    static sal_Int32 lcl_countLines(const Sequence<sal_Int8>& rBuffer)\n    {\n        ...\n    };\n}\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("尽量避免暴露纯指针，使用 com::sun:⭐️:uno::Reference 引用 UNO 对象，boost::shared_ptr<> 引用其他对象。如果需要纯指针就使用 shared_ptr<>.get()。无论何时都要保证访问的指针是有效的。很多时候使用 boost::weak_ptr<> 都是使用纯指针好。")])]),t._v(" "),s("li",[s("p",[t._v("断言：在 OOo 中有很多种断言，通常都是一些宏定义：\n** OSL_ENSURE 只有在 debug 下才有效。\n** DBG_* 是模块工具定义的。所以(therefore evil by definition?)")])]),t._v(" "),s("li",[s("p",[t._v("use mutable and explicit in new code")])]),t._v(" "),s("li",[s("p",[t._v("在新代码里使用英文注释，不要在同一个方法中混合德语和英语，如果重构一个模块，把注释翻译成英语。")])]),t._v(" "),s("li",[s("p",[t._v("不要使用 C-style 的类型转换，使用 C++-style 的类型转换。")])]),t._v(" "),s("li",[s("p",[t._v("提供纯虚函数作为接口。")])]),t._v(" "),s("li",[s("p",[t._v("Do not link against specific implementations, link against interfaces.")])]),t._v(" "),s("li",[s("p",[t._v("使用虚共有继承实现接口。")])]),t._v(" "),s("li",[s("p",[t._v("在纯虚基类中使用宏 SAL_NO_VTABLE：")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("struct SAL_NO_VTABLE IMyInterface\n{\n   virtual void myMethod() = 0;\n};\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Use SAL"),e("em",[this._v("DLLPRIVATE and SAL_DLLPUBLIC")]),this._v("* for large shared libraries that are not only exporting the few UNO component access functions. See e.g. svx/svxdllapi.h for a usage example.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在非 UNO 组件的共享库中使用 SAL"),e("em",[this._v("DLLPRIVATE 和 SAL_DLLPUBLIC")]),this._v("* 指定导出，参考例子 svx/svxdllapi.h。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("不要使用 /svtools/svarray.h 或 /svtools/svstdarr.hxx 中的容器，或类似的代码。使用 STL 的容器。")])]),t._v(" "),s("li",[s("p",[t._v("避免使用 tools/rtti.hxx 中的 rtti(运行时类型识别)，使用 C++ 内置的 RTTI(type_info, dynamic_cast, typeid)。")])]),t._v(" "),s("li",[s("p",[t._v('不要使用 "tools/contnr.hhx", "tools/table.hxx", "tools/stack.hxx", "tools/queue.hxx", "tools/dynary.hxx" 中的容器。使用 STL 代替。')])]),t._v(" "),s("li",[s("p",[t._v("不要在新代码中使用 ByteString 或者 std::string，使用 OUString 代替。")])]),t._v(" "),s("li",[s("p",[t._v("不要在新代码中使用 String，使用 OUString 代替。")])]),t._v(" "),s("li",[s("p",[t._v("不要在新代码中使用 BOOL 或者 FASTBOOL，使用 bool 代替，在 UNO 中使用 sal_Bool。")])]),t._v(" "),s("li",[s("p",[t._v("其他：如果 UNO 类型可用，使用 UNO 类型。")])])])}],!1,null,null,null);e.default=r.exports}}]);