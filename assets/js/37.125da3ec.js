(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{169:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"building-a-web-server-in-go"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building-a-web-server-in-go","aria-hidden":"true"}},[e._v("#")]),e._v(" Building a Web Server in Go")]),e._v(" "),n("p",[e._v("用GO来建立Web服务")]),e._v(" "),n("p",[e._v("https://unknwon.io/posts/180913_building_a_web_server_in_go/")]),e._v(" "),n("p",[e._v("Go (Golang.org) is the system programming language that provides standard HTTP protocol support in its standard library, which makes it easy for developers to build and get a web server running very quickly. Meanwhile, Go offers developers a lot of flexibility. In this post, we lay out several ways to build an HTTP web server in Go and then offer an analysis about how and why these different approaches all work perfectly in Go.\nGO是在文库里提供标准HTTP协议支持的程序级别编程语言，它使开发的创建变得更容易，使web服务发展的更快。同时GO的开发有很大的灵活性。在这篇文章中，我们用GO来讲述几个方法去创建HTTPweb服务，并且提供一个对于这些不同的代理方式用GO是怎么分析的。")]),e._v(" "),n("p",[e._v("Before we get started, I assume you have basic knowledge about how to write Go code, you understand HTTP and know what a web server is. Then, we can begin with the famous “hello world” example in an HTTP web server version.\n在我们开始之前，我假设你有写GO代码的基本知识，你能理解HTTP并且知道WEB服务是什么，接着我们就能用著名的“你好，世界”这个例子在HTTP WEB服务版本上开始。")]),e._v(" "),n("p",[e._v("It’s better to see the effect and then explain the detail. Create a file named http1.go and copy and paste the following code into the file:\n它能更好的看到效果和说明细节，创造一个文档命名http1，剪切，复制，粘帖下面的代码到文档里面。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package main\n\nimport (\n\t"io"\n\t"net/http"\n)\n\nfunc hello(w http.ResponseWriter, r *http.Request) {\n\tio.WriteString(w, "Hello world!")\n}\n\nfunc main() {\n\thttp.HandleFunc("/", hello)\n\thttp.ListenAndServe(":8000", nil)\n}\n')])])]),n("p",[e._v("In the terminal, execute the command go run http1.go, then open the browser and visit http://localhost:8000. You will seeHello world! is showing on your screen.\n在终端，")]),e._v(" "),n("p",[e._v("How did that happen? Well, any runnable package must be named main in Go, and here we have the main function and a hello function.")]),e._v(" "),n("p",[e._v("In the main function, we called the function http.HandleFunc from the package net/http to register another function to be the handle function, which is the hello function in this case. This function accepts two arguments. The first one is a string type pattern, which is the route you want to match and it’s the root path in the example. The second argument is a function with the signature func(ResponseWriter, *Request)(https://gowalker.org/net/http#HandleFunc). As you can see, our hello function has exactly the same signature, therefore we can pass it as the argument. The next line we called the http.ListenAndServe(“:8000”, nil) function to listen on localhost with port 8000. Ignore the nil argument just for now.")]),e._v(" "),n("p",[e._v("In the hello function, we have two arguments. One with type http.ResponseWriter and its corresponding response stream, which is actually an interface type. The second is *http.Request and its corresponding HTTP request. We don’t have to use all the arguments. Just like in the hello function, if we want the response string Hello world! in the browser, then we only use http.ResponseWriter. io.WriteString is a helper function to let you write a string into a given writable stream. In Go, we call it the io.Writer interface. It’s not the point here, so knowing it works for us is enough.")]),e._v(" "),n("p",[e._v("This example is a little bit more complicated:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package main\n\nimport (\n\t"io"\n\t"net/http"\n)\n\nfunc hello(w http.ResponseWriter, r *http.Request) {\n\tio.WriteString(w, "Hello world!")\n}\n\nfunc main() {\n\tmux := http.NewServeMux()\n\tmux.HandleFunc("/", hello)\n\thttp.ListenAndServe(":8000", mux)\n}\n')])])]),n("p",[e._v("In the example above, we don’t use the nil in function http.ListenAndServe any more. Instead, replace it with a variable with type *ServeMux. As you may guess, this example does exactly the same thing as the previous example but we use the variable mux to register the handle function instead of directly registering from the net/http package. What’s going on underneath? Well, the reason you can directly register the handle function in the package level is because net/http has a default *ServeMux inside the package, where now we defined our own.")]),e._v(" "),n("p",[e._v("To make the example even more complicated, see the code below:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package main\n\nimport (\n\t"io"\n\t"net/http"\n)\n\nfunc hello(w http.ResponseWriter, r *http.Request) {\n\tio.WriteString(w, "Hello world!")\n}\n\nvar mux map[string]func(http.ResponseWriter, *http.Request)\n\nfunc main() {\n\tserver := http.Server{\n\t\tAddr:    ":8000",\n\t\tHandler: &myHandler{},\n\t}\n\n\tmux = make(map[string]func(http.ResponseWriter, *http.Request))\n\tmux["/"] = hello\n\n\tserver.ListenAndServe()\n}\n\ntype myHandler struct{}\n\nfunc (*myHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {\n\tif h, ok := mux[r.URL.String()]; ok {\n\t\th(w, r)\n\t\treturn\n\t}\n\n\tio.WriteString(w, "My server: "+r.URL.String())\n}\n')])])]),n("p",[e._v("To confirm your guess, this time we’re doing the same thing again, which is showing the Hello world! string on the screen. However, we not only define the *ServeMux, but also the variable server with type http.Server. At this point, you should know why we are able to run and serve the HTTP server directly from the net/http package. Yes, it has a default server inside the package as well. A new thing we see here is the type myHandler we defined and its method ServeHTTP. How is it possible to define a custom type and use it in an unmodified function from a standard library in a static programming language? The truth is simple. The Handler is an interface and only required to implement one method whose signature is func(w http.ResponseWriter, r *http.Request)(https://gowalker.org/net/http#Handler) and must be named as ServeHTTP. The type myHandler has the method that the interface expects, so we are good.")]),e._v(" "),n("p",[e._v("You can see how our code changed but for the same purpose. Don’t forget to try the three examples yourself, then make some changes and see how the change behaves. Hope you enjoy!")])])}],!1,null,null,null);t.default=r.exports}}]);