---
title: YesPlayMusic-vue/cli
description: 音乐播放器
date: 2023-10-09
tags:
  - 项目和工具
---
> 选择对应的构建工具
## vue/cli-service 4.5.13
webpack版本是：4.0.0
选择vue2、vuex、vue-router，没有选prettier、eslint的原因是总是报muti-word的错误。
## 全局组件，以及获取文件夹下的所有icon文件
```js
Vue.component('svg-icon', SvgIcon);
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./', true, /\.svg$/);
requireAll(req);
```
## vue-router
```html
<router-link to="/"></router-link>
<router-view></router-view>
```
## ref实现访问子组件的方法
```vue
<template>
 <ContextMenu ref="userProfileMenu">
</template>
<script>
  //访问方法
this.$refs.userProfileMenu.openMenu(e);
</script>
```
## slot
父组件给子组件传递内容
## @focus和@blur
##   const cookies = string.split(';;');
将字符串按照;;分隔符划分，返回一个数组。<br/>
例如，如果 string 的值为 'name=John;;age=30;;gender=male'，则执行 string.split(';;') 后，返回的数组为 ['name=John', 'age=30', 'gender=male']。
## state.data.user?.userId
这行代码是一个 JavaScript 的可选链语法，用于访问嵌套对象的属性。使用了可选链语法 ?. 来访问嵌套对象的属性。这种语法可以避免在访问嵌套对象属性时出现 TypeError 错误，即使某个属性不存在也不会抛出异常。如果属性不存在，则返回 undefined。在这个例子中，如果 state.data.user 或 state.data.user.userId 不存在，则返回 undefined。如果存在，则返回 state.data.user.userId 的值。
## Cookies.get(key) ?? localStorage.getItem(`cookie-${key}`);
```js
import Cookies from 'js-cookie';
Cookies.get(key) ?? localStorage.getItem(`cookie-${key}`);
```
??是逻辑空值合并运算符，在这个例子中，Cookies.get(key) 是一个函数调用，用于获取名为 key 的 cookie 值。如果该 cookie 值不存在，则返回 undefined。如果 Cookies.get(key) 返回 undefined，则逻辑空值合并运算符 ?? 会继续查找 localStorage 中名为 cookie-${key} 的值。如果该值存在，则返回该值；否则，返回 undefined。<br/>
需要注意的是，逻辑空值合并运算符 ?? 是 ES2020 中的新特性，需要在支持该语法的 JavaScript 运行环境中使用，例如最新版本的 Chrome、Firefox、Edge 等浏览器，或者 Node.js 14.0.0 及以上版本。如果在不支持该语法的运行环境中使用，会导致语法错误。
?? Module parse failed: Unexpected token (12:27) webpack编译器报错

