import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs\\zh-CN",
  
  title: "mysql-document",
  description: "mysql used document",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: 'mysql', link: '/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MisterSun-git/mysql-documen' }
    ]
  }
})
