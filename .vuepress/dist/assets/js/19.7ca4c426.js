(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{295:function(a,n,t){a.exports=t.p+"assets/img/JAVA_xiancheng1.8a60ad27.png"},296:function(a,n,t){a.exports=t.p+"assets/img/JAVA_xiancheng2.040d65c7.png"},384:function(a,n,t){"use strict";t.r(n);var e=t(14),s=Object(e.a)({},(function(){var a=this,n=a._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"多线程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[a._v("#")]),a._v(" 多线程")]),a._v(" "),n("h3",{attrs:{id:"实现多线程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现多线程"}},[a._v("#")]),a._v(" 实现多线程")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("进程：正在运行的程序\n\n是系统进行资源分配和调用的独立单位；\n\n每一个进程都有他自己的内存空间和系统资源。\n\n线程：是进程中的单个顺序控制流，是一条执行路径\n\n单线程：一个进程如果只有一条执行路径\n\n多线程：一个进程如果有多条执行路径\n")])])]),n("ol",[n("li",[a._v("多线程的实现方法：")])]),a._v(" "),n("p",[a._v("方法1：继承Thread类")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("定义一个类MyThread继承Thread类\n\n在MyThread类的对象\n\n启动线程\n\n（Void start()导致此线程开始执行\n\nStart（）启动线程，用run（）用来封装被线程执行的代码）\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[a._v("Thread类中设置和获取线程名称的方法：")])]),a._v(" "),n("p",[n("code",[a._v("Void setName(String name)")]),a._v("：将此线程的名称更改为等于参数name。")]),a._v(" "),n("p",[n("code",[a._v("String getName（）")]),a._v("：返回此线程的名称")]),a._v(" "),n("p",[n("code",[a._v("MyThread my=new MyThread();")])]),a._v(" "),n("p",[n("code",[a._v("My.setNme(“…”)")])]),a._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[n("p",[a._v("线程调度的两种模型:")]),a._v(" "),n("p",[a._v("分时间调度模型：所有线程轮流使用cpu的使用权，平均分配每个线程占用CPU的时间片")]),a._v(" "),n("p",[a._v("抢占式调度模型：优先让优先级高的线程使用CPU，如果线程的优先级相同，则随机选择一个，优先级高的线程获取CPU时间片相对多一些。")]),a._v(" "),n("p",[a._v("Java使用抢占式调度模型")])]),a._v(" "),n("li",[n("p",[a._v("Thread类中设置和获取线程优先级的方法：")]),a._v(" "),n("p",[n("code",[a._v("Public final int getPriority()：")]),a._v("返回此线程的优先级")]),a._v(" "),n("p",[n("code",[a._v("Public final void setPriority(int newPriority)：")]),a._v("更改此线程的优先级")]),a._v(" "),n("p",[a._v("最后优先级：10")]),a._v(" "),n("p",[a._v("最低优先级：1")]),a._v(" "),n("p",[a._v("默认优先级：5")])])]),a._v(" "),n("ul",[n("li",[a._v("线程控制")])]),a._v(" "),n("p",[n("img",{attrs:{src:t(295),alt:"Untitled"}})]),a._v(" "),n("p",[a._v("•  线程的生命周期")]),a._v(" "),n("p",[n("img",{attrs:{src:t(296),alt:"Untitled"}})]),a._v(" "),n("p",[a._v("方法2：实现Runable接口")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("定义一个类MyRunable实现       Runable接口\n\n在MyRunable类中重写run方法\n\n创建MyRunable类对象\n\n创建Thread类对象，把MyRunable对象作为构造方法的参数\n\n启动线程\n\n同步代码块：\n\n锁多条语句操作共享数据，可以使用同步代码块实现\n\nSynchronized(任意对象){\n\n多条语句操作共享数据的代码\n\n}\n")])])]),n("h3",{attrs:{id:"线程同步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#线程同步"}},[a._v("#")]),a._v(" 线程同步")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("同步方法：\n\n修饰符 synchronized 返回值类型 方法名（方法参数）{  }\n")])])]),n("h3",{attrs:{id:"线程安全的类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#线程安全的类"}},[a._v("#")]),a._v(" 线程安全的类")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("StringBuffer：线程安全，可变的字符序列，JDK5开始，之后使用StringBuilder\n\nVector：之后该类改进为List接口，如果不需要线程安全实现，建议使用ArrayList代替Vector\n\nHashtable：该类实现了一个哈希表，将键映射到值。\n")])])]),n("h3",{attrs:{id:"lock锁"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lock锁"}},[a._v("#")]),a._v(" Lock锁")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("Lock实现提供比使用Synchronized方法和语句可以获得更广泛的锁定操作\n\n`Void lock():`获得锁\n\n`Void unlock():`释放锁\n\nLock是接口不能直接实例化，采用实现类ReentrantLock来实例化\n")])])]),n("h3",{attrs:{id:"生产者消费者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生产者消费者"}},[a._v("#")]),a._v(" 生产者消费者")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("为了体现生产和消费过程中的等待和唤醒，java提供的方法：\n\n进程是程序的一次动态执行过程，它对应了从代码加载、执行到执行完毕的一个完整过程，这个过程也是进程从产生、发展到消亡的过程。\n\n线程是比进程更小的执行单位。一个进程在其执行过程中，可以产生多个更小的程序单元，这些更小的单元为线程。")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);