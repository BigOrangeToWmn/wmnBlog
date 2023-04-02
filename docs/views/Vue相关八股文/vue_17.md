---
title: 获取Vue组件实例
date: 2022-08-07
---

## vue实例对象

在vue项目中每个vue都是通过**vue构造器创建新的vue实例**开始的，通过new关键字的方式创建vm实例对象

```jsx
var vm=new Vue({
	//
})
```

其中配置的内容及其含义：

data：vue实例数据对象（具有响应特性）

methods：定义vue实例中的方法

components：定义子组件

filters：过滤器

el：唯一根元素（vue对象只允许唯一的一个根标签）

watch：监听数据变化

1. vue实例对象获取子组件实例对象的方式：`$children`
2. refs获取组件或元素实例

vm.$refs是一个对象，持有已注册过ref的所有子组件

```jsx
//添加ref属性
<div id="app">
  <h1 ref="h1Ele">这是H1</h1>
  <hello ref="ho"></hello>

  <button @click="getref">获取H1元素</button>
 </div>

//获取注册过ref的所有组件或元素
methods: {
    getref() {
     // 表示从 $refs对象 中, 获取 ref 属性值为: h1ele DOM元素或组件
      console.log(this.$refs.h1Ele.innerText);
      this.$refs.h1ele.style.color = 'red';// 修改html样式

     console.log(this.$refs.ho.msg);// 获取组件数据
     console.log(this.$refs.ho.test);// 获取组件的方法
    }
   }
```