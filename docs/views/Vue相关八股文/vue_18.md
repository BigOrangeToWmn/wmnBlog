---
title: Vue组件的持久化缓存
date: 2022-08-07
---

vue实现缓存的4中方式

### 利用locaalStorage

```jsx
window.localStorage.setItem(key,value)
window.localStorage.getItem(key)
```

### 利用sessionStorage

```jsx
window.sessionStorage.setItem(key,value)
window.sessionStorage.getItem(key)
```

### 安装并应用storage.js插件

```jsx
import storage from 'store'
store.set('user',{name:'Marcus'})

store.get('user')

store.remove('user')

store.clearAll()

store.each(function(value,key){
	console.log(key,'==',value)
})
```

### vuex(适用于构建较为复杂的vue单页面应用)