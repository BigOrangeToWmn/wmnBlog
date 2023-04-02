---
title: Call bind apply的区别
date: 2022-06-05
---

call()、apply()、bind()方法三者的作用都是改变this指向

##  call()方法

call()方法接受的语法和作用与apply()类似，区别是call()接受的是**一个**参数列表，而apply()方法接受的是一个包含**多个**参数的数组

call的用法

```jsx
fn.call(thisArg, arg1, arg2, arg3, ...)
```

调用fn.call时会将fn中的**this指向修改为传入的第一个参数thisArg**；将后面的参数传入给fn，并立即执行函数fn

```jsx
let obj={
    name:'xiaoming',
    age:19,
    sayHello:function(job,hobby){
      console.log(`我叫${this.name},我今年${this.age}岁了,我的工作是${job},我的爱好是${hobby}`);
    }
  }

  let obj2={
    name:'zhangsan',
    age:20
  }
  obj.sayHello('设计师','画画')
  //输出：我叫xiaoming,我今年19岁了,我的工作是设计师,我的爱好是画画
  //调用call()改变this指向
  obj.sayHello.call(obj2,'程序员','打球')
  //输出：我叫zhangsan,我今年20岁了,我的工作是程序员,我的爱好是打球
```

## apply()方法

apply()和call()方法相同，区别在于传参形式不同，apply接受两个参数，第一个参数是要指向的this对象，第二个参数是一个数组

apply()的用法

```jsx
apply(thisArg, [argsArr])
```

```jsx
let obj={
    name:'xiaoming',
    age:19,
    sayHello:function(job,hobby){
      console.log(`我叫${this.name},我今年${this.age}岁了,我的工作是${job},我的爱好是${hobby}`);
    }
  }

  let obj2={
    name:'zhangsan',
    age:20
  }
  obj.sayHello('设计师','画画')
  //输出：我叫xiaoming,我今年19岁了,我的工作是设计师,我的爱好是画画
  //调用apply()改变this指向
  obj.sayHello.apply(obj2,['程序员','打球'])
  //输出：我叫zhangsan,我今年20岁了,我的工作是程序员,我的爱好是打球
```

##  bind()方法

```jsx
bind(thisArg, arg1, arg2, arg3, ...)
```

fn.bind的作用是只修改this指向，但不会立即执行fn；会返回一个修改了this指向后的fn。需要调用才会执行:`bind(thisArg, arg1, arg2, arg3, ...)()`。bind的传参和call相同。

```jsx
let obj={
    name:'xiaoming',
    age:19,
    sayHello:function(job,hobby){
      console.log(`我叫${this.name},我今年${this.age}岁了,我的工作是${job},我的爱好是${hobby}`);
    }
  }

  let obj2={
    name:'zhangsan',
    age:20
  }
  //调用bind()改变this指向
  obj.sayHello.bind(obj2,'程序员','打球')()
  //输出：我叫zhangsan,我今年20岁了,我的工作是程序员,我的爱好是打球
  obj.sayHello.bind(obj2,'程序员','打球')
  //无输出结果
```

##  总结bind、call、apply的区别

①相同点：三个都用于改变this的指向；接收的第一个参数都是this要指向的对象；都可以利用后续参数传参

②不同点：call和bind参数相同，多个参数依次传入；apply只有两个参数，第二个参数为数组；call和apply都是对函数进行直接调用，而bind()方法不会立即调用函数，而是返回一个**修改this后的函数**