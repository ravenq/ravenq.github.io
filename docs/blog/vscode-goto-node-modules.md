# vscode-goto-node-modules 一个快速定位 node 模块的 vscode 插件

原文：<http://www.aqcoder.com/post/43>

在使用 VSCode 开发 Node.js (包括 node 端和前端 Vue/Angle/React) 等开发时，经常与遇到一个很痛苦的事：

依赖一个模块时想大概浏览一下这个模块的源码和 API。

可是 node_modules 目录下的模块多的惊人，各种滚动条滚动，各种考验眼力。

于是我找到了这么一个插件 Search node_modules。可惜这个插件只能通过命令输入模块名称进行搜索定位。

但是能不能直接从代码的导入语句中直接定位能，类似按住 ctrl + 鼠标左键点击转到定义处，这样多方便：

```js
import xxx from 'xxx'
var xxx = require('xxx')
...
```

于是，我就自己开发了一个插件，可以快速定位 node 模块：vscode-goto-node-modules。

来张 GIF 感受一下：

![vscode-goto-node-modules](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/vscode-goto-node-modules.gif)

由于 TypeScript 已经有很好的跳转支持，所以插件也就没有实现 ts 相关的跳转。

插件同时只是 packages.json 文件。

在 VSCode 插件搜索输入 `ravenq` 可快速搜索到插件：

![vscode-plugin-search-vscode-goto-modules](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/vscode-plugin-search-vscode-goto-modules.png)

- 项目地址：<https://github.com/ravenq/vscode-goto-node-modules>
- 插件市场：<https://marketplace.visualstudio.com/items?itemName=ravenq.vscode-goto-node-modules>

![ravenq](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/ravenq-qr-gray.png)
