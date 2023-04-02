(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{339:function(e,s,r){e.exports=r.p+"assets/img/JS_1.d7d7aebf.jpeg"},424:function(e,s,r){"use strict";r.r(s);var t=r(14),v=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Promise是一种为了避免地狱回调的异步解决方案")]),e._v(" "),s("p",[e._v("Promise是一种状态机：Pending（进行中）、fulfilled（已成功）、rejected（已失败）只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态")]),e._v(" "),s("blockquote",[s("p",[e._v("回调地狱：回调函数中嵌套回调函数的情况；回调地狱就是为实现代码顺序执行而出现的一种操作，造成代码可读性差，后期不好维护")])]),e._v(" "),s("h2",{attrs:{id:"promise是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise是什么"}},[e._v("#")]),e._v(" Promise是什么")]),e._v(" "),s("p",[e._v("Promise最早由社区提出和实现的一种解决异步编程的方案，比其他传统的解决方案(回调函数和事件)更合理和强大")]),e._v(" "),s("p",[e._v("ES6将其写进标准语言，提供原生Promise对象，"),s("strong",[e._v("ES6规定Promise对象是一个构造函数")]),e._v("，用来生成Promise实例")]),e._v(" "),s("h2",{attrs:{id:"promise是为解决什么问题而产生的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise是为解决什么问题而产生的"}},[e._v("#")]),e._v(" Promise是为解决什么问题而产生的*")]),e._v(" "),s("p",[e._v("为了解决异步处理回调地狱问题而产生的")]),e._v(" "),s("h2",{attrs:{id:"promise的两个特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise的两个特点"}},[e._v("#")]),e._v(" Promise的两个特点")]),e._v(" "),s("p",[e._v("①Promise对象的状态不受外界影响")]),e._v(" "),s("p",[e._v("pending  初始状态")]),e._v(" "),s("p",[e._v("fulfilled  成功状态")]),e._v(" "),s("p",[e._v("rejected  失败状态")]),e._v(" "),s("p",[e._v("以上三种状态只有"),s("strong",[e._v("异步操作的结果可以决定当前状态")]),e._v("，其他操作都无法改变当前状态")]),e._v(" "),s("p",[e._v("②Promise状态一旦改变，就不会再改变，"),s("strong",[e._v("状态不可逆")]),e._v("（底层promise构造函数中会判断当前是否是pending进行中状态，不是就会终止代码），并且只能由pengding——fulfilled或者pending——rejected")]),e._v(" "),s("p",[s("img",{attrs:{src:r(339),alt:"Untitled"}})]),e._v(" "),s("h2",{attrs:{id:"promise的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise的缺点"}},[e._v("#")]),e._v(" Promise的缺点")]),e._v(" "),s("p",[e._v("①无法取消Promise，一旦建立就会立即执行，无法中途取消")]),e._v(" "),s("p",[e._v("②如果不设置回调函数，Promise内部抛出的错误，不会反映到外部")]),e._v(" "),s("p",[e._v("③当处于pending状态时，无法得知目前进展到哪一个阶段，是刚开始还是即将完成")]),e._v(" "),s("h2",{attrs:{id:"promise在哪里存放成功回调序列和失败回调序列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise在哪里存放成功回调序列和失败回调序列"}},[e._v("#")]),e._v(" Promise在哪里存放成功回调序列和失败回调序列")]),e._v(" "),s("p",[e._v("①onResolveedCallbacks 成功后要执行的回调序列 是一个数组")]),e._v(" "),s("p",[e._v("②onRejectedCallbacks 失败后要执行的回调序列 是一个数组")]),e._v(" "),s("p",[e._v("以上数组存放在Promise创建实例时给Promise这个类传的函数中，默认为空")]),e._v(" "),s("p",[e._v("①每次实例.then()的时候，传入onFulfilled(成功回调)或者onRejected(失败回调)；")]),e._v(" "),s("p",[e._v("②但是如果此时的状态是pending，则将onFulfilled或者onRejected   push到相应的成功回调序列数组和失败回调序列数组中；")]),e._v(" "),s("p",[e._v("③如果此时状态是fulfilled，则onFulfilled立即执行")]),e._v(" "),s("p",[e._v("④如果此时状态是rejectd，则onRjected立即执行")])])}),[],!1,null,null,null);s.default=v.exports}}]);