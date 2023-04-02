(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{585:function(o,s,e){"use strict";e.r(s);var v=e(2),_=Object(v.a)({},(function(){var o=this,s=o._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[s("h2",{attrs:{id:"cookie和session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie和session"}},[o._v("#")]),o._v(" cookie和session")]),o._v(" "),s("ul",[s("li",[o._v("保持状态")])]),o._v(" "),s("p",[o._v("cookie保存在浏览器端，session保存在服务器端")]),o._v(" "),s("ul",[s("li",[o._v("使用方式")])]),o._v(" "),s("p",[o._v("cookie机制：如果不设置过期时间，cookie保存在内存中，浏览器关闭而结束；如果设置过期时间，cookie被保存在硬盘当中，关闭浏览器任然存在，只有过期时间到了才会消失。")]),o._v(" "),s("p",[o._v("session用于保存每个用户的专用信息，变量的值被保存在服务器端，通过SessionID来区分不同的客户")]),o._v(" "),s("ul",[s("li",[o._v("存储内容")])]),o._v(" "),s("p",[o._v("cookie只能保存字符串类型，以文本方式")]),o._v(" "),s("p",[o._v("session通过类似于Hashtable的数据结构来保存，能够支持任何类型对象")]),o._v(" "),s("ul",[s("li",[o._v("存储的大小")])]),o._v(" "),s("p",[o._v("cookie：单个cookie保存的数据不超过4kb")]),o._v(" "),s("p",[o._v("session：大小没有限制")]),o._v(" "),s("ul",[s("li",[o._v("安全性")])]),o._v(" "),s("p",[o._v("cookie：针对cookie所存在的攻击（cookie欺骗，cookie截获）")]),o._v(" "),s("p",[o._v("session的安全性大于cook")]),o._v(" "),s("ul",[s("li",[o._v("应用场景")])]),o._v(" "),s("p",[o._v("cookie：①判断是否登录过网站，以便下次实现自动登录；②保存上次登陆的时间等信息；③保存上次查看了的页面；④浏览计数")]),o._v(" "),s("p",[o._v("session：①网上商城的购物车；②保存用户登录信息；③将某些数据放入session中，供同一用户的不同页面使用；④防止用户非法登录")]),o._v(" "),s("ul",[s("li",[o._v("缺点")])]),o._v(" "),s("p",[o._v("cookie：①大小受限；②用户可以禁用cookie，使功能受限；③安全性较低；④有些状态不可能保存在客户端；⑤每次访问都要传送cookie给服务器，浪费宽带")]),o._v(" "),s("p",[o._v("session：①session保存的东西越多，就越占用服务器的内存，对于用户在线人数较多的网站服务器压力较大；②依赖cookie(sessionID保存在cookie中)；③创建session变量有很大的随意性，可以随时调用，不需要开发者做精缺处理，所以过度使用session变量会导致代码不可读而且不好维护")]),o._v(" "),s("h2",{attrs:{id:"webstorage-sessionstorage、localstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webstorage-sessionstorage、localstorage"}},[o._v("#")]),o._v(" webstorage(sessionStorage、localStorage)")]),o._v(" "),s("ul",[s("li",[o._v("sessionStorage")])]),o._v(" "),s("p",[o._v("将数据保存在session对象中。session是指用户在浏览某个网站时，从进入网站到浏览器关闭所经过的这段时间，也就是用户浏览这个网站所花费的时间。session对象可以用来保存在这段时间内所要求的任何数据。")]),o._v(" "),s("ul",[s("li",[o._v("localStroage")])]),o._v(" "),s("p",[o._v("将数据保存在客户端本地的硬件设备(硬盘等)，即使关闭浏览器，该数据仍然存在，下次打开浏览器访问网站仍然可以继续使用")]),o._v(" "),s("p",[o._v("sessionStroage为临时保存，localStorage为永久保存")]),o._v(" "),s("h2",{attrs:{id:"localstorage-本地存储-和sessionstorage-会话存储-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localstorage-本地存储-和sessionstorage-会话存储-区别"}},[o._v("#")]),o._v(" localStorage（本地存储）和sessionStorage（会话存储）区别")]),o._v(" "),s("ul",[s("li",[o._v("生命周期")])]),o._v(" "),s("p",[o._v("localStroage的生命周期是永久的")]),o._v(" "),s("p",[o._v("sessionStorage的生命周期仅在当前会话下有效")]),o._v(" "),s("ul",[s("li",[o._v("存储大小")])]),o._v(" "),s("p",[o._v("localStroage和sessionStorage的小小一般都是5MB")]),o._v(" "),s("ul",[s("li",[o._v("存储位置")])]),o._v(" "),s("p",[o._v("localStroage和sessionStorage都保存在客户端，不与服务器进行交互通信")]),o._v(" "),s("ul",[s("li",[o._v("存储内容类型")])]),o._v(" "),s("p",[o._v("localStroage和sessionStorage智能存储字符串类型")]),o._v(" "),s("ul",[s("li",[o._v("获取方式")])]),o._v(" "),s("p",[s("code",[o._v("localStroage：window.localStroage")])]),o._v(" "),s("p",[s("code",[o._v("sessionStorage:window.sessionStorage")])]),o._v(" "),s("ul",[s("li",[o._v("应用场景")])]),o._v(" "),s("p",[o._v("localStroage：长期登录，长期保存本地数据")]),o._v(" "),s("p",[o._v("sessionStorage：敏感数据的一次性登录")])])}),[],!1,null,null,null);s.default=_.exports}}]);