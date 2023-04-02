(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{396:function(t,v,s){"use strict";s.r(v);var _=s(14),e=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("版本控制系统的分类：")]),t._v(" "),v("p",[t._v("1、本地版本控制系统——单机运行")]),t._v(" "),v("p",[t._v("2、集中化版本控制系统——性能差、用户体验差")]),t._v(" "),v("p",[t._v("3、分布式版本控制系统——联网运行，支持多人协作开发；性能优秀、用户体验好")]),t._v(" "),v("p",[t._v("Git是一个开源的分布式版本控制系统，是目前世界上最先进、最流行的版本控制系统。")]),t._v(" "),v("p",[t._v("Git中绝大多数操作都只需要访问本地文件和资源，一般不需要来自网略上其他计算机的信息")]),t._v(" "),v("p",[t._v("Git管理项目拥有三个区：工作区、暂存区、Git仓库")]),t._v(" "),v("p",[t._v("Git中的三种状态：modified(已修改)、staged(已暂存)、committed(已提交)")]),t._v(" "),v("h3",{attrs:{id:"git基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git基础"}},[t._v("#")]),t._v(" Git基础")]),t._v(" "),v("p",[t._v("1、设置自己的用户名和邮箱")]),t._v(" "),v("div",{staticClass:"language-jsx extra-class"},[v("pre",{pre:!0,attrs:{class:"language-jsx"}},[v("code",[t._v("git config "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxx'")]),t._v("\ngit config "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxx'")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看所有的全局配置项")]),t._v("\ngit config "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("list "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看所有的全局配置项")]),t._v("\ngit config user"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\ngit config user"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email\n")])])]),v("p",[t._v("2、使用 "),v("code",[t._v("it help<verb>")]),t._v("命令，无需互联网打开帮助手册  "),v("code",[t._v("git help config")])]),t._v(" "),v("p",[t._v("如果不想查看完整的手册，那么可以用-h选项获得更简明的help输出  "),v("code",[t._v("git config -h")])]),t._v(" "),v("p",[t._v("3、初始化仓库  "),v("code",[t._v("git init")])]),t._v(" "),v("p",[t._v("工作区文件的4中状态：unmodified未修改、modified已修改、staged已暂存、untracked未跟踪")]),t._v(" "),v("p",[t._v("4、检查文件的状态  "),v("code",[t._v("git status")])]),t._v(" "),v("p",[t._v("精简的方式显示文件的状态 "),v("code",[t._v("git status -s")]),t._v("   未跟踪文件前面有"),v("strong",[t._v("红色？？标记")])]),t._v(" "),v("p",[t._v("5、跟踪新文件 "),v("code",[t._v("git add")])]),t._v(" "),v("p",[t._v("新添加到暂存区中的文件前面有"),v("strong",[t._v("绿色A标记")])]),t._v(" "),v("p",[t._v("6、执行提交  "),v("code",[t._v("git commit")]),t._v(" "),v("code",[t._v("git commit -m ‘新建了index.html’")])]),t._v(" "),v("p",[t._v("7、暂存已修改文件    需要再次运行"),v("code",[t._v("git add")]),t._v("命令")]),t._v(" "),v("p",[t._v("8、提交已暂存文件    再次运行 "),v("code",[t._v("git commit -m “提交消息”")])]),t._v(" "),v("p",[t._v("9、撤销对文件的修改：还原成GIT仓库中所保存的版本   "),v("code",[t._v("git checkout -- index.html")])]),t._v(" "),v("p",[t._v("10、向暂存区中一次添加多个文件 "),v("code",[t._v("git add .")])]),t._v(" "),v("p",[t._v("11、取消暂存的文件  "),v("code",[t._v("git reset HEAD 要移除的文件名称")])]),t._v(" "),v("p",[t._v("12、跳过暂存区域："),v("code",[t._v("git commit -a -m “描述消息”")])]),t._v(" "),v("p",[t._v("标准工作流程：工作区——暂存区——Git仓库")]),t._v(" "),v("p",[t._v("13、移除文件有两种方式")]),t._v(" "),v("p",[t._v("①从Git仓库和工作区中同时移除对应文件  "),v("code",[t._v("git rm -f index.js")])]),t._v(" "),v("p",[t._v("②只从Git仓库中移除指定的文件，但保留工作区中对应的文件   "),v("code",[t._v("git rm --cached index.css")])]),t._v(" "),v("p",[t._v("14、忽略文件：一般我们总会有些文件无需纳入git管理，也不希望他们总出现在未跟踪文件列表。所以可以创建一个名为.gitgnore的配置文件，列出要忽略的文件的匹配模式")]),t._v(" "),v("p",[t._v("文件.gitgnore的格式规范如下：")]),t._v(" "),v("p",[t._v("①以"),v("code",[t._v("#")]),t._v("开头的是注释")]),t._v(" "),v("p",[t._v("②以"),v("code",[t._v("/")]),t._v("结尾的是目录")]),t._v(" "),v("p",[t._v("③以"),v("code",[t._v("/")]),t._v("开头防止递归")]),t._v(" "),v("p",[t._v("④以"),v("code",[t._v("！")]),t._v("开头表示取反")]),t._v(" "),v("p",[t._v("⑤可以使用glob模式进行文件和文件夹的匹配")]),t._v(" "),v("p",[t._v("15、glob模式指简化了的正则表达式")]),t._v(" "),v("p",[t._v("①*匹配零个或多个任意字符")]),t._v(" "),v("p",[t._v("②"),v("code",[t._v("[abc]")]),t._v("匹配任何一个列在方括号中的字符")]),t._v(" "),v("p",[t._v("③问号？匹配一个任意字符")]),t._v(" "),v("p",[t._v("④在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内都可以匹配")]),t._v(" "),v("p",[t._v("⑤"),v("code",[t._v("**")]),t._v("表示匹配任意中间目录")]),t._v(" "),v("p",[t._v("16、查看提交历史   "),v("code",[t._v("git log")])]),t._v(" "),v("div",{staticClass:"language-jsx extra-class"},[v("pre",{pre:!0,attrs:{class:"language-jsx"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//按时间先后顺序列出所有的提交历史，最近的提交排在最上面")]),t._v("\ngit log\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//只展示最新两条提交历史，数字可以按需进行填写")]),t._v("\ngit log "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在一行上展示最近两天提交历史信息")]),t._v("\ngit log "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("pretty"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("online\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在一行上展示最近两条提交历史的信息，并自定义输出的格式")]),t._v("\ngit log "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("pretty"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("format"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%h| %an| %ar| %s"')]),t._v("\n")])])]),v("p",[t._v("17、回退到指定的版本")]),t._v(" "),v("div",{staticClass:"language-jsx extra-class"},[v("pre",{pre:!0,attrs:{class:"language-jsx"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在一行上展示所有的提交历史")]),t._v("\ngit log "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("pretty"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("online\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用git reset --hard命令，根据制定得提交ID回退到指定版本")]),t._v("\ngit reser "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("hard "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("commitID")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),v("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n//在旧版本中使用git reflog --pretty=online命令、查看命令操作的历史\ngit reflog --pretty=online\n//再次根据最新的提交ID，跳转到最新的版本\ngit reset --hard ")]),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("commitID")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),v("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")])])])]),v("p",[v("strong",[t._v("小结")])]),t._v(" "),v("p",[t._v("初始化Git仓库的命令  "),v("code",[t._v("git init")])]),t._v(" "),v("p",[t._v("查看文件状态的命令  "),v("code",[t._v("git status或git status -s")])]),t._v(" "),v("p",[t._v("一次性将文件加入暂存区的命令 "),v("code",[t._v("git add .")])]),t._v(" "),v("p",[t._v("将暂存区的文件提交到Git仓库的命令  "),v("code",[t._v("git commit -m “提交信息”")])]),t._v(" "),v("h3",{attrs:{id:"github"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[t._v("#")]),t._v(" Github")]),t._v(" "),v("p",[t._v("github上的远程仓库，有两种访问方式，分别是HTTPS和SSH，他们的区别是：")]),t._v(" "),v("p",[t._v("①HTTPS：零配置；但是每次访问仓库时，需要重复输入Github的账号和密码才能访问成功")]),t._v(" "),v("p",[t._v("②SSH：需要进行额外的配置；但是配置成功后，每次访问仓库时，不需要重复输入Github的账号和密码("),v("strong",[t._v("推荐使用该方法")]),t._v(")")]),t._v(" "),v("p",[t._v("1、将远程仓库克隆到本地   "),v("code",[t._v("git clone 远程仓库的地址")])]),t._v(" "),v("h3",{attrs:{id:"分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),v("p",[t._v("分支在实际开发中的作用：为了防止互相干扰，提高协同开发的体验，建议开发者都基于分支进行项目功能的开发")]),t._v(" "),v("p",[v("strong",[t._v("master主分支")]),t._v("  主要作用：用来保存和记录整个项目已完成的功能代码")]),t._v(" "),v("p",[t._v("查看分支列表："),v("code",[t._v("git branch")])]),t._v(" "),v("p",[t._v("创建新分支："),v("code",[t._v("git branch 分支名称")])]),t._v(" "),v("p",[t._v("切换分支："),v("code",[t._v("git checkout 分支名称")])]),t._v(" "),v("p",[t._v("分支的快速创建和切换："),v("code",[t._v("git checkout -b 分支名称")])]),t._v(" "),v("p",[t._v("合并分支："),v("code",[t._v("git merge 分支名称")])]),t._v(" "),v("p",[t._v("删除分支："),v("code",[t._v("git branch -d 分支名称")])]),t._v(" "),v("p",[t._v("将本地分支推送到远程仓库："),v("code",[t._v("git push -u 远程仓库的别名 本地分支名称：远程分支名称")])]),t._v(" "),v("p",[t._v("查看远程仓库中所有的分支列表："),v("code",[t._v("git remote show 远程仓库名称")])]),t._v(" "),v("p",[t._v("跟踪分支：从远程仓库中把远程分支下载到本地仓库中   "),v("code",[t._v("git checkout 远程分支名称")])]),t._v(" "),v("p",[t._v("拉取远程分支的最新代码："),v("code",[t._v("git pull")])]),t._v(" "),v("p",[t._v("删除远程分支："),v("code",[t._v("git push 远程仓库名称 --delete 远程分支名称")])])])}),[],!1,null,null,null);v.default=e.exports}}]);