import{_ as s,o as n,c as a,V as p}from"./chunks/framework.7d8927c2.js";const u=JSON.parse('{"title":"pnpmdeploy","description":"pnpmdeploy","frontmatter":{"title":"pnpmdeploy","description":"pnpmdeploy","date":"2023-06-10T00:00:00.000Z","tags":["CI/CD"]},"headers":[],"relativePath":"pnpmdeploy.md","filePath":"pnpmdeploy.md","lastUpdated":1691950378000}'),l={name:"pnpmdeploy.md"},e=p(`<h2 id="写一个pnpm的github-action" tabindex="-1">写一个pnpm的github action <a class="header-anchor" href="#写一个pnpm的github-action" aria-label="Permalink to &quot;写一个pnpm的github action&quot;">​</a></h2><div class="language-deploy.yml"><button title="Copy Code" class="copy"></button><span class="lang">deploy.yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">name: Deployhahah</span></span>
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
<span class="line"><span style="color:#A6ACCD;">          publish_dir: docs/.vitepress/dist</span></span></code></pre></div>`,2),o=[e];function t(c,i,r,C,A,y){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};
