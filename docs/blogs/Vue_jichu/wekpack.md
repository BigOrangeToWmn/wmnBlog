---
title: 前端工程化
date: 2022-11-03
sidebar: 'auto'
tags:
 - vue
categories:
 -  Vue基础
---

## 前端工程化与webpack

模块化（js模块化、css模块化、资源的模块化）

组件化（复用现有的UI结构、样式、行为）

规范化（目录结构的划分、编码规范化、接口规范化、文档规范化、Git分支管理）

自动化（自动化构建、自动部署、自动化测试）

### 前端工程化

在企业级的前端项目中，把前端开发所需的工具、技术、流程、经验等进行规范化、标准化

目前主流的前端工程化解决方案：

- webpack
    
    webpack是前端项目工程化的具体解决方案
    
    它提供了友好的前端模块化开发支持，以及代码压缩混淆、处理浏览器端JS的兼容性、性能优化等强大功能
    
    安装webpack：`npm install webpack webpack-cil -D` 
    
    配置webpack：
    
    ①在根目录中创建名为`webpack.config.js`的webpack配置文件，并初始化以下配置
    
    ```jsx
    module.exports={
    	mode:'development'   //mode用来指定构建模式，可选值有development和production
    //开发的时候一定要用development，追求打包的速度而不是体积
    //发布上线的时候一定要用production，因为上限追求的是体积小，而不是打包速度快
    }
    ```
    
    ②在package.json的script结点下，新增dev脚本
    
    ```jsx
    "script":{
    	"dev":"webpack"
    }
    ```
    
    ③在终端中运行`npm run dev`命令，启动webpack进行项目的打包构建
    
    **webpack中的默认约定：**
    
    ①默认打包入口文件为src—>index.js
    
    ②默认的输出文件路径为dist—>main.js
    
    **webpack插件：**
    
    webpack-dev-server：每当修改代码，webpack会自动进行项目打包的构建
    
    `npm install webpack-dev-server -D`
    
    a.修改`package.json—>script`中的dev命令
    
    ```jsx
    "script":{
    	"dev":"webpack server"
    }
    ```
    
    b.再次运行 `npm run dev` 重新进行项目打包
    
    c.在浏览器中访问`http://localhost:8080`地址，查看自动打包效果
    
    ③html-webpack-plugin：可以通过插件自定制index.html页面的内容
    
    **webpack中的loader**
    
    非.js后缀名结尾的模块webpack默认处理不了，需要调用loader加载器才可以正常打包
    
    loader加载器的作用：协助webpack打包处理特定的文件模块。
    
    css-loader         less-loader          babel-loader
    
    **打包CSS文件：**`npm i style-loader css-loader -D` 
    
    在webpack.config.js的module→rules数组，添加loader规则如下：
    
    ```jsx
    module:{
    	rules:[
    		{test:/\.css$/,use:['style-loader','css-loader']}
    		//test表示匹配的文件类型，use表示对应要调用的loade=
    	]
    }
    ```
    
    **打包.less文件：**`npm i less-load less -D` 
    
    在webpack.config.js的module→rules数组，添加loader规则如下：
    
    ```jsx
    module:{
    	rules:[
    		{test:/\.less$/,use:['style-loader','css-loader','less-loader']}
    		//test表示匹配的文件类型，use表示对应要调用的loade=
    	]
    }
    ```
    
    **打包样式表中与url路径相关文件：**`npm i url-loader file-loader -D` 
    
    在webpack.config.js的module→rules数组，添加loader规则如下：
    
    ```jsx
    module:{
    	rules:[
    		{test:/\.jpg|png|gif$/,use:'url-loader?limit=22229'}
    		//limit指图片的大小，单位是节byte，只有小于等于limit大小的图片才会被转换为base64格式的图片
    	]
    }
    ```
    
    **打包处理js文件中的高级语法：**对于某些高级js语法，需要借助babel-loader进行打包处理
    
    `npm i babel-loader @babel/core @babel/plugin-proposal-decorators -D` 
    
    在webpack.config.js的module→rules数组，添加loader规则如下：
    
    ```jsx
    module:{
    	rules:[
    		{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
    	]
    }
    ```
    
    配置babel-loader
    
    ```jsx
    module.exports={
    	plugins:[['@babel/plugin-proposal-decorators',{legacy:true}]]
    }
    ```
    
    发布
    
    实际开发中会使用命令行工具一键生成带有webpack的项目——CLI
    
- parcel



