---
title: Teris
description: Teris
date: 2023-09-29
tags:
  - 项目和工具
---
## 构建
vite pinia 
## pinia
在vue devtools下的有pinia的状态管理界面。
## torefs
 toRefs 函数来将 store 对象中的 count 属性转换为响应式变量。
## tetris
1. import './unit/const';import './control';这两个文件在main.js中引入却没有使用。<br/>
## 要如何拆分整个项目？我需要先做什么？
**先做状态？**<br/>
非常顺利地完成了状态的书写。<br/>
## navigator
GitHub Copilot: `navigator` 是 JavaScript 中的一个全局对象，它提供了与浏览器相关的信息和功能。通过 `navigator` 对象，我们可以获取浏览器的名称、版本、语言、操作系统等信息，也可以执行一些与浏览器相关的操作，例如打开新窗口、获取地理位置等。

在 Vue.js 项目中，`navigator` 对象通常用于检测浏览器的特性和版本，以便在不同的浏览器中提供不同的行为或样式。例如，我们可以使用 `navigator.userAgent` 属性来获取浏览器的 User-Agent 字符串，然后根据该字符串来判断浏览器的类型和版本。
## arr.find()
Array.prototype.find() 是 JavaScript 中的一个数组方法，它用于查找数组中符合条件的第一个元素，并返回该元素的值。该方法接受一个回调函数作为参数，该回调函数会被依次传入数组中的每个元素，如果回调函数返回值为 true，则该元素就是符合条件的第一个元素，find() 方法会立即返回该元素的值，否则继续查找下一个元素，直到找到符合条件的元素或者遍历完整个数组。
```js
const arr = [1, 3, 5, 7, 9];
const result = arr.find(x => x >= 5);
console.log(result); // 输出：5
```
在这个例子中，我们定义了一个数组 arr，然后使用 arr.find() 方法来查找第一个大于等于 5 的数字。find() 方法的回调函数 x => x >= 5 接受一个参数 x，表示数组中的每个元素，如果该元素大于等于 5，则返回 true，否则返回 false。由于数组中第一个大于等于 5 的元素是 5，因此 find() 方法返回了数字 5。
## setup函数
1. 入口点<br/>
2. vue devtools有组件setup的返回值
## music.js需要有以下代码才不会报错
```js
export default{
  setup(){

  }
  }
```