import{_ as s,o as a,c as e,R as l}from"./chunks/framework.b8211e81.js";const d=JSON.parse('{"title":"vitepress评论和搜索","description":"","frontmatter":{},"headers":[],"relativePath":"vitepress的评论和搜索.md","filePath":"vitepress的评论和搜索.md"}'),n={name:"vitepress的评论和搜索.md"},o=l(`<h1 id="vitepress评论和搜索" tabindex="-1">vitepress评论和搜索 <a class="header-anchor" href="#vitepress评论和搜索" aria-label="Permalink to &quot;vitepress评论和搜索&quot;">​</a></h1><p>参考链接: <a href="http://f.zuo11.com/3-optimize/fast-create-website/" target="_blank" rel="noreferrer">http://f.zuo11.com/3-optimize/fast-create-website/</a></p><h2 id="_1-评论valine" tabindex="-1">1. 评论valine <a class="header-anchor" href="#_1-评论valine" aria-label="Permalink to &quot;1. 评论valine&quot;">​</a></h2><ol><li>教程 <a href="https://valine.js.org/cdn.html" target="_blank" rel="noreferrer">https://valine.js.org/cdn.html</a></li><li>leanCloud <a href="https://console.leancloud.cn/apps" target="_blank" rel="noreferrer">https://console.leancloud.cn/apps</a></li></ol><h2 id="_2-搜索" tabindex="-1">2. 搜索 <a class="header-anchor" href="#_2-搜索" aria-label="Permalink to &quot;2. 搜索&quot;">​</a></h2><ol><li>只添加了配置，搜索页面就出现了。</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">algolia</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">appId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">apiKey</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">indexName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span></code></pre></div><h2 id="feat-添加功能" tabindex="-1">feat：添加功能 <a class="header-anchor" href="#feat-添加功能" aria-label="Permalink to &quot;feat：添加功能&quot;">​</a></h2><blockquote><p>资料：<a href="https://blog.csdn.net/qq_42460209/article/details/125647447" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_42460209/article/details/125647447</a></p></blockquote><ol><li>给网页添加标签页图标</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//添加到config.js</span></span>
<span class="line"><span style="color:#FFCB6B;">head</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">link</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">rel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">icon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">href</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/watermelon.ico</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]]</span></span></code></pre></div>`,11),t=[o];function p(r,c,i,F,D,y){return a(),e("div",null,t)}const _=s(n,[["render",p]]);export{d as __pageData,_ as default};
