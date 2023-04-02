---
title: 实现继承的几种方式
date: 2022-06-05
---

![Untitled](../../.vuepress/public/071501/JS_2.png)

构造函数继承  原型链继承  组合继承  class继承 实例继承  拷贝继承  寄生组合继承

首先构建一个父类的代码：

```jsx
function Animal (name) {
  this.name = name || 'Animal';
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
Animal.prototype.eat = function(food) {  // 原型方法
  console.log(this.name + '正在吃：' + food);
};
```

**instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性**

prototype原型对象

## **构造函数继承**

核心：使用父类的构造函数来增强子类实例(相当于复制父类的实例给子类)

```jsx
function Cat(){
  Animal.call(this);
  this.name ='Tom';
}
var cat = new Cat();
console.log(cat,new Animal());
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true
```

![Untitled](../../.vuepress/public/071501/JS_3.png)

在Cat中，将Animal内的this指向改为Cat的实例对象，所以输出namde为Tom，并调用了父类的方法。

但是在父类的原型链中添加了属性和方法时，子集并没有继承。

![Untitled](../../.vuepress/public/071501/JS_4.png)

构造函数继承的优点：

1. 创建了子类实例共享父类引用属性的问题

2. 创建子类实例时，可以向父类传递参数(通过改变this)

3. 可以实现多继承(通过call多个父类对象)

构造函数继承的缺点：

1. 实例并不是父类的实例，只是子类的实例

2. 只能继承父类在构造函数中获得属性和方法，不能继承父级原型链上的属性和方法

3. 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

## **原型链继承**

核心：将父类的实例作为子类的原型

```jsx
Animal.prototype.body = ['head','arm'];
   function Cat() {
      this.name = 'Tom';
    }
    Animal.prototype.eat = function () {
      console.log('i can eat')
    }
		//在原型链上继承
    Cat.prototype = new Animal();
    var cat = new Cat();
    console.log(cat ,new Animal());
    console.log(cat instanceof Animal); //true 
    console.log(cat instanceof Cat); //true
    var cat1 = new Cat();
    var cat2 = new Cat();
    cat1.body.push('foot')
    console.log(cat1,cat2);
```

![Untitled](../../.vuepress/public/071501/JS_5.png)

new了两个cat对象，cat1和cat2，只改变了cat1对象的属性，但是cat2对象的属性也跟着发生了改变

![Untitled](../../.vuepress/public/071501/JS_6.png)

原型链继承的优点：

1. 非常纯粹的继承关系，实例是子类的实例也是父类的实例

2. 父类新增的原型方法子类也可以访问的到

3. 简单，易于实现

原型链继承的缺点：

1. 可以在cat构造函数中，为cat实例增加实例属性。但是新增原型属性和方法必须放到new Animal()之后执行

2. 无法实现多继承

3. 来自原型对象的所有属性被所有实例共享

4. 创建子类实例时，无法向父类构造函数传参

##  **组合继承**

核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过父类实例作为子类原型，实现函数复用

```jsx
//父类
    function Animal (name) {
        this.name = name || 'Animal';
        this.body=body = ['head','arm'];
        this.sleep = function(){
        console.log(this.name + '正在睡觉！');
        }
    }
    Animal.prototype.eat = function(food) {  // 原型方法
        console.log(this.name + '正在吃：' + food);
    };

    //子类
    function Cat() {
      Animal.call(this);
      this.name = 'Tom';
    }
    
    Cat.prototype=new Animal();
    //手动挂上构造器，指向自己的构造器
    Cat.prototype.constructor = Cat;
    var cat1 = new Cat();
    var cat2 = new Cat();
    cat1.body.push('foot')
    console.log(cat1,cat2)
```

![Untitled](../../.vuepress/public/071501/JS_7.png)

组合继承的优点：

1. 弥补方式2的缺点，可以继承实例的属性和方法，也可以继承原型的属性和方法

2. 既是子类的实例，也是父类的实例

3. 不存在引用属性共享问题

4. 可传参

5. 函数可复用

组合继承的缺点：

1. 调用了两次父类构造函数，生成两份实例

##  **class继承**

核心：class是ES6新增的语法，直接class创建一个类，用extends来继承

```jsx
class  Animal{
    constructor() {
       this.name = 'Tom';
    }
    play() {
          console.log('animal')
    }
  }
 
class Cat extends Animal{
    constructor(type) {
      super(type);
      this.type ='cat'
    }
}
var cat = new Cat();
console.log(cat);
```

![Untitled](../../.vuepress/public/071501/JS_8.png)

最快捷的继承方式，但是仅支持ES6以上版本，所以需要考虑到兼容性问题

## **实例继承**

核心：为父类实例添加新特性，作为子类实例返回

```jsx
//父类
function Animal (name) {
  this.name = name || 'Animal';
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
Animal.prototype.eat = function(food) {  // 原型方法
  console.log(this.name + '正在吃：' + food);
};

//子类
function Cat(){
  var instance = new Animal();
  instance.name =  'Tom';
  return instance;
}
var cat = new Cat();
console.log(cat );
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // false
```

![Untitled](../../.vuepress/public/071501/JS_9.png)

实例继承的优点：

1. 不限制调用方式，不管是new 子类或者子类(  )，返回的对象具有相同的效果

实例继承的缺点：

2. 实例是父类的实例，不是子类的实例

3. 不支持多继承