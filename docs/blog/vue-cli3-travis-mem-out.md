# Vue CLI3 Travis Out Of Memory

> 原文：<http://www.aqcoder.com/post/content?id=35>

## 起因

最近把我的个人项目 <https://github.com/ravenq/markdown-it-vue> 使用 Vue CLI3 的插件 [vue-cli-plugin-component-lib](https://github.com/ravenq/vue-cli-plugin-component-lib)重构了一次。在本地Windows环境编译没有任何问题，但是在Travis上编译出现了 JavaScript heap out of memory 错误：

```sh
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0x8dc510 node::Abort() [node]
 2: 0x8dc55c  [node]
 3: 0xad9b5e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [node]
 4: 0xad9d94 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]
 5: 0xec7bf2  [node]
 6: 0xec7cf8 v8::internal::Heap::CheckIneffectiveMarkCompact(unsigned long, double) [node]
 7: 0xed3dd2 v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [node]
 8: 0xed4704 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]
 9: 0xed7371 v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [node]
10: 0xea07f4 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationSpace) [node]
11: 0x114018e v8::internal::Runtime_AllocateInNewSpace(int, v8::internal::Object**, v8::internal::Isolate*) [node]
12: 0x1081135dbe1d
Aborted (core dumped)
npm ERR! code ELIFECYCLE
npm ERR! errno 134
npm ERR! markdown-it-vue@1.0.7 build:lib: `vue-cli-service build --target lib ./src/index.js`
npm ERR! Exit status 134
npm ERR!
npm ERR! Failed at the markdown-it-vue@1.0.7 build:lib script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```

## 分析

这个其实不是 Vue CLI3 的错误，也不是 Travis 的错误，而是 node 的错误。

## 解决方案

### 方法一

修改 package.json 脚本，添加 node 参数 ```--max_old_space_size=8192``` :

```json

"build:lib": "node --max_old_space_size=8192 node_modules/@vue/cli-service/bin/vue-cli-service.js build --target lib ./src/index.js"
```

### 方法二

使用 [increase-memory-limit](https://www.npmjs.com/package/increase-memory-limit) 脚本，此脚本的大致原理就是修改 node_modules/.bin/ 目录下的所有脚本，添加 ```--max_old_space_size=4096```` 参数。

使用此方法要注意要在每次Travis编译脚本里执行一次此命令。

```json
// ...
  "scripts": {
    "fix-memory-limit": "cross-env LIMIT=2048 increase-memory-limit"
  },
  "devDependencies": {
    "increase-memory-limit": "^1.0.3",
    "cross-env": "^5.0.5"
  }
// ...
```

## 错误的方法

一下为我测试过的方法，实现证明无效：

```json
"build": "vue-cli-service --max_old_space_size=8192 build --target lib ./src/index.js"
```

```json
"build": "npx --max_old_space_size=8192 vue-cli-service  build --target lib ./src/index.js"
```

![ravenq](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/ravenq-qr-gray.png)