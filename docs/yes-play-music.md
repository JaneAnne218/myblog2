---
title: YesPlayMusic
description: 音乐播放器
date: 2023-07-29
tags:
  - 项目和工具
---

## [启动后端](https://github.com/JaneAnne218/NeteaseCloudMusicApi)

## [启动前端]()

## husky

husky 是一个 git hook 工具，可以在 git hook 之前执行脚本，比如在 commit 之前执行 lint 检查，或者在 push 之前执行测试。

## janeplaymusic

vue-cli vue3+webpack<br/>
1.发送 axios 请求<br/>
参考 [axios](https://janeanne218.github.io/myblog2/axios.html)<br/>
2. 解决同一个组件需要发送多个请求的问题<br/>
3. JSON.stringify(response.data, null, 2);<br/>
JSON.stringify 是将一个对象转换成 json 字符串，null 是转换过程中的替换函数，2 是缩进用的空格数。<br/>
举个例子 JSON.stringify(response.data, null, 2);<br/>
```js
var obj = {
  a: 1,
  b: 2,
};
JSON.stringify(obj, null, 2);
// "{"a":1,"b":2}"
```

## 步骤

axios 请求拿到后端数据，存储在 localstorage，vuex 从 localstorage 拿到数据供组件使用
在 vue devtools，lyrics 下的 R 组件。router-link 这些不知道怎么命名的。
vue-slider

## 二维码登录

axios
登录成功之后返回的 cookie

```json
{
  "code": 800,
  "message": "授权登陆成功",
  "cookie": "MUSIC_U=0sjdh"
}
```

## 播放

```js
http://localhost:20201/api/scrobble?id=2040585410&sourceid=163996627&time=240&timestamp=1691233907759&realIP=211.161.244.70
http://localhost:20201/api/scrobble?id=2040585410&sourceid=163996627&time=0&timestamp=1691233907762&realIP=211.161.244.70
```

1. 播放进度保存了，怎么保存的呢？

## 获取后端数据

```js
Proxy error: Could not proxy request //song/detail?ids=1433929296&realIP=211.161.244.70 from localhost:20201 to http://localhost:3000/.
See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (ECONNREFUSED).
```

## `${img?.replace('http://', 'https://')}?param=512y512`

链接：
'https://p2.music.126.net/GvYQoflE99eoeGi9jG4Bsw==/109951165375336156.jpg'
此表达式处理后为：
https://p2.music.126.net/GvYQoflE99eoeGi9jG4Bsw==/109951165375336156.jpg?param=512y512

1. https://替换了 http://
2. 链接的末尾加了?param=512y512
   这里的?的含义:在 urls 中，?做为分隔符

## svg

svg 在 vue 模板中引用的方法有几种？

1. 直接引用

```html
<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-xxx"></use>
</svg>
```

2. 通过 js 引用

```js
import xxx from "xxx.svg";
```

3. 通过 css 引用

```css
.xxx {
  background: url(xxx.svg);
}
```

4 通过 img 方式引用

```html
<img src="xxx.svg" alt="" />
```

## arrow-left arrow-right

1. css <br>
   display 的属性值有哪些？inline、block、inline-block、flex、grid、none <br>
   这些属性值有什么区别呢？<br>
   inline：内联元素，不会独占一行，会在一行显示，不会换行，宽高无效，margin 和 padding 的上下无效，左右有效<br>
   block：块级元素，会独占一行，会换行，宽高有效，margin 和 padding 的上下左右都有效<br>
   inline-block：内联块级元素，不会独占一行，会在一行显示，不会换行，宽高有效，margin 和 padding 的上下左右都有效<br>

   flex：弹性布局，可以实现弹性布局。<br>
   grid：网格布局，可以实现网格布局，网格布局的属性有哪些？<br>
   none：不显示<br>
   弹性布局属性有：flex-direction、justify-content、align-items、flex-wrap、flex-flow、align-content，这几个属性的区别：<br>
   flex-direction：决定主轴的方向，有 row、row-reverse、column、column-reverse 四个值<br>
   justify-content：决定主轴上的元素如何分布，有 flex-start、flex-end、center、space-between、space-around、space-evenly 六个值，分别是主轴的起点对齐、主轴的终点对齐、主轴的中心对齐、主轴两端对齐、主轴两端的元素间隔相等对齐、主轴两端的元素间隔相等对齐<br>
   align-items：决定交叉轴上的元素如何分布，有 flex-start、flex-end、center、baseline、stretch 五个值，分别是交叉轴的起点对齐、交叉轴的终点对齐、交叉轴的中心对齐、交叉轴的基线对齐、交叉轴的元素拉伸对齐；什么是交叉轴？交叉轴是与主轴垂直的轴，如果主轴是水平方向的，那么交叉轴就是垂直方向的。<br>

2. js <br>
   按左箭返回，按右键前进

## navi-bar 路由

图片中的 home 组件显示在 router-view 标签中，如何让她不显示 router-view 标签还依然显示 home 组件呢？<br>
实际上 router-view 标签被隐藏了起来，但如何隐藏呢？<br>
![路由](./images/5-router-link.png)

## home 组件

1. 显示 5 张图片以及图片信息<br>
2. 显示推荐歌单 <br>
3. 显示推荐艺人<br>
4. 新歌速递<br>
   用一个组件显示详细信息。

## 图片不在一行显示

```vue
<template>
  <!-- 每个图片外都有一个div，就是下面这个div，如果用grid和flex表示要在外裹一个div-->
  <div
    v-for="item in byAppleMusic"
    :key="item.id"
    class="item"
    :class="{ artist: type === 'artist' }"
  >
    <img :src="item.coverImgUrl" alt="item.name" />
  </div>
</template>
<style lang="scss" scoped>
//图片显示在一行
.item {
  display: inline-block;
  width: 15%;
  margin: 0 1%;
  img {
    width: 100%;
  }
}
</style>
```

这样写是对的。

## 发送 axios 请求获得数据

创建 axios 请求

```js
import axios from "axios";
const request = axios.create({
  baseURL: "https://autumnfish.cn",
  timeout: 10000,
});
export default request;
```

在 vue 中使用

```js
import request from "@/utils/request";
request({
  url: "/banner",
}).then((res) => {
  console.log(res);
});
```

## 路由守卫

路由守卫的作用是什么？<br>
路由守卫的作用是在路由跳转之前做一些事情，比如判断用户是否登录，如果没有登录，就跳转到登录页面，如果登录了，就跳转到目标页面。<br>
路由守卫有哪些？<br>
路由守卫有三种，分别是全局守卫、路由独享守卫、组件内守卫。<br>
全局守卫是在路由配置文件中定义的，比如 main.js 文件中定义的全局守卫，路由独享守卫是在路由配置文件中定义的，比如 router.js 文件中定义的路由独享守卫，组件内守卫是在组件内定义的，比如 Home.vue 文件中定义的组件内守卫。<br>
全局守卫有哪些？<br>
全局守卫有三种，分别是 beforeEach、beforeResolve、afterEach。<br>
beforeEach 是在路由跳转之前执行的，beforeResolve 是在路由跳转之前执行的，afterEach 是在路由跳转之后执行的。<br>
路由独享守卫有哪些？<br>
路由独享守卫有两种，分别是 beforeEnter、beforeRouteLeave。<br>
beforeEnter 是在路由跳转之前执行的，beforeRouteLeave 是在路由跳转之前执行的。<br>
组件内守卫有哪些？<br>
组件内守卫有三种，分别是 beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave。<br>
beforeRouteEnter 是在路由跳转之前执行的，beforeRouteUpdate 是在路由跳转之前执行的，beforeRouteLeave 是在路由跳转之前执行的。<br>
路由守卫的执行顺序是什么？<br>
路由守卫的执行顺序是 beforeEach、beforeResolve、beforeEnter、beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave、afterEach。<br>

## vue 的 methods 里面定义的方法是什么时候执行的呢？

1. 在 vue 的生命周期里面执行的，比如 created、mounted 等
2. 在 vue 的模板里面执行的，比如@click、@change 等
3. 在 vue 的 methods 里面执行的，比如 getByAppleMusic
4. 在 vue 的 watch 里面执行的，比如 watch
5. 在 vue 的 computed 里面执行的，比如 computed
6. 在 vue 的路由里面执行的，比如路由守卫
7. 在 vue 的 store 里面执行的，比如 vuex

## axios 发送请求返回的数据的处理

```js
import request from "@/utils/request";
export function getBanner() {
  return request({
    url: "/banner",
  });
}
```

```js
import { getBanner } from "@/api/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
    };
  },
  created() {
    getBanner().then((res) => {
      this.banners = res.data.banners;
    });
  },
};
```

## 路由传参

```js
// 路由配置
{
  path: '/detail/:id',
  name: 'Detail',
  component: () => import('@/views/detail')
}
// 路由跳转
this.$router.push({
  name: 'Detail',
  params: {
    id: 1
  }
})
// 路由接收
this.$route.params.id
```

## 那如果得到的数据是长度是 17 的数组，但是我只想要其中前 10 个数据怎么办？

```js
this.banners = res.data.banners.slice(0, 10);
```

如果返回数据是一个对象数组该如何解决呢？

```js
this.banners = res.data.banners.slice(0, 10).map((item) => {
  return {
    id: item.id,
    pic: item.pic,
  };
});
```

项目代码

```js
  created() {
    dailyRecommendPlaylist().then(
  res => {
    this.recommendPlaylist=res.data.recommend.slice(0,10)
  }
)
  },
```

## 获取推荐艺人

1. css <br>
   > 需要注意，在 css 的定义中，需要先自我明确是给哪些内容加样式。这里我犯了个错误是，把推荐艺人写进栅格里了。

用 grid，一行 6 张图片，且图片大小一样。

```css
.artist {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  img {
    width: 100%; //由于占整个格子，所以图片大小一样，但却是椭圆，border-radius50%和100%的效果是一样的。
    border-radius: 50%;
  }
}
```

## 代码重构

1. 重复代码的抽取
2. 代码的分层
3. 代码的复用
4. 代码的可维护性
5. 代码的可读性
6. 代码的可扩展性
7. 代码的可测试性
8. 代码的性能
9. 代码的安全性
10. 代码的规范性
11. 代码的健壮性
12. 代码的可靠性
13. 代码的可用性
14. 代码的易用性
15. 代码的易学性
16. 代码的易懂性

## 新专速递、排行榜

与上面相似

## loading="lazy"

image 的属性，用于懒加载，当图片进入可视区域时，才会加载图片。
懒加载：当图片进入可视区域时，才会加载图片。
可视化区域：浏览器的可视区域，即浏览器的窗口大小。

## 为什么要用懒加载？

1. 减少请求次数，提升性能
2. 减少服务器压力
3. 减少流量消耗

## 如何实现带 id 的路由跳转

```js
this.$router.push({
  name: "Detail",
  params: {
    id: 1,
  },
});
```

或者

```js
this.$router.push("/detail/" + id);
```

那 routes.js 里面的路由配置是怎么写的呢？

```js
{
  path: '/detail/:id',
  name: 'Detail',
  component: () => import('@/views/detail')
}
```

## 如何路由跳转的时候携带 vue 组件的 data

```js
this.$router.push({
  name: "Detail",
  params: {
    id: 1,
    data: this.data,
  },
});
```

我如果使用的 router-ink 呢如何携带 vue 组件的 data 呢？

```js
<router-link :to="{name: 'Detail', params: {id: 1, data: data}}">详情</router-link>
```

如果是

```html
<router-link :to="`/playlist/${item.id}`"></router-link>
```

在 router-link 里面怎么传递 data 呢？

```html
<router-link :to="`/playlist/${item.id}`" :data="data"></router-link>
```

如何传递 vue 组件的 data 呢

```js
this.$router.push({
  path: "/playlist/" + id,
  query: {
    data: this.data,
  },
});
```

## 如何获取路由跳转时携带的 data

```js
this.$route.params.data;
```

或者

```js
this.$route.query.data;
```

## 如何实现路由跳转的时候，页面滚动到顶部

```js
scrollBehavior(to, from, savedPosition) {
  return { x: 0, y: 0 }
}
```

## 如何实现路由跳转的时候，页面滚动到指定位置

```js
scrollBehavior(to, from, savedPosition) {
  return { selector: '.app' }
}
```

## 路由跳转的 params 和 query，meta

1. params 是路由跳转的时候，url 里面的参数，比如

```js
this.$router.push({
  path: "/playlist/" + id,
  params: {
    data: this.data,
  },
});
```

2. query 是路由跳转的时候，url 里面的参数，比如

```js
this.$router.push({
  path: "/playlist/" + id,
  query: {
    data: this.data,
  },
});
```

3. meta 传递非 url 参数

```js
meta: {
  msg: "hello";
}
```

## vue 存储 A 组件数据

如何存储 A 组件的数据

1. vuex
2. localStorage
3. sessionStorage
4. cookie
5. sessionStorage
   分别解释如何使用呢？
6. vuex 如何使用呢？

```js
// store.js
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    msg: "hello",
  },
  mutations: {
    setMsg(state, msg) {
      state.msg = msg;
    },
  },
});
```

```js
// A.vue
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["msg"]),
  },
  methods: {
    ...mapMutations(["setMsg"]),
  },
};
```

```js
// B.vue
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["msg"]),
  },
  methods: {
    ...mapMutations(["setMsg"]),
  },
};
```

## vuex

创建 stroe 实例

```js
// store.js
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    msg: "hello",
  },
  mutations: {
    setMsg(state, msg) {
      state.msg = msg;
    },
  },
});
```

上面这种创建 store 实例的方法，报错 export 'default' (imported as 'Vue') was not found in 'vue'，是所以采用另外一种创建 store 实例的方法：

```js
// /store/index.js
import { createStore } from "vuex";
console.log("我在store里面");
const store = createStore({
  state() {
    return {
      count: 0,
      username: "",
      // 其他状态数据...
      msg: "hello",
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setUsername(state, name) {
      state.username = name;
    },
    // 其他 mutations 方法...
  },
});
export default store;
```

使用这个 store 实例的方法

```js
//main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
```

此时可以在 vue devtools 可以看到 vuex 选项

## vuex 存储整个项目的所有数据

vue 组件的数据传给 vuex<br>

1. store

```js
// store/index.js
mustations: {
  updateData(state, data) {
    state.data = data
  }
}
```

2. vue 组件

```js
// A.vue
mounted() {
  this.$store.commit('updateData', this.recommendArtists)
}
```

3. 其他 vue 组件传数据给 vuex 的方法-使用 actions

```js
// store/index.js
actions: {
  updateData(context, data) {
    context.commit('updateData', data)
  }
}
```

```js
// A.vue
mounted() {
  this.$store.dispatch('updateData', this.recommendArtists)
}
```

使用 this.$store.commit('updateData', this.recommendArtists)和this.$store.dispatch('updateData', this.recommendArtists)的区别是什么呢？<br>
this.$store.commit('updateData', this.recommendArtists)是直接调用mutations里面的方法，而this.$store.dispatch('updateData', this.recommendArtists)是调用 actions 里面的方法，actions 里面的方法再调用 mutations 里面的方法。<br>
使用 this.$store.dispatch('updateData', this.recommendArtists)的好处是什么呢？<br>

1. 可以在 actions 里面做一些异步操作，比如发送 ajax 请求，然后再调用 mutations 里面的方法。
2. 可以在 actions 里面做一些判断，比如判断数据是否存在，如果存在就不调用 mutations 里面的方法。

## player

## library

## playbutton

## settings

## 登录

## :src

```html
<img :src="playlist.coverImgUrl" alt="" />
```

## 播放+音量滑块+进度条滑块

用 audio 标签，属性：volume、currentTime、duration

1.  在播放的时候拖动进度条会有声音，解决办法是在拖动的时候设置 audio 标签的 muted 属性为 true，拖动结束的时候设置 audio 标签的 muted 属性为 false

## "vue-slider-component": "4.0.0-beta.8",

提示不兼容，之后换成这个版本就可以了

> 参考 [链接](https://github.com/NightCatSama/vue-slider-component/issues/604)

在 audioPlayer 组件引入 slider.css 文件。<br>

1.  解决进度条上小圆点上的数字是 1-100，不是实时的播放时间。<br>
2.  解决音量播放只有 0 和 1 两个选择，我需要 0 到 1 的连续变化，而不是 0 和 1 的离散变化。如何解决呢？

```html
<vue-slider
  v-model="volume"
  :min="0"
  :max="1"
  :height="8"
  :tip="false"
  :lazy="false"
  :piecewise="false"
  :process="false"
  :reverse="false"
  :speed="0.5"
  :tooltip="false"
  :width="100"
/>
```

解释这个 vue-slider 的属性：

```js
:min="0" :max="1" // 最小值和最大值
:height="8" // 进度条的高度
:tip="false" // 是否显示小圆点上的数字
:lazy="false" // 是否惰性渲染
:piecewise="false" // 是否显示小圆点
:process="false" // 是否显示进度条
:reverse="false" // 是否反转
:speed="0.5" // 滑块滑动的速度
:tooltip="false" // 是否显示tooltip
:width="100" // 进度条的宽度
```

## 歌单详情的播放按钮，它的样式影响了 player 的按钮，我要如何如何解决这种问题呢？要么都把所有的按钮样式统一，要么实现样式的隔离?

1. 用 scoped，但是 scoped 只能影响当前组件的样式，不能影响子组件的样式
2. 用 deep，但是 deep 只能影响子组件的样式，不能影响当前组件的样式
3. 用>>>，但是>>>只能影响子组件的样式，不能影响当前组件的样式
4. 用/deep/，但是/deep/只能影响子组件的样式，不能影响当前组件的样式
5. 用::v-deep，但是::v-deep 只能影响子组件的样式，不能影响当前组件的样式
6. 用::v-slotted，但是::v-slotted 只能影响子组件的样式，不能影响当前组件的样式
7. 用::v-context，但是::v-context 只能影响子组件的样式，不能影响当前组件的样式
8. 用::v-global，但是::v-global 只能影响子组件的样式，不能影响当前组件的样式
9. 用::v-shallow，但是::v-shallow 只能影响子组件的样式，不能影响当前组件的样式
10. 用::v-unsafe，但是::v-unsafe 只能影响子组件的样式，不能影响当前组件的样式

## vscode 显示调用层次结构

1. 显示传出调用<br>
2. 显示传入调用<br>
   但是 vue 组件里面的方法无法显示调用层次结构<br>

## howler

howler 是一个音频库，可以用来播放音频，如何使用呢？

```js
import { Howl } from "howler";
const sound = new Howl({
  src: ["sound.webm", "sound.mp3"],
});
sound.play();
```

## 安装了一个 wakatime

可记录代码时间

## 添加了双击

```html
<div
  v-for="item in playlist.tracks"
  :key="item.id"
  class="song-item"
  @dblclick="helloApple(item.name)"
></div>
```

双击就可以拿到 item 值。

## beforeRouteUpdate

beforeRouteUpdate 函数会在当前路由即将更新时调用。具体情况是，当你在同一个路由下进行参数的切换，例如从 /artist/1 切换到 /artist/2，或者从 /artist/2 切换回 /artist/1 时，会触发 beforeRouteUpdate 函数。

## 为什么 activated 不起作用，但是 mounted 却是成功的？

> arist.vue

1. activated 是 keep-alive 的钩子函数，只有在 keep-alive 的组件里面才能使用，而 mounted 是 vue 的钩子函数，所有的组件都可以使用。<br>
2. 解释 keep-alive <br>
   keep-alive 是 vue 的内置组件，可以使被包含的组件保留状态，或避免重新渲染。它们有两个非常有用的特性：include 和 exclude 属性允许组件有条件地缓存。二者都可以用逗号分隔字符串、正则表达式或一个数组来表示。

## 关注/正在关注

artist.followed
?需要刷新数据才更新

## 。。。按钮

1. 绝对定位<br/>
2. refs

## 最新发布

## 如何使用 VueI18n

要使用 VueI18n 来实现多语言支持，你可以按照以下步骤进行操作：

1. 安装 VueI18n：在你的项目目录下运行以下命令安装 VueI18n。

```bash
npm install vue-i18n --save
```

2. 创建语言文件：在你的项目中创建一个目录来存放语言文件，例如 `src/locale`。在该目录下创建一个 `locales` 文件夹，并在其中创建针对每种语言的 JSON 文件。比如，你可以创建 `en.json` 和 `zh.json` 分别代表英文和中文。

示例 `en.json` 文件内容：

```json
{
  "message": "Hello, world!",
  "greeting": "Good morning!"
}
```

示例 `zh.json` 文件内容：

```json
{
  "message": "你好，世界！",
  "greeting": "早上好！"
}
```

3. 创建 VueI18n 实例：在你的应用的入口文件（通常是 `main.js`）中，导入 Vue 和 VueI18n，并创建 VueI18n 实例。

```javascript
import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en", // 默认语言
  fallbackLocale: "en", // 当当前语言不存在时的回退语言
  messages: {
    en: require("./locale/locales/en.json"), // 导入英文语言文件
    zh: require("./locale/locales/zh.json"), // 导入中文语言文件
  },
});

new Vue({
  i18n,
  // ...
}).$mount("#app");
```

4. 在组件中使用翻译：在需要翻译的组件模板中，使用 `$t` 方法来进行翻译。

```html
<template>
  <div>
    <p>{{ $t('message') }}</p>
    <p>{{ $t('greeting') }}</p>
  </div>
</template>
```

请注意，在以上示例中，`$t` 方法会根据当前的语言设置自动选择对应的翻译文本。

5. 切换语言：你可以通过 `$i18n.locale` 属性来切换当前的语言。

```javascript
methods: {
  switchLanguage(lang) {
    this.$i18n.locale = lang;
  }
}
```

这样，当调用 `switchLanguage` 方法并传入 `'en'` 或 `'zh'` 时，就可以切换到相应的语言。

这就是使用 VueI18n 实现多语言支持的基本步骤。你可以根据需要在语言文件中添加更多的翻译文本，并在组件中使用 `$t` 方法来进行翻译。

## Vue-Clipboard2

要使用 Vue-Clipboard2，在你的 Vue 项目中执行以下步骤：

1. 安装 `vue-clipboard2`：在终端中运行以下命令：

   ```shell
   npm install vue-clipboard2 --save
   ```

2. 在你的 Vue 组件中引入 `vue-clipboard2`：

   ```javascript
   import VueClipboard from "vue-clipboard2";
   ```

3. 在同一个组件中注册 `VueClipboard` 插件：

   ```javascript
   Vue.use(VueClipboard);
   ```

4. 在你的模板中使用 `v-clipboard` 指令，以及绑定点击事件和剪贴板内容：

   ```html
   <template>
     <div>
       <button v-clipboard:copy="clipboardText" v-clipboard:success="onCopy">
         复制
       </button>
     </div>
   </template>
   ```

5. 在你的 Vue 组件的 `data` 中定义剪贴板的内容：
   ```javascript
   export default {
     data() {
       return {
         clipboardText: "要复制的文本",
       };
     },
     methods: {
       onCopy() {
         console.log("复制成功！");
       },
     },
   };
   ```

这样，当用户点击 "复制" 按钮时，指定的文本将被复制到剪贴板，并且 `onCopy` 方法会被触发。

以上是使用 `vue-clipboard2` 的基本步骤，请根据你的实际需求做适当的调整。可以参考 `vue-clipboard2` 的文档（https://www.npmjs.com/package/vue-clipboard2）获取更多详细的用法和选项。
## vue3如何使用vue-i18n
1. 安装 Vue I18n <br/>
```js
npm install vue-i18n@next
```
2. 创建本地化消息文件<br/>
例如，你可以创建一个 locales 文件夹，并在其中创建以下文件：<br/>
en.js 包含英语翻译<br/>
zh-CN.js 包含简体中文翻译<br/>
fr.js 包含法语翻译<br/>
3. 配置 Vue I18n<br/>
```js
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import en from './locales/en'; // 导入英语翻译文件
import zhCN from './locales/zh-CN'; // 导入简体中文翻译文件

const i18n = createI18n({
  locale: 'en', // 默认语言
  messages: {
    en, // 英语翻译
    'zh-CN': zhCN, // 简体中文翻译
    // 可以添加其他语言的翻译文件
  },
});

const app = createApp(App);
app.use(i18n); // 注册 Vue I18n 实例
app.mount('#app');
```
4. 在组件中翻译<br/>
```vue
<template>
  <div>
    <p>{{ $t('greeting') }}</p>
  </div>
</template>

<script>
export default {
  // ...
};
</script>
```
5. 切换语言<br/>
```js
// 在组件中切换语言
i18n.setLocale('zh-CN'); // 切换到简体中文
```
## 过滤器
对于vue 3，过滤器已经被弃用了。vue2可以使用。
## 无障碍树
## vue的slot
1. vue插槽的内容和出口
父组件提供插槽内容，slot元素是插槽出口。
## $refs
```js
 this.$refs.menu.openMenu(e);
```
在 Vue 中，通过 $refs 属性可以访问到组件中的子组件实例。<br/>
假设上下文为一个父组件中，有一个 ContextMenu 子组件是通过 <ContextMenu ref="menu" /> 方式创建的，那么 this.$refs.menu 就指向了 menu 组件的实例。而 openMenu() 方法是在 menu 组件中定义的方法，它会在右键点击时打开菜单，需要传入事件对象 e 作为参数。<br/>
因此 this.$refs.menu.openMenu(e) 的作用就是调用 menu 组件实例中的 openMenu() 方法，并将 $event 对象作为参数传递给该方法。<br/>
## this.$nextTick
this.$nextTick() 方法可以在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。<br/>





