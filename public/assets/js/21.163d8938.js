(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{515:function(t,v,e){t.exports=e.p+"assets/img/vp1.aa8e8270.png"},516:function(t,v,e){t.exports=e.p+"assets/img/vp2.4bf6c874.png"},517:function(t,v,e){t.exports=e.p+"assets/img/vp3.49d6fc41.png"},604:function(t,v,e){"use strict";e.r(v);var s=e(2),_=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"mvc模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvc模式"}},[t._v("#")]),t._v(" ** MVC模式**")]),t._v(" "),v("p",[t._v("MVC模式是单向绑定，即model绑定到view，当js代码更新model时，view会自动更新")]),t._v(" "),v("p",[v("img",{attrs:{src:e(515),alt:"Untitled"}})]),t._v(" "),v("h2",{attrs:{id:"mvvm模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvvm模式"}},[t._v("#")]),t._v(" ** MVVM模式**")]),t._v(" "),v("p",[t._v("Model-View-ViewModel模式")]),t._v(" "),v("p",[t._v("Model：当前页面渲染时所有依赖的数据源")]),t._v(" "),v("p",[t._v("View：当前页面所渲染的DOM结构")]),t._v(" "),v("p",[t._v("ViewModel：vue实例，是MVVW的核心")]),t._v(" "),v("p",[v("img",{attrs:{src:e(516),alt:"Untitled"}})]),t._v(" "),v("p",[t._v("用户更新了View,Model的数据页自动被更新了，这种情况就是双向绑定")]),t._v(" "),v("p",[t._v("通过数据来显示视图层而不是节点操作，主要解决了"),v("strong",[t._v("MVC中大量的dom操作")]),t._v("使页面渲染性能降低，加载速度变慢，影响用户体验等问题")]),t._v(" "),v("h2",{attrs:{id:"双向绑定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#双向绑定"}},[t._v("#")]),t._v(" ** 双向绑定**")]),t._v(" "),v("p",[t._v("vue数据双向绑定是通过"),v("strong",[t._v("数据劫持结合发布者-订阅者的方式来实现的")])]),t._v(" "),v("p",[v("img",{attrs:{src:e(517),alt:"Untitled"}})]),t._v(" "),v("ol",[v("li",[v("p",[t._v("要对数据进行劫持监听，所以我们需要设置一个"),v("strong",[t._v("监听器Observer")]),t._v("，用来监听所有属性")])]),t._v(" "),v("li",[v("p",[t._v("如果属性发上变化了，就需要告诉"),v("strong",[t._v("订阅者Watcher")]),t._v("看是否需要更新")])]),t._v(" "),v("li",[v("p",[t._v("因为订阅者是有很多个，所以我们需要有一个"),v("strong",[t._v("消息订阅器Dep")]),t._v("来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的")])]),t._v(" "),v("li",[v("p",[t._v("需要有一个"),v("strong",[t._v("指令解析器Compile")]),t._v("，对每个节点元素进行扫描和解析，将相关指令对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数")])]),t._v(" "),v("li",[v("p",[t._v("当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。")])])]),t._v(" "),v("p",[t._v("vue双向绑定的核心是"),v("code",[t._v("Obeject.defineProperty()")]),t._v("方法")])])}),[],!1,null,null,null);v.default=_.exports}}]);