---
title: Vue项目的相关问题汇总
date: 2023-1-10
sidebar: 'auto'
# sticky：1
tags:
 - vue
categories:
 -  Vue基础
sticky: '1'
---

## 问题1：`npm run serve`运行出现报错

![Untitled](../../.vuepress/public/071501/problem1.png)

原因：node.js版本太高

解决方法：

在命令行输入命令修改环境变量：`$env:NODE_OPTIONS="--[openssl](https://so.csdn.net/so/search?q=openssl&spm=1001.2101.3001.7020)-legacy-provider"`

然后再执行：`npm run serve`

## 问题2：npm install报错，cd() never called! This is an error with npm itself

1. 首先要以管理员模式打开cmd清除你的npm缓存 : npm cache clean -f
2. 清除完缓存后，安装最新版本的Node helper： npm install -g n

也可能存在网络不好可以重新配置一下镜像

```jsx
//配置淘宝镜像，下载的时候快一些
npm config set registry https://registry.npm.taobao.org 
npm install
```

## 问题3：****Vue 报错error:0308010C:digital envelope routines::unsupported****

出现这个错误是因为 node.js V17版本中最近发布的OpenSSL3.0, 而OpenSSL3.0对允许算法和密钥大小增加了严格的限制，可能会对生态系统造成一些影响.

****方法1.打开终端（按健win+R弹出窗口，键盘输入cmd,然后敲回车）并按照说明粘贴这些：（不一定行，本人失败了）****

```java
set NODE_OPTIONS=--openssl-legacy-provider
```

****方法2.尝试卸载Node.js 17+版本并重新安装Node.js 16+版本，然后再重新启动****