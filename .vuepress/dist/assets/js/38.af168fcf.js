(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{366:function(t,s,n){t.exports=n.p+"assets/img/vp4.4c2c3348.png"},461:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ol",[s("li",[t._v("父传子：父组件V-bind动态绑定一个自定义属性，子组件通过props接收自定义属性")]),t._v(" "),s("li",[t._v("子传父：子组件利用$emit给父组件传值，父组件通过绑定自定义事件接收值")])]),t._v(" "),s("p",[s("img",{attrs:{src:n(366),alt:"Untitled"}})]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("eventBus事件总线($emit $on)")])]),t._v(" "),s("p",[t._v("适用于父子组件和非父子组件通信")]),t._v(" "),s("p",[t._v("①创建eventBus.js模块，并向外共享一个Vue的实例对象")]),t._v(" "),s("p",[t._v("②在数据发送方，调用bus.$emit(’事件名称’，要发送的数据)方法触发自定义事件")]),t._v(" "),s("p",[t._v("③在数据接收方，调用bus.$on(’事件名称’，事件处理函数)方法注册一个自定义事件")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("ref/$refs")])]),t._v(" "),s("p",[t._v("这种方式也是"),s("strong",[t._v("实现父子组件之间的通信")])]),t._v(" "),s("p",[t._v("ref：这个属性用在子组件上，它的用用就指向了子组件的实例，可以通过实例来访问组件的数据和方法")]),t._v(" "),s("p",[t._v("可以再创建实例阶段mounted进行访问："),s("code",[t._v("this.$refs.child.sayHello();")])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("依赖注入(provide/inject)")])]),t._v(" "),s("p",[t._v("vue中依赖注入，该方法用于父子组件之间(不一定是真正的父子，也可以是祖孙组件，"),s("strong",[t._v("适用于层数很深的情况")]),t._v(")的通信。")]),t._v(" "),s("p",[t._v("provide和injecti是vue提供的两个钩子，和data methods同级。")]),t._v(" "),s("p",[s("strong",[t._v("provide钩子用来发送数据")]),t._v("或方法。")]),t._v(" "),s("p",[s("strong",[t._v("inject钩子用来接收数据")]),t._v("或方法")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//父组件中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("provide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("     \n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("num")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num  \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//子组件中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("inject")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'num'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[t._v("使用vuex")])])])}),[],!1,null,null,null);s.default=e.exports}}]);