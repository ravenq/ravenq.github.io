# 无头转换：把 .docx 变成 PDF，不打开编辑器

> 摘要：[office-rs/rword](https://github.com/office-rs) 不只有可嵌入的编辑器组件，还有一条**无头转换通道**：一次调用，.docx 字节进去、PDF 字节出来，没有编辑器实例、没有浏览器、不碰 GPU，却和编辑器共用同一套排版内核与字体体系。同一份文档、同一套字体，编辑所见和导出所得完全一致。这篇文章讲清楚这条通道的定位、字体注册如何保证跨平台一致、命令行与内核用法，以及四种语言绑定如何把它作为库交给上层应用。

---

## 01 定位：同一条管线，换一个出口

后端服务、CI 流水线、脚本批处理、浏览器 Worker——这些场景里没有屏幕，却同样需要把 .docx 变成成品 PDF。把一个交互式编辑器搬进服务器显然过重，rword 的做法是**把编辑器的出口换一个**：

```
.docx 字节 → 解码 → 排版 → 场景录制 → PDF 编码 → .pdf 字节
```

这条通道和编辑器**共用同一套 OOXML 解码、分页排版、字体注册与渲染场景**，不是第二个排版器。这意味着"编辑里看到的分页"和"导出拿到的 PDF"出自同一段代码——跨页面流动、页眉页脚、页码域、跨页表格这些 Word 的难点，两边的行为完全一致。

它不是一个"附带的导出按钮"，而是同一套内核的第二种出口。服务器批量转换、脚本、CI、浏览器离屏生成，走的都是这条无编辑器、无屏幕的通路。

## 02 字体注册：跨平台一致的关键

排版结果依赖两个输入：文档本身和字体集合。文档是字节，可逐字节一致；字体则是另一个故事——不同平台、不同容器、不同宿主上字体的可得性千差万别，这正是跨平台"长得不一样"的主要来源。

rword 的字体注入只有一扇门：**进程级注册表**。

- 进程里注册过的字体，所有转换实例共享；
- `Converter` 创建时**快照**当前注册表（字体字节靠 Arc 零拷贝共享，每个实例不单独占内存）；
- 文档声明了没注册的字体照样转换，走兜底链并在 warning 里点名。

这条设计带来两个承诺：

1. **相同输入字节 + 相同字体状态 → 逐字节一致的 PDF**——跨线程、跨实例、跨进程皆然；
2. **编辑器和转换器共享字体**——同一进程里，编辑器注册过的字体转换器直接快照得到，不会出现"编辑器里宋体正常、导出 PDF 里宋体乱码"的分裂。

CLI 通过 `--font` / `--fonts-dir` 在转换前注册；各语言绑定各自提供注册接口；浏览器 wasm 没有系统字体，字体必须显式注册，兜底链初始为空——这也是 wasm 文档渲染成"兜底方块"最常见的原因。

## 03 命令行：脚本与 CI 的入口

CLI 入口是 `rword-convert`（也随 npm 包 `@office-rs/rword-convert` 以同名 bin 分发）：

```bash
cargo build -p rword-convert-cli --release   # -> target/release/rword-convert(.exe)
```

完整语法：

```text
rword-convert <input.docx> <output.pdf|--stdout> [options]

Options:
  -f, --format <pdf|ofd>  Output format (default: pdf; ofd reserved, unsupported)
  --font <file>           Register a font file before converting (repeatable)
  --fonts-dir <dir>       Register every font file in a directory (repeatable)
  --meta <key>=<value>    Set PDF metadata; key: title|author|subject|keywords
  --show-changes          Keep tracked-change marks (default: clean view)
  --stdout                Write output bytes to stdout (binary-safe)
```

两个典型用法：

```bash
rword-convert report.docx report.pdf --font fonts/simsun.ttc --meta title="Q3 report"
rword-convert report.docx --stdout > report.pdf
```

一个进程转一个文档，批量就在 shell 层扇出（`xargs -P 8`、GNU parallel 或 `&` + `wait`）——CLI 刻意不做并发载体，并发是内核和语言绑定的事。退出码简单三分：`0` 成功、`2` 用法错误、`3` 转换失败；非致命降级（字体兜底、个别表格怪癖）走 stderr warning，文档照样转出。

## 04 作为库：Rust 内核 + 四种绑定

同一内核，四种宿主形态。它们不是互相依赖的包装，而是并列的薄壳，各自只依赖 `rword-convert`，按各自宿主习惯交付 API——Rust 给服务、Node/Python/Java 给后端、wasm 给浏览器 Worker。

### Rust：建一次，转多次

```rust
use rword_convert::{ConvertOptions, Converter, OutputFormat};

let mut converter = Converter::new();                 // 构造不失败；快照已注册字体
let out = converter.convert(OutputFormat::Pdf, &docx_bytes, &ConvertOptions::default())?;
std::fs::write("out.pdf", out.bytes)?;
```

元数据与预算就在 `ConvertOptions` 上；默认两道预算闸门：1 万页、1 GiB 内嵌媒体，超了直接以预算错误失败。`Converter` 是长期实例，线程契约是**同一时刻单线程**；引擎 `Send`，实例可以在线程间移动，槽位池形状天然成立。内核 panic 在边界被兜住，转成普通错误，不跨 FFI 把宿主进程带走。

### Node：worker 线程池 + Promise

```bash
npm install @office-rs/rword-convert
```

```js
const { createPool } = require('@office-rs/rword-convert')

const pool = createPool(4)                     // 4 个 worker，最少负载分发
const { bytes, warnings } = await pool.convertToPdf(docx)
await pool.close()
```

包内自带 `rword-convert` bin。单实例 `converter.convertToPdf(docx)` 是同步的、会阻塞事件循环——小文档和 CLI 没问题，服务端请走池。

### Python：abi3 wheel，转的时候放 GIL

```bash
pip install rword-convert   # abi3 wheel, Python ≥ 3.9
```

```python
import rword_convert

converter = rword_convert.Converter()
pdf, warnings = converter.convert(docx_bytes)   # 内核调用期间 GIL 已释放
```

wheel 是 abi3（Python ≥ 3.9，零运行时依赖）。并发配方：`ThreadPoolExecutor` + `threading.local`，每线程一个实例。

### Java：Java 8，槽位池借还

Maven Central，兼容 Java 8（major 52），零运行时依赖：

```xml
<dependency>
  <groupId>io.github.office-rs</groupId>
  <artifactId>rword-convert</artifactId>
  <version>0.1.0</version>
</dependency>
```

```java
try (RwordConverterPool pool = new RwordConverterPool(4)) {
    byte[] pdf = pool.borrow().convertToPdf(docxBytes);
}
```

`RwordConverter` 实现 `AutoCloseable`，`close()` 释放 native 句柄。失败抛 `RwordConvertException`，内核 panic 绝不跨 JNI 边界。

### 浏览器：wasm，塞进 Worker

```bash
npm install @office-rs/rword-convert-wasm
```

```js
import init, { registerFont, convertToPdf } from "@office-rs/rword-convert-wasm";

await init();
registerFont(new Uint8Array(await (await fetch("/fonts/simsun.ttc")).arrayBuffer()));

const { bytes } = convertToPdf(docx);
```

不依赖 WebGPU / Canvas，大文档推荐塞进 Web Worker，主线程零阻塞。浏览器没有系统字体，字体必须显式注册，兜底链初始为空。每个 Worker 是独立 wasm 实例、独立字体状态——注册相同的字体，输出与主线程逐字节一致。

## 05 小结

- **同内核**：和编辑器共用解码、排版、字体、渲染场景，不是第二个排版器；
- **一致性**：相同输入 + 相同字体 → 逐字节一致的 PDF，编辑所见 = 导出所得；
- **字体注册**：进程级注册表 + Converter 快照，是跨平台不分裂的关键；
- **落地形态**：CLI 给脚本和 CI，Rust / Node / Python / Java / 浏览器 wasm 给各自宿主，作为库交给上层。

转换不是一个"附带的导出按钮"，而是同一套内核的第二种出口。需要它的地方通常没有屏幕——这正是它存在的理由。

---

*本文基于 rword 仓库的转换模块源码、CLI 帮助文本与各绑定文档整理，相关接口以仓库当前实现为准。*
