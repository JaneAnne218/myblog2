import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/watermelon.ico" }]],
  title: "AnneJane's Blog",
  description: "学习记录+生活分享",
  base: "/myblog2/",
  themeConfig: {
    
    algolia: {
      appId: "94LFGM62N2",
      apiKey: "7cc3f0c3e84053fa5eaaa1275c46549e",
      indexName: "my2",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "前端基础",
        items: [
          { text: "axios", link: "/axios" },
          { text: "http-proxy", link: "/http-proxy" },
          { text: "commander", link: "/commander" },
          { text: "js", link: "/js" },
        ],
      },
      {
        text: "前端工程化",
        items: [
          { text: "从0到1实现ci cd", link: "/从0到1实现ci cd" },
          { text: "win子系统和win下的nginx", link: "/win子系统和win下的nginx" },
          { text: "koa系列", link: "/koa系列" },
          { text: "webpack", link: "/webpack" },
          { text: "pnpmdeploy", link: "/pnpmdeploy" },
        ],
      },
      {
        text: "源码解析",
        items: [{ text: "vue源码解析", link: "/vue源码解析" }],
      },
      {
        text: "浏览器插件",
        items: [{ text: "谷歌插件", link: "/谷歌插件" }],
      },
      {
        text: "项目和工具",
        items: [
          { text: "vitepress的评论和搜索", link: "/vitepress的评论和搜索" },
          {text:"obsidian-git插件的安装及使用",link:"/obsidian-git插件的安装及使用"}
        ],
      },
      {
        text:"关于我",
        items:[
          {text:"About me",link:"/About me"}
        ]
      }
    ],

    sidebar: [
      { text:"todo list",
        items: [
          { text: "任务", link: "/任务" },
        ],
      },
      {
        text: "前端基础",
        items: [
          { text: "axios", link: "/axios" },
          { text: "http-proxy", link: "/http-proxy" },
          { text: "commander", link: "/commander" },
          { text: "js", link: "/js" },
        ],
      },
      {
        text: "前端工程化",
        items: [
          { text: "从0到1实现ci cd", link: "/从0到1实现ci cd" },
          { text: "win子系统和win下的nginx", link: "/win子系统和win下的nginx" },
          { text: "koa系列", link: "/koa系列" },
          { text: "webpack", link: "/webpack" },
          { text: "pnpmdeploy", link: "/pnpmdeploy" },
        ],
      },
      {
        text: "源码解析",
        items: [{ text: "vue源码解析", link: "/vue源码解析" }],
      },
      {
        text: "浏览器插件",
        items: [{ text: "谷歌插件", link: "/谷歌插件" }],
      },
      {
        text: "项目和工具",
        items: [
          { text: "vitepress的评论和搜索", link: "/vitepress的评论和搜索" },
          {text:"obsidian-git插件的安装及使用",link:"/obsidian-git插件的安装及使用"}
        ],
      },
      {
        text:"关于我",
        items:[
          {text:"About me",link:"/About me"}
        ]
      }
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/JaneAnne218" },{icon:"youtube",link:"https://space.bilibili.com/30063847?spm_id_from=333.1007.0.0"}],
  },
});
