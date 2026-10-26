import { defineComponent, h, onMounted } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

/**
 * 旧站文章地址形如 /blog.md/git-cli.html，
 * 命中 404 时跳转到新地址 /blog/git-cli，避免历史外链失效。
 */
export default {
  extends: DefaultTheme,
  Layout: defineComponent({
    name: 'BlogLayout',
    setup() {
      const { page } = useData()

      onMounted(() => {
        if (!page.value.isNotFound) return
        const matched = window.location.pathname.match(/^\/blog\.md\/(.+)\.html$/)
        if (matched) {
          window.location.replace(`/blog/${matched[1]}`)
        }
      })

      return () => h(DefaultTheme.Layout)
    }
  })
}
