# Ravenq 的技术博客

基于 [VitePress](https://vitepress.dev/) 的静态博客，由 GitHub Pages 托管，主站为 <http://www.aqcoder.com>。

## 本地开发

```bash
npm install
npm run dev      # 启动开发服务器
npm run build    # 构建到 docs/.vitepress/dist
npm run preview  # 预览构建结果
```

## 目录结构

```
docs/
├── .vitepress/
│   ├── config.mts        # 站点配置，侧边栏由 blog 目录自动生成
│   └── theme/index.ts    # 主题扩展（旧链接重定向）
├── blog/                 # 文章源文件（Markdown）
├── public/               # 静态资源，构建时原样复制到站点根目录
│   ├── favicon.ico
│   ├── baidu-tongji.js
│   ├── demo/
│   └── img/
└── index.md              # 首页
```

新增文章：在 `docs/blog/` 下添加 Markdown 文件（首行使用 `# 标题`），再在 `docs/index.md` 中加入链接即可。侧边栏会自动收录。

## 部署

推送到 `master` 分支后，GitHub Actions 会自动构建并发布。首次使用时需在仓库
**Settings → Pages → Build and deployment** 中把 Source 切换为 **GitHub Actions**。

旧站地址（如 `/blog.md/git-cli.html`）会由 404 页面自动重定向到新地址（`/blog/git-cli`）。
