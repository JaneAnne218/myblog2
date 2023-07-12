import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AnneJane's Blog",
  description: "学习记录+生活分享",
  base: "/myblog2/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text:'vue源码解析',link:'/vue源码解析'},
      {text:'webpack',link:'/webpack'},
    ],

    sidebar: [
      {
        text: '笔记',
        items: [
     
          {text:'vue源码解析',link:'/vue源码解析'},
          {text:'axios',link:'/axios'},
          {text:'http-proxy',link:'/http-proxy'},
          {text:'webpack',link:'/webpack'},
          {text:'bug',link:'/bug'},
          {text:'pnpmdeploy',link:'/pnpmdeploy'},
          {text:'commander',link:'/commander'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JaneAnne218' }
    ]
  }
})
