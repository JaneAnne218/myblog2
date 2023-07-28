import{_ as t,o as s,c as a,V as o}from"./chunks/framework.7d8927c2.js";const e="/myblog2/assets/1-git-clone.01ec3f1e.png",i="/myblog2/assets/2-enter-remote-url.863c6efd.png",n="/myblog2/assets/3-todo-done.475c1e83.png",y=JSON.parse('{"title":"obsidian git插件的安装及使用","description":"obsidian git插件的安装及使用","frontmatter":{"title":"obsidian git插件的安装及使用","description":"obsidian git插件的安装及使用","date":"2023-07-04T00:00:00.000Z","tags":["工具"]},"headers":[],"relativePath":"obsidian-git插件的安装及使用.md","filePath":"obsidian-git插件的安装及使用.md","lastUpdated":1690536365000}'),l={name:"obsidian-git插件的安装及使用.md"},r=o('<h2 id="_1-安装obsidian-git插件" tabindex="-1">1. 安装obsidian git插件 <a class="header-anchor" href="#_1-安装obsidian-git插件" aria-label="Permalink to &quot;1. 安装obsidian git插件&quot;">​</a></h2><ol><li>obsidian的设置-第三方插件</li></ol><h2 id="_2-从github下载库" tabindex="-1">2. 从GitHub下载库 <a class="header-anchor" href="#_2-从github下载库" aria-label="Permalink to &quot;2. 从GitHub下载库&quot;">​</a></h2><ol><li>ctrl+p 打开命令面板，输入git clone <img src="'+e+'" alt=""></li><li>输入GitHub上的库地址</li></ol><blockquote><p>参考: <a href="https://forum.obsidian.md/t/the-easiest-way-to-setup-obsidian-git-to-backup-notes/51429" target="_blank" rel="noreferrer">https://forum.obsidian.md/t/the-easiest-way-to-setup-obsidian-git-to-backup-notes/51429</a></p></blockquote><p><img src="'+i+'" alt=""></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">https://</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PERSONAL_ACCESS_TOKEN</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">@github.com/</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">USERNAME</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">/</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">REPO</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">.git</span></span></code></pre></div><p><strong>这里的PERSONAL_ACCESS_TOKEN是在github的setting，选择setting-developer，选择personal access tokens中生成的token，需要勾选repo权限</strong><br> 3. 填入一个文件夹，这个文件夹必须是空的，如果不存在这个文件夹，会创建一个<br> 4. 等待下载完成<br> 5. <strong>下载好的文件夹存在本地，可以用vscode、github desktop打开，这个文件夹就是一个git仓库，可以在vscode，github desktop，obsidian使用git命令了，最重要的是这三者是同步的，可以说是很方便了。</strong></p><h2 id="_3-优点" tabindex="-1">3. 优点 <a class="header-anchor" href="#_3-优点" aria-label="Permalink to &quot;3. 优点&quot;">​</a></h2><p>todo list 可以点击完成以及未完成 <img src="'+n+'" alt=""></p>',10),p=[r];function c(d,_,g,b,h,u){return s(),a("div",null,p)}const D=t(l,[["render",c]]);export{y as __pageData,D as default};
