# vitepress评论和搜索
参考链接:
http://f.zuo11.com/3-optimize/fast-create-website/
## 1. 评论valine
1. 教程
https://valine.js.org/cdn.html
2. leanCloud
https://console.leancloud.cn/apps
## 2. 搜索
1. 只添加了配置，搜索页面就出现了。
```js
 algolia: {
      appId: "xx",
      apiKey: "xxxxx",
      indexName: "xxx"
    },
```
## feat：添加功能
>资料：https://blog.csdn.net/qq_42460209/article/details/125647447
1. 给网页添加标签页图标
```js
//添加到config.js
head: [["link", { rel: "icon", href: "/watermelon.ico" }]]
```