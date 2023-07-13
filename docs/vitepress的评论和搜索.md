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
2.关于标签页图标的尝试
```html
<!-- 在元素下查找favicon -->
<link rel="icon" href="//www.bilibili.com/favicon.ico">
```
>"favicon" 是 "favorite icon" 的缩写，指的是网站或应用程序在浏览器标签页、书签栏和其他界面中显示的小图标。它通常是一个小正方形的图标，用于识别特定网站或应用程序，并提供品牌识别和可视化标识。
网站的标签页图标是一个网址，我们无法拿到ico后缀的图片。

## 图标库
1. font awesome
