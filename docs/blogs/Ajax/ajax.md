---
title: Ajax
date: 2022-10-08
sidebar: 'auto'
tags:
 - Ajax
categories:
 -  Ajax
---

## URL

URL（uniform resource locator）统一资源定位符，用于标识互联网上每个资源的唯一存放位置

URL的组成部分：

①客户端与服务器之间的通信协议

②存有该资源的服务器名称

③资源在服务器上的具体存放位置

客户端与服务器的通信过程

请求——处理——响应

![Untitled](../../.vuepress/public/071501/ajax1.png)
![Untitled]()

数据是网页的灵魂

如果在网页中请求服务器上的数据资源，需要用到XMLHttpRequest对象

XMLHttpRequest(简称xhr)是浏览器提供的js成员，通过它可以请求服务器上的数据资源

`var xhrObj=new XMLHttpRequest()`

资源的请求方式：

- get通常用于从服务端获取资源(向服务器要资源)
    
    如根据URL地址，从服务器获取HTML文件、CSS文件、JS文件、图片文件、数据资源等
    
- post通常用于向服务器提交数据(往服务器提交数据)
    
    如登录时向服务器提交登录信息、注册时向服务器提交注册信息、添加用户时向服务器提交用户信息等各种数据提交操作
    

## 了解AJAX

AJAX（Asynchronous Javascript And XML，异步Javascript和XML）

在网页中利用XMLHttpRequest对象和服务器进行数据交互的方式就是ajax（能够轻松实现网页与服务器之间的数据交互）

### JQuery中的ajax

`$.get()`

专门用于发起get请求，从而将服务器上的资源请求到客户端来进行使用

```jsx
$.get(url,[data],[callback])
//第一个参数：要请求的资源地址
//第二个参数：请求资源期间要携带的参数——可选
//第三个参数：请求成功时的回调函数——可选
```

`$.post()`

专门用来发起post请求，从而向服务器提交数据

```jsx
$.post(url,[data],[callback])
```

`$.ajax()`

```jsx
$.ajax({
	type:'',   //请求的方式get post
	url:'',   //请求的url地址
	data:{ },  //这次请求要携带的数据
	success:function(res){ }   //请求成功之后的回调函数
})  
```

接口：被请求的URL地址，就叫做数据结构，每个接口都必须有请求方式

- 通过GET方式请求接口的过程
    
    ![Untitled](../../.vuepress/public/071501/ajax2.png)
    
- 通过POST方式请求接口的过程
    
    ![Untitled](../../.vuepress/public/071501/ajax3.png)
    

接口文档的组成部分：

①接口名称：用来标识各个简单的说明

②接口URL：接口的调用地址

③调用方式：GET还是POST

④参数格式：接口需要传递的参数，每个参数必须包含参数名称、参数类型、是否必选、参数说明

⑤响应格式：接口返回值的详细描述，一般包含数据名称、数据类型、说明

⑥返回示例(可选)

## form表单与模板引擎

表单在网页中主要负责数据采集功能，通过`<form>`表单把采集到的信息提交到服务器端进行处理

表单的组成部分：表单标签、表单域、表单按钮

form标签的属性：用来规定如何把采集到的数据发送到服务器

| 属性 | 值 | 描述 |
| --- | --- | --- |
| action | URL地址 | 规定当提交表单时，向何处发送表单数据 |
| method | get(默认) post(该方法更加安全，使用较多) | 规定以何种方式把表单数据提交到action URL |
| enctype | application/x-www-form-urlencoded(默认，在发送前编码所有字符)    multipart/form-data(不对字符进行编码，包含上传文件控件时使用) text/plain(很少用) | 规定在发送表单数据之前如何对其进行编码 |
| target | _blank(在新窗口中打开)  _self(在相同的框架中打开) _parent _top framename | 规定在何处打开action URL |

表单的同步提交：通过点击submit按钮，触发表单提交的操作，从而使页面跳转到action URL的行为

表单同步提交的缺点：

①表单同步提交后，整个页面会发生跳转，跳转到action URL所指向的地址

②表单同步提交后，页面之前的状态和数据会丢失

解决方法：表单只负责采集数据，Ajax负责将数据提交到服务器

### 通过Ajax提交表单数据

- 监听表单提交事件
    
    ```jsx
    //jquery中两种监听表单的提交事件的方法
    $('#form1').submit(function(e){
    	alert('监听到了表单提交事件')
    })
    
    $('#form1').on('submit',function(e){
    	alert('监听到了表单提交事件2')
    })
    ```
    
- 阻止表单的默认提交行为
    
    调用`e.preventDefault()`函数，来阻止表单的提交和页面跳转
    
- 快速从表单中获取数据
    
    1、serialize()函数
    
    ```jsx
    $(selection).serialize()
    //可以一次性获取表单中的所有数据
    ```
    

### 模板引擎

可以根据程序员指定的模板结构和数据，自动生成一个完整的HTML页面

优点：减少了字符串的拼接操作；使代码结构更清晰；使代码更易于阅读和维护

art-template模板引擎使用步骤：

①导入art-template

②定义数据

③定义模板

```jsx
<script type="text/html" id="tpl-data">
    <h1>{{name}}</h1>
</script>
```

④调用template函数

```jsx
var htmlStr=template('模板Id',数据)
```

⑤渲染html结构

```jsx
$(' ').html(htmlStr)
```

art-template标准语法：

在`{{ }}`内进行变量输出或循环数组等操作——被称为标准语法

`{{ }}` 原文输出（value值中包含HTML结构，需要原文输出才能保证HTML标签被正常渲染）

循环输出

```jsx
{{each data}}
     {{$index}} {{$value}}
{{/each}}
```

过滤器

```jsx
{{value|filterName}}
//过滤器语法类似于管道操作

//定义过滤器的基本语法
template.default.imports.filterName=function(value){ return处理结果}
```

### 正则与字符串操作

- 基本语法：
    
    `exec()`函数用于检索字符串中的正则表达式的匹配
    
    ```jsx
    var str='hello'
    var pattern=/o/
    pattern.exec(str)
    ```
    
    `replace()`函数用于在字符串中用一些字符替换另一些字符
    
    ```jsx
    var result='123456'.replace('123','abc')
    ```
    

## Ajax加强

### XMLHttpRequest的基本使用

简称XHR是浏览器提供的JS对象，可以请求服务器上的数据资源

- 使用xhr发起GET请求
    
    1、创建xhr对象
    
    2、调用xhr.open()函数
    
    3、调用xhr.send()函数
    
    4、监听xhr.onreadystatechange对象
    
    ```jsx
    //1.创建XHR对象
    var xhr = new XMLHttpRequest()
    //2.调用open函数，指定球球方式与URL地址
    xhr.open('GET', '')
    //带参数的get请求
    xhr.open('GET','url?id=1')
    //3.调用send()函数，发起ajax请求
    xhr.send()
    //4.监听onreadystatechange事件
    xhr.onreadystatechange = function () {
        //4.1 监听xhr对象的请求状态readyState与服务器的响应状态status
        if (xhr.readyState === 4 && xhr.status === 200) {
            //4.2 打印服务器的响应数据
            console.log(xhr.responseText);
        }
    }
    ```
    
    查询字符串：将英文?放在URL的末尾，然后再加上参数=值，多个参数用&符号隔开
    
    浏览器提供URL编码与解码的API：
    
    encodeURI()   编码的函数
    
    decodeURI()   解码的函数
    
- 使用xhr发起POST请求
    
    和GET类似
    
    ```jsx
    //1.创建XHR对象
    var xhr = new XMLHttpRequest()
    //2.调用open函数，指定球球方式与URL地址
    xhr.open('POST', '')
    //3.设置content-type属性
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    //4.调用send函数
    xhr.send('bookname=西游记')
    //5.监听事件
    xhr.onreadystatechange = function () {
        //4.1 监听xhr对象的请求状态readyState与服务器的响应状态status
        if (xhr.readyState === 4 && xhr.status === 200) {
            //4.2 打印服务器的响应数据
            console.log(xhr.responseText);
        }
    }
    ```
    

### 数据交换格式

数据交换格式，就是服务器与客户端之间进行数据传输与交换的格式

前端领域中两种数据交换格式分别是：XML(用的较少)和JSON

- XML可扩展标记语言
    
    HTML被设计用来表述网页上的内容，是网页内容的载体；XML被设计用来传输和存储数据，是数据的载体
    
    缺点：数据体积大传输效率低；XML解析较麻烦
    
- JSON(JS对象表示法)
    
    JSON就是JS对象和数组的字符串表示方法，JSON的本质就是字符串
    
    JSON比XML体积更小、更快、更易解析
    
    **JSON的两种结构：**
    
    1、对象结构：JSON中表示为{  }括起来的内容，数据结构为{key:value,key:value}的键值对结构。其中key必须是使用英文的双引号包裹的字符串，value数据类型可以是数字、字符串、布尔值、null、数组、对象6中类型
    
    2、数组结构：数组结构在JSON中表示为[ ]括起来的内容。数据结构为[”java”,”javascript”,30,”true”…..]数组中的数据可以是数字、字符串、布尔值、null、数组、对象6种类型
    
    **JSON的注意事项：**
    
    1、属性名必须用双引号包裹
    
    2、字符串类型的值必须使用双引号包裹
    
    3、JSON中不允许使用单引号表示字符串
    
    4、JSON中不能写注释
    
    5、JSON的最外层必须是对象或数组格式
    
    6、不能使用undefined或函数作为JSON值
    
    **JSON的作用：**在计算机与网络之间存储和传输数据
    
    **JSON的本质：**在字符串中表示Javascript对象数据或数组类型
    
    **JSON和JS对象的关系：**JSON是JS对象的字符串表示法，它使用文本表示一个JS对象，本质是一个字符串
    
    **JSON和JS对象互转：**
    
    1、JSON到JS使用JSON.parse()方法
    
    2、JS对象转换为JSON字符串使用JSON.stringify( )方法
    
    **序列化和反序列化：**
    
    把数据对象转换为字符串的过程叫做序列化——序列化JSON.stringify( )
    
    把字符串转换为数据对象的过程——反序列化JSON.parse( )
    

### XMLHttpRequest Level2的新特性

- 旧版XMLHttpRequest的缺点：
    
    1、只支持文本数据的传输，无法用来读取和上传文件
    
    2、传送和接收数据时，没有进度信息，只能提示是否完成
    
- XMLHttpRequest Level2新特性：
    
    1、可以设置HTTP请求的时限
    
    2、可以使用FromData对象管理表单数据
    
    3、可以上传文件
    
    4、可以获得数据传输的进度信息
    
- 设置HTTP请求时限（timeout属性）：
    
    `xhr.timeout=3000`
    
    ```jsx
    xhr.ontimeout=function(){
    	alert('请求超时')
    }
    ```
    
- 使用FormData对象管理表单数据
- 上传文件
    
    1、定义UI结构
    
    ```html
    <!-- 1.文件选择框 -->
    <input type="file"  id="file1">
    <!-- 2.上传按钮 -->
    <button id="btnUpload">上传文件</button>
    <!-- 3.显示上传到服务器上的图片 -->
    <img src="" alt="">
    ```
    
    2、验证是否选择了文件
    
    ```jsx
    // 1.获取上传文件的按钮
    var btnUpload=document.querySelector('#btnUpload')
    // 2.为按钮添加click事件监听
    btnUpload.addEventListener('click',function(){
         // 3.获取到选择的文件列表
         var files=document.querySelector('#file1').files
         if(files.length<=0){
               return alert('请选择要上传的文件')
          }
    })
    ```
    
    3、向FormData中追加文件
    
    ```jsx
    //创建FormData对象
    var fd=new FormData()
    //向FormData对象中追加文件
    fd.append('avatar',files[0])
    ```
    
    4、使用xhr发起上传文件的请求
    
    ```jsx
    //创建xhr对象
    var xhr = new XMLHttpRequest()
    //调用open函数
    xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar')
    //发送请求
    xhr.send(fd)
    ```
    
    5、监听onreadystatechange事件
    
    ```jsx
    xhr.onreadystatechange = function () {
        if (xhr.rea === 4 && xhr.status === 200) {
               if (data.status === 200) {
                   //如果上传文件成功
                   //服务器返回图片地址，设置为<img>标签的src属性
                    document.querySelector('#img').src = 'http://www.liulongbin.top:3006' + data.url
                } else {
                    //上传文件失败
                     console.log(data.message);
                }
          }
    }
    ```
    
    6、显示文件上传进度
    
    可以通过`xhr.upload.onprogress`事件，来获取文件的上传进度
    
    ```jsx
    xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
            var procent = Math.ceil((e.loaded / e.total) * 100)
            console.log(procent);
         }
    }
    ```
    

### JQuery的高级用法

- 文件上传
    
    ```jsx
    $('#btnUpload').on('click', function () {
       var files = $('#file1')[0].files
       if (files.length <= 0) {
             return alert('请选择图片后再上传')
        }
        var fd = new FormData()
        fd.append('avatar', files[0])
        //发起jquery的ajax请求
        $.ajax({
              menthod: 'POST',
              url: 'http://www.liulongbin.top:3006/api/upload/avatar',
              data: fd,
              processData: false,
              contentType: false,
              success: function (res) {
                     console.log(res);
              }
         })
     })
    ```
    
- 实现loading效果
    
    ajaxStart函数监听文档中所有的ajax请求
    
    ```jsx
    $(document).ajaxStart(function () {
         //监听到ajax请求被发起了
         $('#loading'.show())
    })
    ```
    
    ajaxStop监听到ajax完成事件
    
    ```jsx
    //监听到ajax完成事件
    $(document).ajaxStop(function () {
        $('#loading').hide
    })
    ```
    

### axios

axios是专注于**网络数据请求**的库

相比于jquery，axios更加轻量化，只专注于网络数据请求

- 发起get请求
    
    ```jsx
    axios.get('url',{params:{ 参数  }}).then(callback)
    
    //具体请求示例
    var url='http://www.liulongbin.top:3006/api/get'
    //请求的具体参数对象
    var paramsObj={name:'za',age:20}
    //调用axios.get()发起get请求
    axios.get(url,{params:paramsObj}).then(function(res){
    		//res.data是服务器返回的数据
    		var result=res.data
    		console.log(res)
    })
    ```
    
- 发起post请求
    
    ```jsx
    axios.post('url',{params:{ 参数  }}).then(callback)
    
    //具体的请求示例如下
    var url='http://www.liulongbin.top:3006/api/p0st'
    //请求的具体参数对象
    var dataObj={name:'za',age:20}
    //调用axios.post()发起get请求
    axios.post(url,dataObj).then(function(res){
    		//res.data是服务器返回的数据
    		var result=res.data
    		console.log(res)
    })
    ```
    

## 跨域和JSONP

### 同源策略

如果两个页面的协议、域名和端口都相同，则两个页面具有相同的源(默认端口都是80)

同源策略是浏览器提供的一个安全功能

### 跨域

同源指的是两个URL的协议、域名、端口一致，反之则是跨域

出现跨域的根本原因：浏览器的同源策略不允许非同源的URL之间进行资源交互

浏览器允许发起跨域请求，但是跨域请求回来的数据会被浏览器的同源策略拦截，无法被页面获取到

实现跨域数据的请求，最主要的两种解决方案分别是：JSONP和CORS

- JSONP是出现的早，兼容性好。缺点是只支持GET请求，不支持POST请求
- CORS出现的较晚，属于跨域Ajax请求的根本解决方案。支持GET和POST请求，缺点是不兼容某些低版本的浏览器

### JSONP

实现原理：通过`<script>`标签的src属性，请求跨域的数据接口，并通过函数调用的形式，接收跨域接口响应回来的数据

jquery中的JSONP

```jsx
$.ajax({
	url:'xxxx/jsonp?name=zs&age=20',
	dataType:'jsonp',
	success:function(res){
		console.log('   ')
	}
})
```

### 输入框防抖

防抖策略是当事件被触发后，延迟n秒后再执行回调，如果在n秒内事件又被触发，则重新计时

防抖的应用场景：用户在输入框中连续输入一串字符时，可以通过防抖策略，只在输入完成后，才执行查询请求，这样可以有效减少请求次数，节约请求资源。

```jsx
var timer=null
function debounceSearch(keywords){
	timer=setTimeout(function(){
		getSuggestList(keywords)
    }, 500)
	})
}
$('.ipt').on('keyup',function(){
	clearTimeout(timer)
	......
	debounceSearch(keywords)
})
```

缓存建议列表：

1、定义全局缓存对象

2、在渲染ui结构时，将用户输入的内容作为键，将数据作为值进行缓存

### 节流

节流策略可以减少一段时间内事件的触发频率

节流的应用场景：

①鼠标连续不断地触发某事件，只在单位时间内触发一次

②懒加载时要监听计算滚动条的位置，但不必每次滑动都触发，可以降低计算的频率，而不必去浪费CPU资源

节流阀操作：

1、定义一个timer节流阀  `var timer=null`

2、当设置了跟随效果后，清空timer节流阀，方便下次开启延时

```jsx
timer = setTimeout(function () {
    $(angel).css('left', e.pageX + 'px').css('top', e.pageY + 'px')
    timer = null
}, 16)
```

3、判断节流阀是否为空，如果不为空，则证明距离上次执行间隔不足16ms

```jsx
if(timer){return }
```

防抖和节流的区别：

防抖：如果事件被频繁触发，防抖只能保证只有最后一次生效

节流：如果事件被频繁触发，节流能够减少事件触发的频率

## HTTP加强

### HTTP协议

通信是信息的传递和交换

通信的三要素：通信的主体、内容、方式

通信协议：通信的双方完成通信所必须遵守的规则和约定

网页内容又叫做超文本，因此网页内容的传输协议又叫做超文本传输协议(HyperText Transfer Protocol, HTTP协议)

HTTP采用了**请求/响应**的交互模型

客户端发起的请求叫做HTTP请求，客户端发送到服务器的消息叫做HTTP请求消息，请求消息又叫做HTTP报文

HTTP请求消息由请求行(request line)、请求头部(header)、空行和请求体4各部分组成

请求行：请求方式、URL、HTTP协议版本，他们之间使用空格隔开 

请求头部：用来描述客户端的基本信息，从而把客户端相关的信息告知服务器，由多行键/值对组成，每行的键和值之间用英文的冒号分割

空行：最后一个请求头字段的后面是空行，通知服务器请求头部至此结束

请求体：请求体中存放的，是要通过POST方式提交到服务器的数据

只有POST请求才有请求体，GET请求没有请求体

### HTTP响应消息

HTTP响应消息由状态行、响应头部、空行和响应体4个部分组成

状态行：HTTP协议版本、状态码和状态码的描述文本3个部分组成，他们之间使用空格隔开

响应头部：用来描述服务器的基本信息。响应头部是由多行键/值对组成，每行的键和值之间用英文的冒号分隔

空行：在最后一个响应头部字段结束之后，会紧跟一个空行，用来通知客户端响应头部至此结束，用来分隔响应头和响应体

响应体：是服务器响应给客户端的资源内容

### HTTP请求方法

HTTP请求方法是HTTP协议中的一部分，请求方法的作用：用来表明要对服务器上的资源执行的操作。最常用的请求方法是GET和POST

| GET | 查询，发送请求来获得服务器上的资源，请求体中不会包括请求数据 |
| --- | --- |
| POST | 新增，向服务器提交资源 |
| PUT | 修改，向服务器提交资源，并使用提交的新资源替换旧资源 |
| DELETE | 删除，请求服务器删除指定的资源 |

### HTTP响应状态码

也属于HTTP协议的一部分，用来标识响应的状态

HTTP状态码由三个十进制数字组成，第一个十进制数字定义了状态码的类型，后面两个数字用来对状态码进行细分

| 1** | 信息，服务器收到请求 |
| --- | --- |
| 2** | 成功，操作被成功接收并处理 |
| 3** | 重定向，需要进一步的操作以完成请求 |
| 4** | 客户端错误，请求包含语法错误或无法完成请求 |
| 5** | 服务器错误，服务器在处理请求的过程中发生了错误 |

2**相关的响应状态码

| 状态码 | 状态码英文名称 | 中文描述 |
| --- | --- | --- |
| 200 | ok | 请求成功。一般用于GET和POST请求 |
| 201 | created | 已创建。成功请求并创建了新的资源 |

3**重定向相关的响应状态码

| 301 | moved permanently | 永久移动 |
| --- | --- | --- |
| 302 | found | 临时移动 |
| 304 | not modified | 未修改 |

4**客户端错误相关的响应状态码

| 400 | Bad request | 1、语义有误，当前请求无法被服务器理解；2、请求参数有误 |
| --- | --- | --- |
| 401 | unauthorized | 当前需要用户验证 |
| 403 | forbidden | 服务器已经理解请求，但是拒绝执行它 |
| 404 | not found | 服务器无法根据客户端的请求找到资源 |
| 408 | request timeout | 请求超时 |
