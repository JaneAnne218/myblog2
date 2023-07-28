import { defineConfig } from "vitepress";
import getMarkdownFiles from './add';
const directory = './docs';
const markdownFiles = getMarkdownFiles(directory);
console.log(markdownFiles[0])
// https://vitepress.dev/reference/site-config


export default defineConfig({

  head: [["link", { rel: "icon", href: "../images/watermelon.ico" }]],
  title: "AnneJane's Blog",
  description: "学习记录+生活分享",
  base: "/myblog2/",
  lastUpdated: true,
  themeConfig: {
    // algolia: {
    //   appId: "94LFGM62N2",
    //   apiKey: "7cc3f0c3e84053fa5eaaa1275c46549e",
    //   indexName: "my2",
    // },
    search: {
      provider: 'local',
    },
    editLink: {
      pattern:
        'https://github.com/jcamp-code/vitepress-blog-theme/edit/main/docs/:path',
    },
    posts:markdownFiles,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text:'Tags',
        link:'/tags',
      },
      {
        text:'Archives',
        link:'/archives',
      },
      // {
      //   text: 'blogs',
      //   activeMatch: '/blog/',
      //   items: [
      //     {
      //       text: 'Blog Home',
      //       link: '/blog/',
      //       activeMatch: '/blog/$',
      //     },
      //     {
      //       text: 'Tags',
      //       link: '/blog/tags',
      //       activeMatch: '/blog/tags',
      //     },
      //     {
      //       text: 'Archives',
      //       link: '/blog/archives',
      //       activeMatch: '/blog/archives',
      //     },
      //   ]
      // },
      {
        text: "前端基础",
        items: [
          { text: "axios", link: "/axios" },
          { text: "http-proxy", link: "/http-proxy" },
          { text: "commander", link: "/commander" },
          { text: "js", link: "/js" },
          {text:"CORS",link:"/CORS"},
          {text:"better",link:"/better"},
          {text:"codereview",link:"/codereview"},
          {text:"regex",link:"/regex"},
        ],
      },
      {
        text: "前端工程化",
        items: [
          { text: "js实现linux运维面板", link: "/js实现linux运维面板" },
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
          {text:"工具",link:"/工具"},
          { text: "vitepress的评论和搜索", link: "/vitepress的评论和搜索" },
          {text:"obsidian-git插件的安装及使用",link:"/obsidian-git插件的安装及使用"},
          {text:"scroll-lyrics",link:"/scroll-lyrics"},
          {text:"fiveDice",link:"/fiveDice"},
          {text:"getSuggestions",link:"/getSuggestions"},
        ],
      },
      {
        text:"关于我",
        items:[
          {text:"About me",link:"/About me"},
          {text:"面试",link:"/面试"},
          {text:"js96题",link:"/js96题"},
          {text:"myhtml",link:"/myhtml"},
          {text:"bilibili",link:"/bilibili"}
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
          {text:"CORS",link:"/CORS"},
          {text:"better",link:"/better"},
          {text:"codereview",link:"/codereview"},
          {text:"regex",link:"/regex"},
        ],
      },
      {
        text: "前端工程化",
        items: [
          { text: "js实现linux运维面板", link: "/js实现linux运维面板" },
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
          {text:"工具",link:"/工具"},
          { text: "vitepress的评论和搜索", link: "/vitepress的评论和搜索" },
          {text:"obsidian-git插件的安装及使用",link:"/obsidian-git插件的安装及使用"},
          {text:"scroll-lyrics",link:"/scroll-lyrics"},
          {text:"fiveDice",link:"/fiveDice"},
          {text:"getSuggestions",link:"/getSuggestions"}
        
        ],
      },
      {
        text:"关于我",
        items:[
          {text:"About me",link:"/About me"},
          {text:"面试",link:"/面试"},
          {text:"js96题",link:"/js96题"},
          {text:"myhtml",link:"/myhtml"},
          {text:"bilibili",link:"/bilibili"},
          
        ]
      }
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/JaneAnne218" }],
  },
  
});
