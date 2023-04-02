---
title: v-model的原理
date: 2022-07-05
---

v-model本质是个语法糖，等层是基于[:value]和[@input]的封装

v-bind绑定value属性

v-on指令给当前元素绑定input事件

```jsx
<input type="text" v-model="msg">
<input type="text" :value="msg" @input="msg = $event.target.value">
```

> (在编程中可以更容易的表达一个操作的语法，ES6中的语法糖有箭头函数，对象字面量，对象解构赋值和数组解构赋值)
>