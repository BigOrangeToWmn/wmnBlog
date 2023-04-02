---
title: 声明式导航&&编程式导航
date: 2022-08-07
---
 
**声明式导航：**在浏览器中，**点击链接实现导航的方式**，叫做声明式导航。如普通网页中的`<a>`链接，vue中点击`<router-link>`都属于声明式导航

**编程式导航：**在浏览器中，**调用API方法实现导航的方式**为编程式导航

vue-router中的编程式导航

1. `this.$router.push(’hash地址’)`：跳转到指定hash地址，并增加一条历史记录

```jsx
// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })
```

2. `this.$router.replace(’hash地址’)：`跳转到指定的hash地址，并替换掉当前的历史记录

```jsx
router.push({ path: '/home', replace: true })
// 相当于
router.replace({ path: '/home' })
```

3. `this.$router.go(数值n)：` 在浏览历史前进或后退。简化用法：`$router.back()`  在历史记录中后退到上一个页面，`$router.forwaerd()` 在历史记录中，前进到下一个页面

```jsx
// 向前移动一条记录，与 router.forward() 相同
router.go(1)

// 返回一条记录，与 router.back() 相同
router.go(-1)

// 前进 3 条记录
router.go(3)

// 如果没有那么多记录，静默失败
router.go(-100)
router.go(100)
```