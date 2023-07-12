import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AnneJane's Blog",
  description: "学习记录+生活分享",
  base: "/myblog2/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '前端基础', 
      items: [
        { text: '任务', link: '/任务' },
        { text: 'axios', link: '/axios' },
        { text: 'http-proxy', link: '/http-proxy' },
        { text: 'commander', link: '/commander' },
        { text: 'js', link: '/js' },

      ]
    },
      {
        text: '前端工程化',
        items: [
          { text: '从0到1实现ci cd', link: '/从0到1实现ci cd' },
          { text: 'win子系统和win下的nginx', link: '/win子系统和win下的nginx' },
          { text: 'koa系列', link: '/koa系列' },
          { text: 'webpack', link: '/webpack' },
          { text: 'pnpmdeploy', link: '/pnpmdeploy' },
        ]
      },
      {
        text: '源码解析',
        items: [
          { text: 'vue源码解析', link: '/vue源码解析' },
        ]
      },
      {
        text: '浏览器插件',
        items: [
          { text: '谷歌插件', link: '/谷歌插件' },
        ]
      }
    ],

    sidebar: [
      {
        text: '前端基础',
        items: [
          {text:'任务',link:'/任务'},
          {text:'axios',link:'/axios'},
          {text:'http-proxy',link:'/http-proxy'},
          {text:'commander',link:'/commander'},
          {text:'js',link:'/js'},
        ],
      },
      {
        text:'前端工程化',
        items:[
          {text:'从0到1实现ci cd',link:'/从0到1实现ci cd'},
          {text:'win子系统和win下的nginx',link:'/win子系统和win下的nginx'},
          {text:'koa系列',link:'/koa系列'},
          {text:'webpack',link:'/webpack'},
          {text:'pnpmdeploy',link:'/pnpmdeploy'},
        ]
      },
      {
        text:'源码解析',
        items:[
          {text:'vue源码解析',link:'/vue源码解析'},
        ]
      },
      {
        text:'浏览器插件',
        items:[
          {text:'谷歌插件',link:'/谷歌插件'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JaneAnne218' }
    ]
  }
})
