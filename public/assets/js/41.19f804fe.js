(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{520:function(t,s,a){t.exports=a.p+"assets/img/vp11.4c3bfd69.png"},615:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("vue-router提供导航守卫主要是用来通过跳转或取消的方式守卫导航。植入路由导航的方式：全局，单个路由独享，或者组件级的。")]),t._v(" "),s("h2",{attrs:{id:"全局前置守卫"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局前置守卫"}},[t._v("#")]),t._v(" "),s("strong",[t._v("全局前置守卫")])]),t._v(" "),s("p",[t._v("通过router.beforeEach注册")]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 false 以取消导航")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("每个守卫方法接收两个参数：")]),t._v(" "),s("ul",[s("li",[t._v("to：即将要进入的目标(将要访问的路由的信息对象)")]),t._v(" "),s("li",[t._v("from：当前导航正要离开的理由(将要离开的路由的信息对象)")])]),t._v(" "),s("p",[t._v("可以返回的值：")]),t._v(" "),s("ul",[s("li",[t._v("false：取消当前的导航")]),t._v(" "),s("li",[t._v("一个路由地址：像调用router.push( )一样")])]),t._v(" "),s("p",[t._v("可选择的第三个参数：")]),t._v(" "),s("ul",[s("li",[t._v("next：是一个函数，调用next( )函数表示允许这次路由导航")]),t._v(" "),s("li",[t._v("next函数的三种调用方法：①当用户拥有访问权限的时候直接next放行②当用户没有访问权限的时候，强制调转到其他页面next(’将要强制跳转的页面’)③当用户没有访问权限的时候不允许跳转制定页面，并停留在当前页面next(false)")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(520),alt:"Untitled"}})]),t._v(" "),s("h2",{attrs:{id:"全局解析守卫-beforeenter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局解析守卫-beforeenter"}},[t._v("#")]),t._v(" "),s("strong",[t._v("全局解析守卫(beforeEnter)")])]),t._v(" "),s("p",[t._v("作用：全局解析守卫在所有组件内守卫和异步路由组件被解析之后触发（用的很少）")]),t._v(" "),s("h2",{attrs:{id:"全局后置钩子-aftereach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局后置钩子-aftereach"}},[t._v("#")]),t._v(" "),s("strong",[t._v("全局后置钩子(afterEach)")])]),t._v(" "),s("p",[t._v("作用：路由跳转之后触发")]),t._v(" "),s("p",[t._v("场景：可以让路由跳转之后让对应页面的网页标题改变")]),t._v(" "),s("p",[s("strong",[t._v("补充：动态路由")])]),t._v(" "),s("p",[t._v("使用场景：当很多个页面或组件需要被重复利用，路由都指向同一个组件，此时需要从不同组件进入到一个共用组件，并且还需要传参数，渲染不同的数据，这时就用到动态路由传参。")]),t._v(" "),s("p",[t._v("动态路由主要通过两个函数来实现："),s("code",[t._v("router.addRoute( )")]),t._v("和"),s("code",[t._v("router.removeRoute( )")])]),t._v(" "),s("p",[t._v("动态路径参数使用冒号进行标识")])])}),[],!1,null,null,null);s.default=n.exports}}]);