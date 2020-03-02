(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{177:function(e,n,t){"use strict";t.r(n);var r=t(0),i=Object(r.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),t("p",[e._v("这里我主要讲解 LibreOffice 的相关部分，MFC 相关的部分就要带过，特别注意环境设置(ps: 玩MFC 的童鞋都不用多说，不要闲我啰嗦 ^_^)\n1.建立一个当文档程序")]),e._v(" "),t("p",[e._v("2.设置头文件包含目录")]),e._v(" "),e._m(4),t("p",[e._v("注意第二个目录是编译 cpp 例子得到的，详见"),t("a",{attrs:{href:"http://blog.csdn.net/my___dream/article/details/45176921",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://blog.csdn.net/my___dream/article/details/45176921"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("3.设置库目录 C:\\LibreOffice4\\sdk\\lib")]),e._v(" "),t("p",[e._v("4.添加环境变量 PATH： C:\\LibreOffice4\\URE\\bin")]),e._v(" "),t("p",[e._v("5.show you the code：\n包含头文件以及命名空间")]),e._v(" "),e._m(5),t("p",[e._v("在 View 中重写 OnInitialUpdate 函数，键入如下代码：")]),e._v(" "),e._m(6),t("p",[e._v("代码解释（按注释行解释）：")]),e._v(" "),t("ol",[e._m(7),e._v(" "),t("li",[t("p",[e._v("// init XComponentContext & XMultiComponentFactory & XMultiServiceFactory\n初始化组件上下文、组件工厂(顺带提一下，LibreOffice 需要 UNO 编程的知识， 没接触过 UNO 的童鞋看看这个\n中文："),t("a",{attrs:{href:"https://wiki.openoffice.org/wiki/Zh/Documentation/DevGuide/OpenOffice.org_Developers_Guide)",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.openoffice.org/wiki/Zh/Documentation/DevGuide/OpenOffice.org_Developers_Guide)"),t("OutboundLink")],1),e._v("\n英文："),t("a",{attrs:{href:"https://wiki.openoffice.org/wiki/Documentation/DevGuide/OpenOffice.org_Developers_Guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.openoffice.org/wiki/Documentation/DevGuide/OpenOffice.org_Developers_Guide"),t("OutboundLink")],1)])]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12)]),e._v(" "),t("p",[e._v("所以，在析构函数中加入如下代码：")]),e._v(" "),e._m(13),t("p",[e._v("以及成员变量")]),e._v(" "),e._m(14),t("p",[e._v("OK, MFC 的示例就酱完了，刚开始看 UNO 的代码可能有点累，都是模板和接口，建议先收悉一下 UNO 编程的相关知识，上面给的中文连接还有没翻译完，建议看英文的。。。英文不好的程序员不是好程序员 ->_->")]),e._v(" "),e._m(15),e._v(" "),t("p",[e._v("Winform 的代码步骤是一样的: 初始化 --\x3e 创建容器 --\x3e 加载组件 --\x3e 移动窗口。")]),e._v(" "),e._m(16),e._v(" "),e._m(17),t("p",[e._v("这个实例在主窗口初始化的时候就加载了，所以加载的文档是写死的，注意是正斜杠哦。。。\n代码基本和 C++  的一样就不解释了，提一下就是 MoveWindows() 用到了 Win32API 不知道 C# 如何调用 Win32API 的童鞋自己 Google 吧 ^_^\n好了，我也刚开始学 LO，这种方法还没在实际项目中验证，如有错漏之处还请大神请教，共勉。。。")])])},[function(){var e=this.$createElement,n=this._self._c||e;return n("h1",{attrs:{id:"libreoffice-sdk-开发实战：嵌入mfc-view-和-c-winform"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#libreoffice-sdk-开发实战：嵌入mfc-view-和-c-winform","aria-hidden":"true"}},[this._v("#")]),this._v(" LibreOffice-SDK 开发实战：嵌入MFC-View 和 C# Winform")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("前面片文章中我简要介绍了下 LibreOffice SDK 的环境配置，以及 cpp 中一个例子的编译。\n接下来我们来看一下如何将 LibreOffice 嵌入到 MFC 的 View 中和 C# 的 Winform 中。先上两张效果图：\nMFC View:\n"),n("img",{attrs:{src:"http://img.blog.csdn.net/20150421221648325",alt:"这里写图片描述"}})])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("C# Winform:\n"),n("img",{attrs:{src:"http://img.blog.csdn.net/20150421230752061",alt:"这里写图片描述"}})])},function(){var e=this.$createElement,n=this._self._c||e;return n("h2",{attrs:{id:"mfc-view"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mfc-view","aria-hidden":"true"}},[this._v("#")]),this._v(" MFC View")])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("C:\\LibreOffice4\\sdk\\include\nC:\\LibreOffice4\\sdk\\includecpp\n")])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('#include "sal/config.h"\n#include <sal/main.h>\n#include <rtl/ustring.hxx>\n#include <osl/diagnose.h>\n#include <cppuhelper/bootstrap.hxx>\n#include <com/sun/star/bridge/XUnoUrlResolver.hpp>\n#include <com/sun/star/registry/XSimpleRegistry.hpp>\n#include <com/sun/star/lang/XMultiComponentFactory.hpp>\n#include <com/sun/star/frame/XDesktop.hpp>\n#include <com/sun/star/uno/Reference.h>\n#include <com/sun/star/lang/XComponent.hpp>\n#include <com/sun/star/awt/XSystemChildFactory.hpp>\n#include <com/sun/star/util/URL.hpp>\n#include <com/sun/star/beans/XPropertySet.hpp>\n#include <com/sun/star/container/XNameAccess.hpp>\n#include <com/sun/star/container/XEnumerationAccess.hpp>\n#include <com/sun/star/frame/XComponentLoader.hpp>\n#include <com/sun/star/frame/XTitle.hpp>\n#include <com/sun/star/util/URL.hpp>\n#include <com/sun/star/util/XCloseable.hpp>\n#include <com/sun/star/util/XCloseListener.hpp>\n#include <com/sun/star/util/CloseVetoException.hpp>\n#include <com/sun/star/uno/RuntimeException.hpp>\n#include <osl/file.hxx>\n#include <osl/process.h>\n#include <rtl/ustrbuf.hxx>\n#include <com/sun/star/awt/XSystemChildFactory.hpp>\n#include <com/sun/star/awt/XDialog2.hpp>\n#include <com/sun/star/awt/XControlModel.hpp>\n#include <com/sun/star/lang/SystemDependent.hpp>\n#include <com/sun/star/lang/XMultiServiceFactory.hpp>\n#include <com/sun/star/awt/XSystemDependentWindowPeer.hpp>\n#include <com/sun/star/util/XURLTransformer.hpp>\n#include <list>\nusing namespace cppu;\nusing namespace com::sun::star::uno;\nusing namespace com::sun::star::lang;\nusing namespace com::sun::star::beans;\nusing namespace com::sun::star::frame;\nusing ::rtl::OUString;\nusing ::rtl::OUStringToOString;\nusing namespace com::sun::star;\nusing namespace container;\nusing namespace osl;\nusing namespace rtl;\nusing namespace util;\nusing namespace awt;\n')])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('void CSDITestView::OnInitialUpdate()\n{\nCView::OnInitialUpdate();\n\nCString strFileName = GetDocument()->GetPathName();\nif (strFileName.IsEmpty())\n    return;\n\nusing com::sun::star::lang::SystemDependent::SYSTEM_WIN32;\n\n// init XComponentContext & XMultiComponentFactory & XMultiServiceFactory\nReference< XComponentContext > xContext(::cppu::bootstrap());\nReference< XMultiComponentFactory > xMultiComponetFactory = xContext->getServiceManager();\nReference<XMultiServiceFactory> xMultiServiceFactory(xMultiComponetFactory, UNO_QUERY);\n\n// create XComponentLoader\nReference< XComponentLoader > xComponentLoader = Reference<XComponentLoader>(\n    xMultiComponetFactory->createInstanceWithContext(OUString("com.sun.star.frame.Desktop"), xContext), UNO_QUERY);\n\n// create a XWindow & XFrame Adn the XWindow contain the XFrame\nReference<XSystemChildFactory> xSystemChildFactory = Reference<XSystemChildFactory>(\n    xMultiComponetFactory->createInstanceWithContext(OUString("com.sun.star.awt.Toolkit"), xContext), UNO_QUERY);\n\nReference<XWindowPeer> xPeer = Reference<XWindowPeer>(xSystemChildFactory->createSystemChild(\n    Any(reinterpret_cast<long>(m_hWnd)), Sequence<sal_Int8>(4), SYSTEM_WIN32), UNO_QUERY);\n\nif (xPeer.is())\n{\n    Reference<XWindow> xFrameContainerWindow = Reference<XWindow>(xPeer, UNO_QUERY);\n\n    Reference<XFrame> xFrame = Reference<XFrame>(xMultiComponetFactory\n        ->createInstanceWithContext(OUString("com.sun.star.frame.Frame"), xContext), UNO_QUERY);\n    if (xFrameContainerWindow.is() && xFrame.is())\n    {\n        xFrame->initialize(xFrameContainerWindow);\n        Reference<XFrames> xChildContainer =     Reference<XFramesSupplier>(xComponentLoader,UNO_QUERY)    ->getFrames();\n        xChildContainer->append(xFrame);\n        xFrame->setName(OUString("myframe")); // to identify     frame\n    }\n\n    Reference<XSystemDependentWindowPeer> xPeer(xFrameContainerWindow, UNO_QUERY);\n    if(xPeer.is())\n    {\n        xFrameContainerWindow->setVisible(true);\n        long lh = 0;\n        xPeer->getWindowHandle(Sequence<sal_Int8>(4),     SYSTEM_WIN32) >>= lh;\n        m_hPlatformContainerWindow = reinterpret_cast<HWND>(lh)    ;\n    }\n}\n\n// load component\nSequence<PropertyValue> properties;\nproperties.realloc(2);\nproperties[0] = PropertyValue(OUString("ReadOnly"), 0, Any(false), PropertyState_DIRECT_VALUE);\nproperties[1].Name = OUString(OUString("passwd"));\nproperties[1].Value = Any(OUString("abc"));\n\nURL url;\nOUString ousUrl, ousWorkingDir, ousPathUrl;\nosl_getProcessWorkingDir(&ousWorkingDir.pData);\n\nosl::FileBase::getFileURLFromSystemPath(strFileName.GetBuffer(), ousPathUrl);\nosl::FileBase::getAbsoluteFileURL(ousWorkingDir, ousPathUrl, ousUrl);\n\nurl.Complete = OUString(ousUrl);\nReference<XURLTransformer> urltf = Reference<XURLTransformer>(xMultiComponetFactory\n    ->createInstanceWithContext(OUString("com.sun.star.util.URLTransformer"), xContext), UNO_QUERY);\nurltf->parseStrict(url);\n\nReference<XComponent> xComponent = xComponentLoader->loadComponentFromURL(url.Complete,\n    OUString("myframe"),\n    4,\n    properties);\n\n// move window\nCWnd* pWnd = CWnd::FromHandle(m_hPlatformContainerWindow);\nif(pWnd)\n{\n    CRect rect;\n    CWnd::FromHandle(m_hWnd)->GetClientRect(&rect);\n    pWnd->MoveWindow(rect, TRUE);\n}\n\n// save to close\nm_xComponet = xComponent;\nm_xDesktop = Reference< XDesktop >(xComponentLoader, UNO_QUERY);\n}\n')])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("li",[n("p",[this._v("首先是判断有没打开文档，没有就返回，这个不需要解释了，一定要判断哦。。。")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("li",[n("p",[this._v("// create XComponentLoader\n创建 com.sun.star.frame.Desktop 对象得到 XComponentLoader 接口")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("li",[n("p",[this._v("// create a XWindow & XFrame Adn the XWindow contain the XFrame\n这里英文注释写的不是很准确，鄙人英文不是很好就这么写了 T_T。这部分是为了得到 XWindows 接口用于承载 XFrame 后面加载的组件都在 XFrame 容器当中。\n首先，创建一个 com.sun.star.awt.Toolkit 对象得到 XSystemChildFactory，调用 XSystemChildFactory.createSystemChild() 方法得到 XWindowPeer 接口，注意这个方法传入了父窗口句柄，也就是 View 的句柄。\n接着，创建一个 com.sun.star.frame.Frame 对象得到 XFrame 接口，并进行初始化工作，然后得到 XFrames 接口并调用 XFrames.getFrames() 方法加入到 Frame 集合当中。\n最后，设置 com.sun.star.frame.Frame 对象的名称，这个很关键，以为后面要根据名称加载组件。\n最最后，得到 XSystemDependentWindowPeer 接口，调用 XSystemDependentWindowPeer.getWindowHandle() 方法得到容器的窗口句柄。")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("li",[n("p",[this._v("// load component\n加载组件，这里特别要注意 URL 对象，因为从 GetPathName() 方法得到文件路径是 Window 的路径格式(也就是反斜杠)，我们要把他转化为 Unix 系统下的路径格式(也就是正斜杠，到底谁反人类了 T_T)\n然后调用 XComponentLoader 接口的 XComponentLoader.loadComponentFromURL() 方法加载组件。注意第二个参数一定要和步骤 4 中设置的 com.sun.star.frame.Frame 对象的名字相同，你得告诉人家加载到那个容器里嘛~~")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("li",[n("p",[this._v("// move window\n这段代码也没什么好解释的了，就是窗口的定位。")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("li",[n("p",[this._v("最后几个是成员变量是为了关闭文档，注意：如果不关闭文档后面再打开程序，打开同一个文档是会挂掉，因为 UNO 对象是跨进访问的，你的程序关了 soffice.exe 和 soffice.bin 两个进程都还在，而你打开的文档信息在进程中，所以挂掉。。。 这里只是做个示例和试验，所以代码没有考虑结构和严谨性，容易出 BUG ，请不要吐槽 ->_->")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("CSDITestView::~CSDITestView()\n{\n    Reference< XCloseable > xClaseable = Reference< XCloseable >(m_xComponet, UNO_QUERY);\n    // xClaseable->close(false);\n    m_xDesktop.clear();\n}\n")])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"language-C++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("HWND m_hPlatformContainerWindow;\ncom::sun::star::uno::Reference< com::sun::star::frame::XDesktop > m_xDesktop;\ncom::sun::star::uno::Reference< com::sun::star::lang::XComponent > m_xCompone\n")])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("h2",{attrs:{id:"c-winform"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#c-winform","aria-hidden":"true"}},[this._v("#")]),this._v(" C# Winform")])},function(){var e=this.$createElement,n=this._self._c||e;return n("ol",[n("li",[this._v("创建工程")]),this._v(" "),n("li",[this._v("添加引用： \\LibreOffice4\\sdk\\cli\\ 目录下有 cli_basetypes.dll、cli_cppuhelper.dll、cli_oootypes.dll、cli_ure.dll、cli_uretypes.dll 5 个程序集，都引用上")]),this._v(" "),n("li",[this._v("上代码：")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"language-C# extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('[DllImport("user32.dll", CharSet =System.Runtime.InteropServices.CharSet.Auto)]\npublic static extern int MoveWindow(IntPtr hWnd, int x, inty, int nWidth, int nHeight, bool bRePaint);\npublic Form1()\n{\n    InitializeComponent();\n\n    m_xContext = uno.util.Bootstrap.bootstrap();\n    mxMSFactory = (XMultiServiceFactory)m_xContext.getServiceManager();\n\n    XComponentLoader aLoader = (XComponentLoader)\n      mxMSFactory.createInstance("com.sun.star.frame.Desktop");\n\n    XSystemChildFactory xSystemChildFactory = (XSystemChildFactory)mxMSFactory.createInstance("com.sun.star.awt.Toolkit");\n    XWindowPeer xWindowPeer = xSystemChildFactory.createSystemChild(new Any(this.Handle.ToInt32()), new byte[4], 1);\n    XWindow xWindow = (XWindow)xWindowPeer;\n\n    XFrame xFrame = (XFrame)mxMSFactory.createInstance("com.sun.star.frame.Frame");\n    xFrame.initialize(xWindow);\n    XFramesSupplier xFrameSupplier = (XFramesSupplier)aLoader;\n    xFrameSupplier.getFrames().append(xFrame);\n    xFrame.setName("myframe");\n\n    XSystemDependentWindowPeer xSDWindowPeer = (XSystemDependentWindowPeer)xWindow;\n    xWindow.setVisible(true);\n    object hHandle = xSDWindowPeer.getWindowHandle(new byte[4], 1).Value;\n\n    XComponent xComponent = aLoader.loadComponentFromURL("file:///C:/test.odt",\n        "myframe",\n        4,\n        new unoidl.com.sun.star.beans.PropertyValue[0]);\n\n    MoveWindow(new IntPtr((int)hHandle), 0, 0, this.Width, this.Height, true);\n}\n')])])])}],!1,null,null,null);n.default=i.exports}}]);