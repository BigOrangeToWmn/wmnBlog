(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{591:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("好处：减少HTTP请求，加快网页响应速度，减少服务器压力，增加用户浏览体验")]),s._v(" "),t("p",[s._v("原理：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("监控滚动条滚动")])]),s._v(" "),t("li",[t("p",[s._v("获取总可视内容高度(可见视口高度+滚动条滚动高度)")])]),s._v(" "),t("li",[t("p",[s._v("获取所有图片")])]),s._v(" "),t("li",[t("p",[s._v("遍历步骤三")])]),s._v(" "),t("li",[t("p",[s._v("在步骤4中判断。如果图片.offesetTop≤步骤2的高度，则修改src属性为data-src")])]),s._v(" "),t("li",[t("p",[s._v("节流防抖优化")])])]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" timer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//new图像实例")]),s._v("\ni"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://gimg2.baidu.com....'")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//赋值src")]),s._v("\ntimer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setInterval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//使用定时器来获取图片的高度和宽度")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("height"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clearInterval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("timer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        timer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'获取到了'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("height"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("width"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("网站首屏加载过慢的解决方法")]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lazyload")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1 每次获取最新的 可见视口 + 滚动的高度")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" temp1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("innerHeight "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("documentElement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("clientHeight  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 兼容ie")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" temp2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scrollTop "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("documentElement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scrollTop "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 兼容doctype")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" maxShowHeight "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" temp1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" temp2\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2 获取所有图片")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" imgs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("querySelectorAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'img'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3 遍历")]),s._v("\n    imgs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" index")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// item就是每一个图片标签对象")]),s._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4 判断：当前图片的.offsetTop < 步骤1（可见视口 + 滚动的高度）")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不成立-不管")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 成立-修改图片的src地址 改成真实的  ")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log(item, item.offsetTop , maxShowHeight)")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("offsetTop "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" maxShowHeight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// item.src = item.src-real  切记非标签默认属性 不能直接点")]),s._v("\n            item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAttribute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src-real'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TODO: 待后续进一步优化")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 首次")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lazyload")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 后续")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// window.onscroll = lazyload()  错误 undefined")]),s._v("\nwindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onscroll "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" lazyload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);