---
title: 移动端开发
date: 2022-07-28
sidebar: 'auto'
tags:
 - 移动端开发
categories:
 -  前端基础
---

### 移动端调试方法

Chrome DevTools（谷歌浏览器）的模拟手机调试

搭建本地web服务器，手机和服务器一个局域网内，通过手机访问服务器

使用外网服务器，直接IP或域名访问

视口：浏览器显示页面内容的屏幕区域，视口可以分为布局视口、视觉视口和理想视口

布局视口layout viewport

视觉窗口visual viewport

理想视口ideal viewport

在移动端布局想要理想视口就是屏幕有多宽，我们的布局视口就有多宽

想要来向视口，需要给我们的移动端页面**添加meta视口标签**

meta视口标签

```html
<meta name='viewport' content='width=device-wdith,user-scalable=no,
initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0'>
```

| 属性 | 解释说明 |
| --- | --- |
| width | 宽度设置为viewport宽度，可以设置device-width特殊值 |
| initial-scale | 初始缩放比，大于0的数字 |
| maximum-scale | 最大缩放比，大于0的数字 |
| minimum-scale | 最小缩放比，大于0的说自 |
| user-scalable | 用户是否可以缩放，yes或no |

物理像素&&物理像素比

分辨率即物理像素

物理像素比dpr

### 背景缩放

background-size:背景图片宽度 背景图片高度；      长度、百分比、cover(完全覆盖盒子)、contain(高度和宽度等比例拉伸)

1. 只写一个参数，肯定是宽度高度等比例缩放
2. 百分比以父盒子来算，等比例缩放

- 移动端开发选择
1. 单独制作移动端页面：根据设备显示，网域名前面添加m（mobile）
2. 响应式页面兼容移动端：通过判断屏幕宽度来改变样式，缺点：制作麻烦，需要花精力调节兼容性问题

### 移动端技术解决方案

1. 移动端CSS样式初始化：normalize.css（去官网下载）   
2. CSS3盒子模型box-sizing：盒子宽度=CSS中设置的宽度width里面包含了border和padding，在CSS3中的盒子模型padding和border不会撑大盒子

    ```html
    box-sizing:border-box;    CSS3盒子模型
    box-sizing:content-box;     传统盒子模型

    ```

3. 移动端特殊样式

    ```html
    box-sizing:border-box;
    -webkit-box-sizing:border-box;    
    -webkit-tap-highlight-color:transparent;       点击高亮我们需要清除，设置为transparent完成透明
    -webkit-appearance:none;     在移动端浏览器默认的外观在IOS上加上这个属性才可以给按钮盒输入框自定义样式
    img,a {-webkit-touch-callout:none;  }     禁止长按页面是弹出菜单
    ```

### 移动端常见布局

单独制作移动端页面：流式布局(百分比布局)、flex弹性布局、less+rem+媒体查询布局、混合布局

响应式页面兼容移动端：媒体查询、bootstarp

1、 流式布局(百分百布局)—-最常见的布局方式

    通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充

2、flex布局

布局简单、移动端应用较广

任何一个容器都可以指定为flex布局

当父盒子设定为flex布局以后，子元素的float、clear和vertical-align属性将失效

采用flex布局的元素，称为flex容器，简称容器，所有子元素自动成为容器成员，称为flex项目

- 父项属性

**flex-direction:设置主轴的方向**，row-默认从左到右、row-reverse-从右到左、column从上到下

**justify-content:设置主轴上的子元素排列方式**，flex-start-默认从头开始、dlex-end-默认从尾部开始排序、center-在居中对齐、space-around-平分剩余空间、space-between-现在两边贴边再平分剩余空间

**flex-wrap:设置子元素是否换行**，nowrap-默认值不换行、wrap-换行

**align-content:设置侧轴上的子元素排列方式(多行)，··11**

**align-items:设置侧轴上的子元素排列方式(单行)** ，center-实现水平居中

**flex-flow:复合属性，同时设置flex-direction和flex-wrap** `flex-flow:row wrap;`

align-content和align-items区别

align-items适用于单行情况下，只有上对齐、下对齐、居中和拉伸

align-content适用于换行(多行)的情况下，可以设置上对齐、下对齐、居中、拉伸以及平均分配剩余空间等属性值。

单行找align-items、多行找align-content

- flex布局子项常见属性
    `flex：number（个数）；`

align-self：控制子项自己在侧轴上的排列方式

order：控制盒子的位置

背景线性渐变：

    ```html
    background:linear-gradient(起始方向，颜色1，颜色2，。。。。)；
    background:-webkit-linear-gradient(left,red,blue);
    background:-webkit-linear-gradient(left top,red,blue);
    ```

3、rem适配布局

- rem基础
    
    rem是一个相对单位，类似于em，em是父元素字体大小
    
    rem的基准是相对于html元素的字体大小、em相对于父元素来说
    
    rem优点可以通过html里面的大小来改变页面中元素的大小来整体控制
    
- 媒体查询Media Query
    
    可以针对不同的媒体类型定义不同的样式
    
    @media可以针对不同的屏幕尺寸设置不同的样式
    
    ```html
    @media mediatype and|not|only (media feature){
    	CSS-Code;
    }
    ```
    
    用@media开头
    
    mediatype媒体类型：all用于所有设备  print用于打印机和打印预览  scree用于电脑屏幕、平板电脑、智能手机等。
    
    关键字and not only：and将媒体特性连接在一起，且   not排除某个媒体特性，非   only指定某个特定的媒体类型
    
    media feature 媒体特性必须有小括号包含：width定义输出设备中页面可见区域的宽度    min-width定义输出设备中页面最小可见区域里宽度    max-width定义输出设备中页面最大可见区域宽度
    
- 媒体查询+rem实现元素动态大小变化
    
    可以实现不同设备宽度，实现页面元素大小的动态变化
    
    引入资源
    
    ```html
    <link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">
    ```
    
- Less
    
    Less包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的CSS文件。
    
    VSCode通过Easy-LESS插件
    
    Less可以嵌套去写
    
    伪类选择器：内层选择器的前面没有&符号则被解析为父选择器的后代；
    
                    如果有&符号，则被解析为父元素自身或者父元素的伪类。
    
    ```html
    a:honver{}     CSS中
    a{
    	&:honver{}      Less中
    }
    ```
    
    Less里面的注释是“//”
    
    Less中提供了加减乘*除的算术运算   运算符的中间左右有空格隔开1px + 5
    
    如果两个数都有单位，并且单位不一致，最后的结果以第一个单位为准
    
- rem适配方案
    
    根据设计稿与设备宽度的比例，动态计算并设置html根标签的font-size大小（媒体查询）
    
    CSS中，设计稿元素的宽、高、相对位置等取值，按照同等比例换算成rem为单位的值
    
    方案1：rem+媒体查询+less技术
    
    基本以750为准
    
    动态设置html标签和fontsize大小
    
    页面元素rem值=页面元素值(px)/（屏幕宽度/划分页数）
    
    html font-size的大小=屏幕宽度/划分的份数
    
    页面元素的rem值=页面元素值(px)/html中font-size字体大小
    
    @import导入的意思可以把一个样式文件导入到另外一个样式文件里面
    
    link是吧一个样式文件引入到html页面里面
    
    方案2：flexble.js+rem
    
    flexble.js移动端适配库
    
    确定好我们当前设备的html文字大小就可以了
    
    页面元素rem值：页面元素的px值/ （设计稿大小/10），剩下的让flexible.js去算
    
    ```html
    /*html当中引入js文件*/
    <script src="js/flexible.js">   </ script>
    ```
    
    安装插件CSSrem可以自动转换px和rem
    
    修改插件默认的html文字大小：设置-更多操作-打开setting.js-搜索cssroot-修改大小
    
4. 响应式布局
    
    使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的
    
    通过媒体查询来改变这个布局容器的大小
    
    响应式尺寸划分：
    
    超小屏幕：设置宽度为100%
    
    小屏幕：设置宽度为750px
    
    中等屏幕：宽度设置为970px
    
    大屏幕：宽度设置为1170px
    
### Bootstrap

[https://bootstrap.css88.com/](https://bootstrap.css88.com/)

bootstrap使用四部曲：

1. 创建文件夹结构

2. 创建html骨架结构

3. 引入相关样式文件

4. 书写内容

bootstrap栅格系统：

将网页布局划分为等宽的列，然后通过列数的定义来模块化页面布局