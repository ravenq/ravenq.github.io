(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{204:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("blockquote",[a("p",[t._v("原文："),a("a",{attrs:{href:"http://www.aqcoder.com/post/content?id=35",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.aqcoder.com/post/content?id=35"),a("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("最近把我的个人项目 "),a("a",{attrs:{href:"https://github.com/ravenq/markdown-it-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ravenq/markdown-it-vue"),a("OutboundLink")],1),t._v(" 使用 Vue CLI3 的插件 "),a("a",{attrs:{href:"https://github.com/ravenq/vue-cli-plugin-component-lib",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli-plugin-component-lib"),a("OutboundLink")],1),t._v("重构了一次。在本地Windows环境编译没有任何问题，但是在Travis上编译出现了 JavaScript heap out of memory 错误：")]),t._v(" "),t._m(2),t._m(3),t._v(" "),a("p",[t._v("这个其实不是 Vue CLI3 的错误，也不是 Travis 的错误，而是 node 的错误。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("使用 "),a("a",{attrs:{href:"https://www.npmjs.com/package/increase-memory-limit",target:"_blank",rel:"noopener noreferrer"}},[t._v("increase-memory-limit"),a("OutboundLink")],1),t._v(" 脚本，此脚本的大致原理就是修改 node_modules/.bin/ 目录下的所有脚本，添加 ```--max_old_space_size=4096```` 参数。")]),t._v(" "),a("p",[t._v("使用此方法要注意要在每次Travis编译脚本里执行一次此命令。")]),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("一下为我测试过的方法，实现证明无效：")]),t._v(" "),t._m(11),t._m(12),t._m(13)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vue-cli3-travis-out-of-memory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli3-travis-out-of-memory","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue CLI3 Travis Out Of Memory")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"起因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#起因","aria-hidden":"true"}},[this._v("#")]),this._v(" 起因")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory\n 1: 0x8dc510 node::Abort() [node]\n 2: 0x8dc55c  [node]\n 3: 0xad9b5e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [node]\n 4: 0xad9d94 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]\n 5: 0xec7bf2  [node]\n 6: 0xec7cf8 v8::internal::Heap::CheckIneffectiveMarkCompact(unsigned long, double) [node]\n 7: 0xed3dd2 v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [node]\n 8: 0xed4704 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]\n 9: 0xed7371 v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [node]\n10: 0xea07f4 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationSpace) [node]\n11: 0x114018e v8::internal::Runtime_AllocateInNewSpace(int, v8::internal::Object**, v8::internal::Isolate*) [node]\n12: 0x1081135dbe1d\nAborted (core dumped)\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 134\nnpm ERR! markdown-it-vue@1.0.7 build:lib: `vue-cli-service build --target lib ./src/index.js`\nnpm ERR! Exit status 134\nnpm ERR!\nnpm ERR! Failed at the markdown-it-vue@1.0.7 build:lib script.\nnpm ERR! This is probably not a problem with npm. There is likely additional logging output above.\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 分析")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 解决方案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"方法一"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法一","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法一")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("修改 package.json 脚本，添加 node 参数 "),e("code",[this._v("--max_old_space_size=8192")]),this._v(" :")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[this._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[this._v('"build:lib"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"node --max_old_space_size=8192 node_modules/@vue/cli-service/bin/vue-cli-service.js build --target lib ./src/index.js"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"方法二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法二","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法二")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fix-memory-limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cross-env LIMIT=2048 increase-memory-limit"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"increase-memory-limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^1.0.3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cross-env"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^5.0.5"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"错误的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#错误的方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 错误的方法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[this._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"vue-cli-service --max_old_space_size=8192 build --target lib ./src/index.js"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[this._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"npx --max_old_space_size=8192 vue-cli-service  build --target lib ./src/index.js"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/ravenq-qr-gray.png",alt:"ravenq"}})])}],!1,null,null,null);e.default=n.exports}}]);