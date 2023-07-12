
# 1 npm init
 ```json
{
  "name": "jane-deploy",
  "version": "1.0.0",
  "description": "CI/CD server",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "ci",
    "cd",
    "deploy"
  ],
  "author": "zuoxiaobai",
  "license": "MIT"
}
```
没有写git+respository
```json
"repository": {
    "type": "git",
    "url": "git+https://github.com/zuoxiaobai/js-deploy.git"
  },
```
# 2.  eslint init

2.1，安装 npm install eslint@7.32.0 --save-dev
2.2 npx eslint --init 按照只是一步步操作
![[1-eslint-init.png]]
选择了第二个，并且推荐我安装了：
eslint-plugin-vue@latest
2.3 npm install --save-dev --save-exact prettier
2.4 npm install eslint-config-prettier --save-dev 处理eslint 与prettier的冲突
2.5  npm install eslint-plugin-prettier --save-dev 将 prettier 以插件形式集成到 eslint 处理流程中
配置 [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)，实际我参考的是zuo-deploy的文件。
# koa koa-router koa-static
完成接口、静态服务
postman可以访问 http://127.0.0.1:7777/user
浏览器可以访问 http://127.0.0.1:7777/ 得到index.html页面
# 上传npm包
本地调试：
npm exec
npm link
janedeploy start  就成功了。
上传npm包：
 1. 先切换到npm原镜像  npm config set registry https://registry.npmjs.org/
 2. npm adduser; npm login; npm publish
 3. 切回到淘宝镜像 npm config set registry https://registry.npm.taobao.org

全局安装npm包
npm i -g jane-deploy

杀死进程
杀不掉-守护进程

0在virtual box上全局安装了 jane-deploy，sudo install -g jane-deploy
1 查看bin目录下是否有 janedeploy
2 建议重启终端 sudo reboot
3 查找wsl下的bin，也没有janedeploy，但是却可以启动成功janedeploy
4 查找janedeploy命令 和zuodeploy
 在wsl下janedeploy、zuodeploy
  /mnt/c/Users/haobing/AppData/Roaming/npm/janedeploy
  /bin/zuodeploy
 在virtualbox的ubuntu下 janedeploy、zuodeploy
  找不到
  /bin/zuodeploy
5 在win下 janedeploy zuodeploy
 ``C:\Users\haobing\AppData\Roaming\npm``
 这里因为\ 有转义作用，解决方法
  1 C:\\Users\\haobing\\AppData\\Roaming\\npm  
  2 用两个反引号``包围``  

  readerme 换行失效，需要两个空格再换行
  如何在GitHub的readme中加图片 
 1.  `![图片描述](./image.png)`
 2. `![图片描述](https://example.com/image.png)`
 3. 
```html
  <img src="./image.png" alt="图片描述" width="300" />
```
# 在wsl-ubuntu 安装nginx
sudo apt install nginx

查看当前运行的程序 ps aux
ps -aux | grep <程序名称>

localhost:7777即可访问 http://172.28.9.198:7777 访问
http://172.28.9.198/ 访问nginx
npm list -g 
删除 rm /usr/bin/janedeploy
sudo npm link
提示错误：npm ERR! path /usr/bin/package.json
解决在bin目录下没有janedeploy的方法：
program
 .commond()
多加一个program








