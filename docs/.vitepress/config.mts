import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

const configDir = path.dirname(fileURLToPath(import.meta.url))
const blogDir = path.resolve(configDir, '../blog')

interface Post {
  link: string
  title: string
}

function readTitle(file: string): string {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf-8')
  const heading = content.match(/^#\s+(.+)$/m)
  return heading ? heading[1].trim() : file.replace(/\.md$/, '')
}

/** 从 blog 目录自动生成侧边栏，新增文章无需手动维护 */
const posts: Post[] = fs
  .readdirSync(blogDir)
  .filter((file) => file.endsWith('.md'))
  .filter((file) => fs.statSync(path.join(blogDir, file)).size > 0)
  .map((file) => ({
    link: `/blog/${file.replace(/\.md$/, '')}`,
    title: readTitle(file)
  }))
  .sort((a, b) => a.title.localeCompare(b.title, 'zh-Hans-CN'))

export default defineConfig({
  lang: 'zh-CN',
  title: 'Ravenq 的技术博客',
  description: 'Ravenq 的技术博客文章在 GitHub 的备份，博客请访问 http://www.aqcoder.com',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['script', { src: '/baidu-tongji.js' }]
  ],
  themeConfig: {
    sidebar: {
      '/blog/': [{ text: '全部文章', items: posts }]
    },
    nav: [
      {
        text: '博客',
        link: 'http://www.aqcoder.com'
      },
      {
        text: '开源项目',
        items: [
          {
            text: 'markdown-it-vue',
            link: 'https://github.com/ravenq/markdown-it-vue'
          },
          {
            text: 'office-rs',
            link: 'https://github.com/office-rs'
          }
        ]
      },
      {
        text: 'GitHub',
        link: 'https://www.github.com/ravenq'
      }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdatedText: '最后更新',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © Ravenq'
    }
  }
})
