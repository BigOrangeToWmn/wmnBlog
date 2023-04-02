---
title: Vue组件之间数据通信
date: 2022-07-05
---

1. 父传子：父组件V-bind动态绑定一个自定义属性，子组件通过props接收自定义属性
2. 子传父：子组件利用$emit给父组件传值，父组件通过绑定自定义事件接收值

![Untitled](../../.vuepress/public/071501/vp4.png)

3. eventBus事件总线($emit $on)

适用于父子组件和非父子组件通信

①创建eventBus.js模块，并向外共享一个Vue的实例对象

②在数据发送方，调用bus.$emit(’事件名称’，要发送的数据)方法触发自定义事件

③在数据接收方，调用bus.$on(’事件名称’，事件处理函数)方法注册一个自定义事件

4. ref/$refs

这种方式也是**实现父子组件之间的通信**

ref：这个属性用在子组件上，它的用用就指向了子组件的实例，可以通过实例来访问组件的数据和方法

可以再创建实例阶段mounted进行访问：`this.$refs.child.sayHello();` 

5. 依赖注入(provide/inject)

vue中依赖注入，该方法用于父子组件之间(不一定是真正的父子，也可以是祖孙组件，**适用于层数很深的情况**)的通信。

provide和injecti是vue提供的两个钩子，和data methods同级。

**provide钩子用来发送数据**或方法。

**inject钩子用来接收数据**或方法

```jsx
//父组件中
provide() { 
    return {     
        num: this.num  
    };
}

//子组件中
inject: ['num']
```

6. 使用vuex