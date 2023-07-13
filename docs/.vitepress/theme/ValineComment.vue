<!-- .vitepress\theme\ValineComment.vue -->
<template>
    <div class="comment-wrap">
      <!-- 阅读量 -->
      <div class="page-edit-read">
        <span class="leancloud-visitors" data-flag-title="dev-zuo">
          <span class="post-meta-item-text">阅读量： </span>
          <i class="leancloud-visitors-count"></i>
        </span>
      </div>
      <div id="vcomments"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, watch } from "vue";
  import { useRoute } from "vitepress";
  // import Valine from "valine";
  
  const route = useRoute();
  
  onMounted(() => {
    // remoteImport("/js/Valine.min.js").then(() => initValine());
    remoteImport('//unpkg.com/valine/dist/Valine.min.js').then(() => initValine());
  });
  
  watch(
    () => route.path,
    () => {
      console.log("监听路由变化");
      initValine();
    }
  );
  
  function initValine() {
    // 为防止本地调试访问量干扰线上数据，本地使用前缀，线上使用相对路径
    let isLocalDebug = ['http://localhost:5174/myblog2/', 'http://127.0.0.1'].some(item => location.origin.startsWith(item))
    let path = isLocalDebug ? `${location.origin}${location.pathname}` : location.pathname;
  
    document.getElementsByClassName("leancloud-visitors")[0].id = path;
    new Valine({
      el: "#vcomments",
      appId: "RspV7QBTkouSwZgJ76Hsty4b-gzGzoHsz", // your appId
      appKey: "4gVqepA2LwMFbThiwi6NIgxe", // your appKey
      notify: false,
      verify: false,
      path: path, // window.location.pathname (默认值，推荐)
      visitor: true,
      avatar: "identicon",
      placeholder:
        "请在这里留下你的留言，如果上面填写了邮箱还能收到邮件哟，地址是点击头像跳转的地址",
      // other config
    });
  }
  // path
  // I. 请保证每个文章页路径的唯一性，否则可能会出现不同文章页下加载相同评论列表的情况。
  // II. 如果值为window.location.href，可能会出现随便加不同参数进入该页面，而被判断成新页面的情况。
  
  function remoteImport(url) {
    return new Promise((resolve) => {
      var head = document.getElementsByTagName("head")[0];
      var script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", url);
      head.appendChild(script);
  
      script.onload = function () {
        resolve();
      };
    });
  }
  </script>
  
  <style lang="scss">
  .comment-wrap {
    margin-top: 20px;
    .page-edit-read {
      margin: 12px;
      text-align: right;
    }
  }
  </style>