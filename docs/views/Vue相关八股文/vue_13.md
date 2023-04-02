---
title: 使用框架和原生jQuery对比
date: 2022-08-07
---

jQuery实现todolist过程，通过点击事件，初始化一个新的li标签，append添加进去。

```html
<!DOCTYPE html>
<html lang="en">
<head>
　　<meta charset="UTF-8">
　　<meta name="viewport" content="width=device-width, initial-scale=1.0">
　　<meta http-equiv="X-UA-Compatible" content="ie=edge">
　　<title>Document</title>
</head>
<body>
　　<div>
　　　　<input type="text" name="" id="txt-title"/>
　　　　<button id="btn-submit">submit</button>
　　</div>
　　<div>
　　　　<ul id="ul-list"></ul>
　　</div>

　　<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
　　<script>
　　　　var $txtTitle = $('#txt-title');
　　　　var $ulList = $('#ul-list');
　　　　var $btnSubmit = $('#btn-submit');

　　　　$btnSubmit.click(function(){
　　　　　　var title = $txtTitle.val();
　　　　　　var $li = $('<li>'+ title +'</li>')
　　　　　　$ulList.append($li);
　　　　　　$txtTitle.val('');
　　　　})
　　</script>
</body>
</html>
```

使用vue实现todolist的过程，不管里面是变量还是函数都跟vue对象里面有对应关系。在点击的时候只需要操作里面的数据就可以了。

```html
<!DOCTYPE html>
<html lang="en">
<head>
　　<meta charset="UTF-8">
　　<meta name="viewport" content="width=device-width, initial-scale=1.0">
　　<meta http-equiv="X-UA-Compatible" content="ie=edge">
　　<title>Document</title>
</head>
<body>
　　<div id="app">
　　　　<input v-model='title'/>
　　　　<button v-on:click='add'>submit</button>
　　　　<ul v-for='item in list'>
　　　　　　{{item}}
　　　　</ul>
　　</div>

　　<script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>
　　<script>
　　　　var data = {
　　　　　　title: '',
　　　　　　list: []
　　　　}
　　　　var vm = new Vue({
　　　　　　el: '#app',
　　　　　　data: data,
　　　　　　methods: {
　　　　　　　　add: function(){
　　　　　　　　　　this.list.push(this.title);
　　　　　　　　　　this.title = ''
　　　　　　　　}
　　　　　　}
　　　　})
　　</script>
</body>
</html>
```

两者的区别：

1. **数据和视图的分离**

视图就是DOM

jQuery的视图在html里面，也有在js里面，视图和数据混在一起，所以数据和视图并没有分离。jQuery是干预了视图修改

vue中找数据和DOM是非常方便的，数据在哪里，DOM就在哪里。数据和视图是分离的，数据就是data。

2. **以数据驱动视图**

jQuery中以数据驱动视图是完全没有的。以数据驱动视图是通过数据修改，由框架自动的把视图修改，不需要考虑dom元素。

vue中以数据驱动视图更加明显，只需要关心数据的变化。

数据和视图的分离主要是解耦(开放封闭原则)