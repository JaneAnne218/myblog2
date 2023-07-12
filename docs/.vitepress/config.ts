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
          {text:'任务',link:'/任务'},
          {text:'vue源码解析',link:'/vue源码解析'},
          {text:'axios',link:'/axios'},
          {text:'http-proxy',link:'/http-proxy'},
          {text:'webpack',link:'/webpack'},
          {text:'bug',link:'/bug'},
          {text:'pnpmdeploy',link:'/pnpmdeploy'},
          {text:'commander',link:'/commander'},
          {text:'从0到1实现ci cd',link:'/从0到1实现ci cd'},
          {text:'谷歌插件',link:'/谷歌插件'},
          {text:'虚拟机以及子系统',link:'/虚拟机以及子系统'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JaneAnne218' }
    ]
  }
})
