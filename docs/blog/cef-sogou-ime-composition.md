# CEF 应用里搜狗输入法"失灵"之谜：从现象到根因，附可运行的验证 Demo

> 摘要：在 CEF / Electron / Tauri 这类内嵌 Chromium 的应用里，搜狗输入法打字"看起来正常"——候选框能弹出、字也能上屏——但页面 JS 就是收不到 composition 事件。这个问题在网上断断续续吵了好几年。本文把排查过程、名单机制的实证、以及一个可直接运行的验证 Demo 都讲清楚。

---

## 01 问题现场：一个"薛定谔的输入法"

先说现象。开发者的视角是这样的：

在一个普通的 CEF 应用里，页面上有个再普通不过的 `<input>`：

- 切到搜狗输入法，敲拼音，**候选框正常弹出**；
- 按空格或数字选词，**汉字正常上屏**；
- 但 `compositionstart` / `compositionupdate` / `compositionend` 三个事件，**一个都不触发**。

如果你在做一个需要感知"用户正在打拼音"的功能——比如搜索框的实时联想、输入过程中的防抖——这就致命了：你的代码完全无法区分"用户还没打完"和"用户打完了"。

更诡异的是对照组：

| 环境 | 表现 |
| --- | --- |
| Chrome 浏览器 + 搜狗 | 内联组合、事件齐全，一切正常 |
| 同一个 CEF 应用 + QQ 拼音 | 一切正常 |
| 同一个 CEF 应用 + 微软拼音 | 一切正常 |
| CEF / Electron / Tauri + 搜狗 | 全部中招 |

同一个内核、同一个页面、同一个输入法引擎（搜狗），唯一的变量是**宿主窗口是谁**。

这个问题我几年前就在知乎上提过（[CEF 搜狗输入法下无法触发 composition 事件？](https://www.zhihu.com/question/506902690)），当时有句话用大白话精准命中了要害：

> 用 CEF 做的程序都有这样的问题，**不会有预先输入的英文插入符**。

——所谓"预先输入的英文插入符"，就是下文要说的内联组合文本（preedit）。当时还附了一个公开的 Keyboard Events 键盘事件测试页做对比，以及一个可复现的 cefclient 测试程序（[百度网盘](https://pan.baidu.com/s/10hD5vZihzfARCuixUTUUmQ)，提取码 ud3m）。两张截图放在一起，一目了然。

CEF 里的表现：事件序列里只有 `input` / `textinput` / `keyup`，composition 三兄弟全程缺席：

![CEF 里没有 composition 事件](/img/cef-sogou-ime/cef-no-composition.jpg)

Chrome 里的正常表现：`compositionstart` → `compositionupdate` → `compositionend` 一个不少：

![Chrome 里 composition 事件齐全](/img/cef-sogou-ime/chrome-composition.jpg)

## 02 第一嫌疑人和它的不在场证明

很多人的第一反应和我一样：是不是 Chromium 在 Windows 上的输入法后端出了问题？

这里补充一点背景知识。Windows 上有两套输入法接入体系：老的 IMM32 和新的 TSF（Text Services Framework）。Chromium 里有一个 `TSFImeSupport` 开关负责在两者之间切换，社区里确实流传过用它解决各种输入法疑难杂症的偏方。

于是我们做了对照实验：找来 Chromium 93 内核的 cefclient（CEF 的官方示例程序），加上 `--disable-features=TSFImeSupport` 启动，让 Chromium 退回老的 IMM32 路径。

**结果：搜狗依然"失灵"。**

顺带把公开源码里的时间线也查证了一遍：这个开关在 Chromium 76 稳定版里就已经存在且默认开启，一直活到 121；从 122（2024 年初）起，Chromium 把 IMM32 回退路径整个删掉了，TSF 成为唯一实现。也就是说——这个偏方既救不了新版内核，也解释不了旧版内核。

**Chromium 的后端选择，排除。**

## 03 决定性的观察

接下来是最关键的一步：仔细看打字的那一刻，**输入框里面**发生了什么。

在 Chrome 里用搜狗打拼音，你会看到拼音字符串带着下划线直接出现在输入框里——这叫**内联组合文本**（inline composition）。选词后，下划线消失，汉字落地。`composition` 事件正是伴随这个过程产生的。

而在 CEF 应用里用搜狗打拼音：

- 输入框里**什么都没有**，没有下划线，没有拼音；
- 拼音和候选词全部显示在搜狗自己的悬浮窗里；
- 选词确认的瞬间，汉字**一次性**出现在输入框里。

再在页面上挂一个探针监听 `beforeinput`，会看到上屏那一刻只产生了一个 `inputType` 为 `insertText` 的输入事件。

**破案了。问题根本不在"事件被丢掉"，而在于：在 CEF 里，搜狗从头到尾没有把组合过程放进文档——它在自己的窗口里完成一切，最后把结果一次性塞给你。**

而 DOM 的 composition 事件，本质上是"文档中存在一个正在组合的文本区间"这一状态在页面上的投影。文档里没有组合状态，浏览器就没有任何东西可以变成事件。**不是事件丢了，是这件事在机制上就不存在。**

## 04 拼图：为什么 Chrome 可以，CEF 不可以？

现在把所有事实摆在一起：

1. Chrome + 搜狗：内联组合，事件正常；
2. CEF + 搜狗：自绘候选框 + 一次性上屏，无事件；
3. CEF + QQ 拼音 / 微软拼音：内联组合，事件正常；
4. Chromium 的 TSF/IMM32 开关：无关；
5. 社区公开讨论里，微信 PC 版、钉钉等**内嵌 Chromium 的知名应用**历史上也出过一模一样的问题；
6. 这些问题往往随搜狗的某个版本更新悄悄变化——有的应用莫名好了，有的又坏了。

把这张图拼起来，只有一个模型能同时解释所有现象：

**搜狗内部维护着一份"已知 Chromium 宿主"的名单。**

- 名单里的进程（Chrome、Edge、各家主流浏览器，以及微信、钉钉、飞书、WPS 这类著名的内嵌 Chromium 应用）——搜狗走标准的 TSF 内联组合路径，体验和事件与 Chrome 一致；
- 名单外的进程（cefclient、Tauri 应用、开发者自研的 CEF 程序……）——搜狗降级为最保守的模式：候选框自己画、预编辑不进文档、最终一次性提交。

而这份名单大概率支持云端更新——这正好解释了为什么相关问题会"随搜狗版本波动"：名单变了，行为就变了，而 Chromium 侧什么都没发生。

为了让这个模型站得住脚，我们把能查的都查了一遍：

**证据一：本地不存在可编辑的名单配置。** 我们穷举了搜狗输入法在本机的所有配置位置——机器级配置目录、用户配置目录、注册表配置树。结果：配置目录是空的，用户配置里只有皮肤、词库、开关偏好这类条目，注册表里也没有任何与"进程名单/兼容性"相关的可编辑项。也就是说，**这份名单没有以任何明文配置的形式暴露给用户**——你没法通过改配置文件把自己加进去。

**证据二：配置走云端下发。** 搜狗的组件接入了腾讯公开的远程配置平台 Shiply，本地留有对应的配置更新目录，缓存的是打包后的资源文件而非可读文本。这与"名单可以随版本悄悄变化"的观察互相印证：名单的增删在厂商云端完成，不需要用户做任何事。

**证据三：名单的覆盖范围与公开行为严丝合缝。** 从"哪些应用正常、哪些应用失灵"反推，名单恰好覆盖 Chrome、Edge、各家主流浏览器，以及微信、钉钉、飞书、WPS 这类著名的内嵌 Chromium 应用——全是经过充分测试的知名宿主；而 cefclient、Tauri 应用、开发者自研的 CEF 程序这些长尾，无一例外落入降级模式。一份"按知名度取舍"的名单，和实际表现完全吻合。

**证据四：名单的原始内容被直接确认。** 对搜狗输入法的组件文件做字符串检索，名单的实际内容清晰可辨。下面是两段实际提取到的原文（节选）：

进程名（来自 TSF 输入法模块）：

```
WeChat.exe  WXWork.exe  WeChatApp.exe  QQ.exe  TIM.exe  et.exe  DingTalk.exe
EXCEL.EXE   wps.exe     youdaonote.exe notepad.exe  wpp.exe  notepad++.exe
chrome.exe  360se.exe   msedge.exe    360chrome.exe
League of Legends.exe  dnf.exe  csgo.exe  SogouMonitor.exe
```

进程名 + 窗口类（来自 32/64 位输入法模块）：

```
qq.exe  weixin.exe  wechat.exe  aliim.exe  feishu.exe  dingtalk.exe  wxwork.exe
Chrome_WidgetWin_            ← 前缀匹配，实际类名是 Chrome_WidgetWin_1
Chrome_RenderWidgetHostHWND  Chrome_OmniboxView  360se6_Frame
Qt51514QWindowIcon  Qt5152QWindowIcon  WeChatMainWndForPC  DingChatWnd  WeWorkWindow
```

清一色的"浏览器 + 知名内嵌 Chromium 应用 + 办公与游戏软件"，与行为矩阵推出的覆盖范围完全吻合——名单之外，正是所有"长尾"开发者所在的位置。

**证据五：改名实验一锤定音。** 名单按什么判定？把 cefclient 复制一份改名为 `chrome.exe`，其余一切不变，再启动——搜狗立即恢复内联组合与 composition 事件。行为随进程名翻转，名单按**进程名**判定，实锤。

需要说明：名单机制本身是搜狗未公开的内部实现，以上证据来自公开行为观察、公开源码查证与对本地组件的分析，非官方信息，仅供技术交流。

当年发帖的时候还顺手附了一张猫猫图，如今回头看格外贴切——候选框看得见，composition 事件够不着：

![隔栏相望的猫](/img/cef-sogou-ime/meme-cat.jpg)

## 05 延伸问题：搜狗能不能"认出" CEF / Tauri？

看到这里，很多人会问一个更根本的问题：CEF 应用身上的 Chromium 特征那么明显，搜狗难道不会自动识别出来吗？

理论上确实有很多可用的指纹：

- 加载了 `libcef.dll`（CEF）、`WebView2Loader.dll`（Tauri / WebView2）；
- 进程树里有 `msedgewebview2.exe` 子进程；
- 窗口结构里有 `Chrome_RenderWidgetHostHWND` 这个 Chromium 渲染子窗口类；
- 页面 UA、命名管道名、Mojo IPC 通道等等。

那搜狗实际用了吗？我们对组件文件做了针对性检索：

| 特征 | 检索结果 |
| --- | --- |
| `libcef` / `msedgewebview2` / `WebView2Loader` | 零命中 |
| `CefClient` / `CefBrowserWindow` / `WebViewHost` | 零命中 |
| `tauri` / `wry` | 零命中（只有随机字节和 `Secure Electronic Transactions` 之类的误命中） |

**结论：它没有做框架级指纹识别，只认"已知宿主清单"。**

但这个清单不是纯粹按进程名，而是**进程名 + 窗口类两把钥匙**。窗口类那一列里已经出现了 `Chrome_WidgetWin_`（前缀匹配）、`Chrome_RenderWidgetHostHWND`、`Chrome_OmniboxView`，甚至还有 Qt 应用的 `Qt5152QWindowIcon`、微信的 `WeChatMainWndForPC`、企业微信的 `WeWorkWindow`。

这解释了两件事：

1. **为什么改名 `chrome.exe` 立刻生效**——进程名那把钥匙对上了；
2. **为什么 CEF / Tauri 明明带着一身 Chromium 特征却识别不出来**——CEF 的顶层窗口类不是 `Chrome_WidgetWin_1`，Tauri 的更不是；两把钥匙一把都对不上，于是落入"未知宿主"。

顺带还能得到一个对开发者有利的结论：**他们现有机制本来就支持"按窗口类登记宿主"**（Qt 应用都专门登记了）。这意味着把 CEF / Tauri 加进去，对他们而言是往清单里加一行字符串的运营动作，而不是架构改造。

## 06 降级之后，为什么连事件都"不发"了？

有人会问：就算不在文档里做内联组合，搜狗能不能"假装"发一点组合事件，让页面至少知道有人在打字？

答案是：**做不到，因为方向反了。**

composition 事件不是输入法"发送"的消息。输入法没有任何直通页面的通道，它唯一能做的，是把组合状态写进文档——而"组合状态"的定义就是"文本已写入文档并标记为组合区间"。写进去，你就会看到内联下划线，那就回到了内联模式；同时每次按键都要向宿主文档申请编辑锁、逐键交互，这恰恰是降级模式想避开的东西。

所以"自绘候选框"和"文档组合状态"在 TSF 的模型里是互斥的。降级模式下，页面能收到的完整事件序列就是 `beforeinput` → `input`，从 W3C UI Events 规范的角度看，这甚至是**完全正确**的行为——规范本来就没要求"IME 在自己 UI 里完成的组合"产生任何 composition 事件。

## 07 换位思考：搜狗为什么要这么设计？

批评之前，先理解。输入法的处境比一般应用特殊得多：**输入法模块会被加载进系统里每一个进程**。

这意味着：输入法代码里的任何一次挂起、崩溃，都直接表现为"宿主应用卡死了"，而用户只会骂输入法。高级互操作——读取页面上下文、光标定位、钩子、进程间桥接——每一项都是风险点。

于是"名单制"成为理性选择：对已经充分测试过的知名宿主，才启用高级路径；对未知进程，一律走"不可能出错"的最保守路径。这和早年网站的浏览器 UA 嗅探、Chromium 自己维护的显卡驱动黑名单，是同一种工程智慧——**规范之上，永远要叠一层兼容矩阵**。

那为什么不默认"先按标准内联组合试一下，失败了再降级"？这种**能力探测**思路确实更优雅，微软拼音基本就是这个路线，所以它在 CEF 里表现正常。代价是：每一个未知宿主都是一次潜在的 bug 工单。而名单制把风险收窄到"只有已经测过的应用才承担风险"，对拥有海量用户的输入法厂商来说，这是一笔算得过来的账。

代价则由生态里的长尾承担：你的 CEF 应用、我的 Tauri 应用，都在"未知进程"之列。

## 08 两个最小验证 Demo

纸上得来终觉浅。我准备了一个可以直接打开的验证页面：

**<https://www.aqcoder.com/demo/cef-sogou-ime-compat.html>**

页面里并排放了两个最小编辑器，各自独立判定模式，共享一份事件日志：

| 示例 | 实现 | 内核要求 |
| --- | --- | --- |
| A | `contenteditable` + DOM 事件 | 任意内核 |
| B | `canvas` + `EditContext`（新一代编辑器组合接口） | Chromium 121+ |

页面顶部会实时显示当前内核版本和 `EditContext` 支持情况。预期结果：

| 环境 | 示例 A | 示例 B |
| --- | --- | --- |
| Chrome / Edge + 搜狗 | 正常：composition 三连 | 正常：`compositionstart/end` + 多个中间态 `textupdate` |
| CEF / WebView2 + 搜狗 | 降级：一个 CJK 的 `insertText` | 降级：一个 CJK 的 `textupdate` |
| CEF 93 等旧内核 | 可测 | 自动灰显（`EditContext` 不存在） |

两个实测踩出来的坑，能帮你少走弯路：

- **别用 93 内核测示例 B。** `EditContext` 是 Chromium 121 才加入的，93 上画布根本没有可编辑后端，打字零反应——不是兼容层失败。
- **如果在示例 A 里勾选"拦截模式"却没手动写回文本，字会消失。** 字被吞反而是好消息：它证明搜狗的一次性提交确实以 `beforeinput(insertText)` 到达了页面，只是被 `preventDefault()` 拦下后没人负责落笔。

另外，页面的模式判定是**动态**的：搜狗打字时徽标变红；切到微软拼音，`compositionstart` 一到立刻变绿；再切回搜狗又变红，全程不用刷新。

## 09 开发者的应对清单

**第一，应用层兜底（推荐，立即可用）。**

核心思路有两条，都很重要：

1. **按"最近一次行为"判定模式，不要用一次性闩锁。** 用户完全可能先用搜狗打几个字、再切微软拼音——模式必须能翻转；
2. 判断依据是"**非组合期间的整段 CJK 插入**"，英文逐字符输入、数字、粘贴都不会误判。

```javascript
const CJK = /[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\u3000-\u303F\uFF00-\uFFEF]/;
const isCJK = s => !!s && CJK.test(s);

function attachImeCompat(el, h, opts = {}) {
  let composing = false;   // 当前是否处于真·组合（compositionstart..end）
  let mode = null;         // 'normal' | 'degraded'，按最近一次行为判定

  const setMode = m => {
    if (m === mode) return;
    mode = m;
    h.onModeChange && h.onModeChange(m);   // 可用于在 UI 上提示当前输入法状态
  };

  el.addEventListener('compositionstart', () => {
    composing = true;
    setMode('normal');                      // 能发组合事件的输入法，必然走文档内组合
    h.onStart && h.onStart();
  });
  el.addEventListener('compositionupdate', e => h.onUpdate && h.onUpdate(e.data));
  el.addEventListener('compositionend', e => {
    composing = false;
    h.onEnd && h.onEnd(e.data);
    if (e.data) h.onCommit && h.onCommit(e.data, { degraded: false, type: 'compositionend' });
  });

  el.addEventListener('beforeinput', e => {
    if (composing) return;                                     // 组合中：交给 composition 事件
    if (e.inputType !== 'insertText' || !isCJK(e.data)) return; // 只认非组合期的 CJK 原子插入
    setMode('degraded');
    if (opts.intercept) e.preventDefault();                     // 自管数据模型时接管
    h.onCommit && h.onCommit(e.data, { degraded: true, type: e.inputType, nativeEvent: e });
  });
}
```

canvas 自绘编辑器如果用的是新一代 `EditContext`，事件模型不一样，需要单独适配：

```javascript
function attachEditContextCompat(ec, h) {
  let composing = false, cooldownUntil = 0, lastText = '';

  ec.addEventListener('compositionstart', () => {
    composing = true;
    h.onModeChange && h.onModeChange('normal');
    h.onStart && h.onStart();
  });
  ec.addEventListener('compositionend', () => {
    composing = false;
    cooldownUntil = Date.now() + 300;        // 正常模式的落盘紧随其后，别误判成降级
    h.onEnd && h.onEnd();
    if (lastText) h.onCommit && h.onCommit(lastText, { degraded: false, type: 'compositionend' });
    lastText = '';
  });
  ec.addEventListener('textupdate', e => {
    const t = e.updateText ?? '';
    if (composing || e.updateType === 'insertCompositionText') { lastText = t; return; }
    if (!isCJK(t)) return;
    if (Date.now() < cooldownUntil) return;  // 刚结束组合，这条是正常提交的落盘
    h.onModeChange && h.onModeChange('degraded');
    h.onCommit && h.onCommit(t, { degraded: true, type: e.updateType || '(none)' });
  });

  // 记得实现 characterboundsupdate，否则候选框定位会错
  ec.addEventListener('characterboundsupdate', e => {
    const rects = computeCharRects(e.rangeStart, e.rangeEnd);
    ec.updateCharacterBounds(e.rangeStart, rects);
  });
}
```

两个细节值得单独说：

- **`updateType` 需要 Chromium 131+**。旧内核拿不到这个字段时，上面的 `composing` 标志和 300ms 冷却窗就是兜底；
- **`intercept: true` 只给自管数据模型的编辑器**（ProseMirror / Lexical / 自研模型类）。原生 contenteditable 请放行默认插入，否则就会遇到前面说的"字被吞"。

也要诚实地讲清能力边界：**拼音中间态救不回来**——降级模式下预编辑文本不进 DOM，任何 JS 都拿不到，"边打拼音边联想"在这个环境里就是不存在的；提交发生前，你也无法区分"用户在打拼音"和"用户在敲英文"。兜底方案的目标不是复刻正常模式，而是**让核心功能在任何输入法下都可用**。

一个好消息是：降级模式下不存在"组合进行中"的中间态，原本最头疼的"组合期间误触发联想"问题，在这里天然不存在。

**第二，向输入法厂商反馈。**

名单在厂商云端手里，加名字是他们的日常运营动作。而且现在有了更具体的说法：

> 你们的宿主清单里本来就有 `Chrome_WidgetWin_`、`Qt5152QWindowIcon` 这类窗口类条目，请补上 CEF / Tauri 的窗口类，或者把我们的进程名加进名单。

配上一个最小复现页面（前面那个 Demo 就是现成的），就是一个他们能直接处理的标准工单。

**第三，用户侧临时方案。**

遇到问题的终端用户，可以切换其他输入法（微软拼音、QQ 拼音均不受影响），或关注搜狗输入法的版本更新——如前所述，名单是会变的。

**第四，不要在 Chromium 侧浪费时间。**

`TSFImeSupport` 开关在 122 之后已经不复存在，IMM32 回退路径也已被删除；而我们的实验证明，即便在开关尚存的旧内核上，它也解决不了这个问题。病根不在浏览器内核。

**第五，不要打"改程序文件"的主意。**

既然名单以字符串形式存在于组件里，能不能直接改？技术上并非完全不可能，但代价清单很长：32/64 位两份文件都要动、完整性校验与云保护可能让补丁失效、自动更新会还原、杀毒软件大概率拦截，而且分发修改版第三方软件既违反协议也可能侵权。投入产出比极差，不建议。

## 10 结语

回头看，这个悬案的三方都"没有做错什么"：

- Chromium 对输入法如实上报"我的文档能力有限"；
- 搜狗对未知宿主保持最保守的默认姿态；
- W3C 规范认可这两种行为都是合法的。

三方单独看都合理，叠加起来，就是无数 CEF / Tauri 开发者面对的"搜狗打字收不到 composition 事件"。

理解了机制，问题就不再是玄学：要么进名单，要么绕开它。而作为开发者，我们唯一能立刻掌控的，是自己的代码——用 `beforeinput` 把那条"消失的事件"找回来。

---

*本文基于公开行为观察、公开源码查证与本地组件分析，相关结论仅供技术交流。*

![ravenq](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/ravenq-qr-gray.png)
