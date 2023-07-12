import{_ as s,o as n,c as a,O as p}from"./chunks/framework.269db9bd.js";const h=JSON.parse('{"title":"pnpm deploy","description":"","frontmatter":{},"headers":[],"relativePath":"pnpmdeploy.md","filePath":"pnpmdeploy.md"}'),l={name:"pnpmdeploy.md"},e=p(`<h1 id="pnpm-deploy" tabindex="-1">pnpm deploy <a class="header-anchor" href="#pnpm-deploy" aria-label="Permalink to &quot;pnpm deploy&quot;">​</a></h1><h2 id="写一个pnpm的github-action" tabindex="-1">写一个pnpm的github action <a class="header-anchor" href="#写一个pnpm的github-action" aria-label="Permalink to &quot;写一个pnpm的github action&quot;">​</a></h2><div class="language-deploy.yml"><button title="Copy Code" class="copy"></button><span class="lang">deploy.yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">name: Deployhahah</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">on:</span></span>
<span class="line"><span style="color:#A6ACCD;">  push:</span></span>
<span class="line"><span style="color:#A6ACCD;">    branches:</span></span>
<span class="line"><span style="color:#A6ACCD;">      branch-1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  build:</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: actions/checkout@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: actions/setup-node@v1</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          node-version: 16</span></span>
<span class="line"><span style="color:#A6ACCD;">          registry-url: https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          version: latest</span></span>
<span class="line"><span style="color:#A6ACCD;">      - run: pnpm install</span></span>
<span class="line"><span style="color:#A6ACCD;">      - run: pnpm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          github_token: \${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          publish_dir: docs/.vitepress/dist</span></span></code></pre></div>`,3),o=[e];function t(c,i,r,C,A,y){return n(),a("div",null,o)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
