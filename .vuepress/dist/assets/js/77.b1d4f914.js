(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{437:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("好处：减少HTTP请求，加快网页响应速度，减少服务器压力，增加用户浏览体验")]),t._v(" "),s("p",[t._v("原理：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("监控滚动条滚动")])]),t._v(" "),s("li",[s("p",[t._v("获取总可视内容高度(可见视口高度+滚动条滚动高度)")])]),t._v(" "),s("li",[s("p",[t._v("获取所有图片")])]),t._v(" "),s("li",[s("p",[t._v("遍历步骤三")])]),t._v(" "),s("li",[s("p",[t._v("在步骤4中判断。如果图片.offesetTop≤步骤2的高度，则修改src属性为data-src")])]),t._v(" "),s("li",[s("p",[t._v("节流防抖优化")])])]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//new图像实例")]),t._v("\ni"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://gimg2.baidu.com....'")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//赋值src")]),t._v("\ntimer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用定时器来获取图片的高度和宽度")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'获取到了'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("网站首屏加载过慢的解决方法")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lazyload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 每次获取最新的 可见视口 + 滚动的高度")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" temp1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 兼容ie")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" temp2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 兼容doctype")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" maxShowHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" temp2\n \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2 获取所有图片")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" imgs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3 遍历")]),t._v("\n    imgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// item就是每一个图片标签对象")]),t._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4 判断：当前图片的.offsetTop < 步骤1（可见视口 + 滚动的高度）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不成立-不管")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成立-修改图片的src地址 改成真实的  ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(item, item.offsetTop , maxShowHeight)")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" maxShowHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// item.src = item.src-real  切记非标签默认属性 不能直接点")]),t._v("\n            item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src-real'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO: 待后续进一步优化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首次")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lazyload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后续")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// window.onscroll = lazyload()  错误 undefined")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onscroll "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lazyload\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);