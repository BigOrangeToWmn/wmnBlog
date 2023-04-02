(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{276:function(v,_,t){v.exports=t.p+"assets/img/JAVA_biancheng1.e8c689bd.png"},380:function(v,_,t){"use strict";t.r(_);var a=t(14),e=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"网络编程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络编程"}},[v._v("#")]),v._v(" 网络编程")]),v._v(" "),_("h3",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),_("p",[v._v("计算机网络：是指地理位置不同的具有独立功能的多台计算机及其外部设备，通过通信线路连接起来，在网络操作系统，网络管理软件及网络通信协议的管理和协调下，实现资源共享和信息传递的计算机系统。")]),v._v(" "),_("p",[v._v("网络编程：在网络通信协议下，实现网络互联的不同计算机上运行的程序间可以进行数据交换")]),v._v(" "),_("p",[v._v("网络编程三要素：")]),v._v(" "),_("ul",[_("li",[v._v("IP地址")])]),v._v(" "),_("p",[v._v("每台计算机都一个标识号")]),v._v(" "),_("ul",[_("li",[v._v("端口")])]),v._v(" "),_("p",[v._v("网络的通信本质上是两个应用程序的通信，端口号可以唯一表示设备中的应用程序")]),v._v(" "),_("ul",[_("li",[v._v("协议")])]),v._v(" "),_("p",[v._v("位于同一个网络中的计算机在进行连接和通信是需要遵守一定的规则（网络通信协议，常见的协议UDP/TCP）")]),v._v(" "),_("h3",{attrs:{id:"ip地址-网络中设备的唯一标识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ip地址-网络中设备的唯一标识"}},[v._v("#")]),v._v(" IP地址（网络中设备的唯一标识）")]),v._v(" "),_("p",[v._v("IPv4：给每个网络上的主机分配一个32bit地址，按照TCP/IP规定，IP地址用二进制表示，每个IP地址长32bit，也就是4个字节。为了方便使用，IP地址经常被写为十进制形式，中间用“.”分割不同字节，点分十进制表示法")]),v._v(" "),_("p",[v._v("IPv6：IP地址的需求量越来越大，但是网络地址资源有限，为了扩大地址空间，采用128位地址长度，每16个字节一组，分成8组十六进制数")]),v._v(" "),_("p",[v._v("常用命令：")]),v._v(" "),_("p",[v._v("Ipconfig：查看本机IP地址")]),v._v(" "),_("p",[v._v("Ping IP地址：检查网络是否连通")]),v._v(" "),_("p",[v._v("特殊IP地址：127.0.0.1 返回地址，可以代表本机地址，一般用来测试使用")]),v._v(" "),_("p",[v._v("InetAddress")]),v._v(" "),_("p",[v._v("//确定主机名称的IP地址")]),v._v(" "),_("p",[_("code",[v._v("InetAddress address=InetAddress.getByName(“主机名称”);")])]),v._v(" "),_("p",[v._v("//获取IP地址的主机名")]),v._v(" "),_("p",[_("code",[v._v("String name=address.getHostName();")])]),v._v(" "),_("p",[v._v("//返回IP地址字符串")]),v._v(" "),_("p",[_("code",[v._v("String ip=address.getHostAddress();")])]),v._v(" "),_("h3",{attrs:{id:"端口-设备上应用程序的唯一标识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#端口-设备上应用程序的唯一标识"}},[v._v("#")]),v._v(" 端口（设备上应用程序的唯一标识）")]),v._v(" "),_("p",[v._v("端口号：用两个字节表示的整数，它的取值范围0~65535，其中0~1023之间的端口号用于一些知名的网络服务和引用，普通的应用程序需要使用1024以上的端口号。")]),v._v(" "),_("h3",{attrs:{id:"协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#协议"}},[v._v("#")]),v._v(" 协议")]),v._v(" "),_("p",[v._v("计算机网络中，连接和通信的规则被称为网络通信协议")]),v._v(" "),_("p",[v._v("UDP协议：用户数据报协议，是一种无连接通信协议，即在数据传输是，数据的发送端和接收端不建立逻辑连接。UDP协议消耗资源小，通信效率高，所以通常都会用于音频、视频和普通数据的传输。在传输重要数据时不建议使用UDP协议。")]),v._v(" "),_("p",[v._v("TCP协议：传输控制协议，面向连接的通信协议，即传输数据之前，在发送端和接收端建立逻辑连接，然后再传输数据，提供了两台计算机之间可靠误差错的数据传输。TCP连接中必须明确客户端与服务端，由客户端向服务端发送连接请求，每次连接创建都需要经过“三次握手”。")]),v._v(" "),_("p",[v._v("三次握手：在TCP协议中，在发送数据的准备阶段，客户端与服务器之间的三次交互，以保证连接的可靠。")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("第一次握手：客户端向服务器发出连接请求，等待服务器确认\n\n第二次握手：服务器向客户端回送一个响应，通知客户端收到了连接请求\n\n第三次握手：客户端再次向服务器端发送确认信息，确认连接\n")])])]),_("p",[_("img",{attrs:{src:t(276),alt:"Untitled"}})]),v._v(" "),_("p",[v._v("完成三次握手，连接建立后，客户端和服务器就可以开始进行数据传输了。由于这种面向连接的特性，TCP协议可以保证传输数据的安全，所以应用十分广泛，例如上传文件、下载文件、浏览网页。")]),v._v(" "),_("h3",{attrs:{id:"udp通信程序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#udp通信程序"}},[v._v("#")]),v._v(" UDP通信程序")]),v._v(" "),_("p",[v._v("UDP发送数据步骤：")]),v._v(" "),_("ul",[_("li",[v._v("创建发送端的Socket对象（DatagramSocket）")])]),v._v(" "),_("p",[_("code",[v._v("DatagramSocket ds=new DatagramSocket();")])]),v._v(" "),_("ul",[_("li",[v._v("创建数据，并把数据打包")])]),v._v(" "),_("p",[_("code",[v._v("DatagramPacket(byte[ ] buf, int length ,InetAdress address, int port)")])]),v._v(" "),_("ul",[_("li",[v._v("调用DatagramSocket对象的方法发送数据")])]),v._v(" "),_("p",[_("code",[v._v("ds.send( );")])]),v._v(" "),_("ul",[_("li",[v._v("关闭发送端")])]),v._v(" "),_("p",[_("code",[v._v("ds.close( );")])]),v._v(" "),_("p",[v._v("UDP接受数据步骤：")]),v._v(" "),_("ul",[_("li",[v._v("创建接收端的Socket对象（DatagramSocket）")])]),v._v(" "),_("p",[v._v("Datagr")]),v._v(" "),_("ul",[_("li",[v._v("创建数据包，用于接收数据")]),v._v(" "),_("li",[v._v("调用DatagramSocket对象的方法接收数据")]),v._v(" "),_("li",[v._v("解析数据包，并把数据在控制台显示")]),v._v(" "),_("li",[v._v("关闭接收端")])])])}),[],!1,null,null,null);_.default=e.exports}}]);