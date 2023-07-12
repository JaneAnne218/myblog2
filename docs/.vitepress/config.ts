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
          {text:'axios',link:'/axios'},
          {text:'http-proxy',link:'/http-proxy'},
          {text:'webpack',link:'/webpack'},
          {text:'pnpmdeploy',link:'/pnpmdeploy'},
          {text:'commander',link:'/commander'},
          {text:'从0到1实现ci cd',link:'/从0到1实现ci cd'},
          {text:'谷歌插件',link:'/谷歌插件'},
          {text:'win子系统和win下的nginx',link:'/win子系统和win下的nginx'},
          {text:'js',link:'/js'},
          {text:'koa系列',link:'/koa系列'},
          {text:'vue源码解析',link:'/vue源码解析'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JaneAnne218' }
    ]
  }
})
