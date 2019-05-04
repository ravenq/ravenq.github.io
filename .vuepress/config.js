module.exports = {
  title: 'Ravenq 的技术博客',
  description: 'Ravenq 的技术博客文章在Github的备份，博客请访问 http://www.aqcoder.com',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['script', { src: '/baidu-tongji.js' }]
  ],
  themeConfig: {
    sidebar: 'auto',
    nav: [
      {
        text: '博客',
        link: 'http://www.aqcoder.com'
      }, {
        text: '开源项目',
        items: [
          {
            text: 'markdown-it-vue',
            link: 'https://www.github.com/ravenq/markdown-it-vue'
          }, {
            text: 'vue-cli-plugin-component-lib',
            link: 'https://www.github.com/ravenq/vue-cli-plugin-component-lib'
          }, {
            text: 'GVF Project',
            items: [
              {
                text: 'gvf-server',
                link: 'https://www.github.com/ravenq/gvf-server'
              }, {
                text: 'gvf-client',
                link: 'https://www.github.com/ravenq/gvf-client'
              }, {
                text: 'gvf-admin',
                link: 'https://www.github.com/ravenq/gvf-admin'
              }
            ]
          }
        ]
      }, {
        text: 'GitHub',
        link: 'https://www.github.com/ravenq'
      }
    ]
  }
}
