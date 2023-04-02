---
title: JAVA数据结构
date: 2022-2-10
sidebar: 'auto'
tags:
 - JAVA
categories:
 -  JAVA
---
## **Java数据结构**

1. 栈
    
    数据进入栈模型的过程为：压/进栈
    
    数据离开栈模型的过程为：弹/出栈
    
    栈是一种数据先进后出的模型
    
2. 队列
    
    数据从后端进入队列模型的过程称为：入队列
    
    数据从前段离开队列模型的过程称为：出队列
    
3. 数组
    
    查询数据通过索引对位，查询任意数据耗时相同，查询速度快
    
    数组是一种查询快，增删慢的模型
    
4. 链表

![Untitled](../../.vuepress/public/071501/JAVA_jiegou1.png)

链表是一种增删块的模型（对比数组）
链表是一种查询慢的模型

## List集合

1. List集合子类特点
    
    List集合常用子类：ArrayList，LinkedList
    
    - ArrayList：底层数据结构是数组，查询快，增删慢
    
    `ArrayList<String> array=new ArrayList<String>();`
    
    - LinkedList：顶层数据结构是链表，查询慢，增删块
    
    `LinkedList<String> linklist=new LinkedList<String>();`
    
2. LinkedList集合的特有功能

![Untitled](../../.vuepress/public/071501/JAVA_jiegou2.png)

1. Set集合
    
    Set集合特点：不包含重复元素的集合；没有带索引的方法，所以不能使用普通for循环遍历（增强for）
    
    1、`Set<String> set=new HashSet<String>();`
    
    2、`Set.add(“ ”)`
    
    3、增强for遍历
    
    哈希值：是JDK根据对象的地址或者字符串或者数字算出来的int类型的数值。
    
    Object类中有一个方法可以获取对象的哈希值：
    
    `Public int hashCode():`返回对象的哈希码值（默认情况下，不同对象的哈希值是不相同的）
    
    HashSet集合概述和特点：
    
    底层数据结构是哈希表；
    
    对集合的迭代顺序不作任何保证，不保证存储和取出的元素顺序一致。
    
    - `HashSet<String> hs=new HashSet<String>();`
    - `add(“ ”)`
    - 增强for遍历
2. 哈希表（数据结构）
    
    元素为链表的数组
    
3. LinkedHashSet集合
    
    哈希表和；链表实现的Set接口，具有可预测的迭代次序
    
    `LinkedHashSet<String> linked=new LinkedHashSet<String>();`
    
4. TreeSet集合
    
    元素有序，按照一定的规则进行排序，具体排序取决于构造方法；
    
    TreeSet:根据其元素的自然排序进行排序；
    
    TreeSet(Comparator comparator)：根据指定的比较器进行排序。
    
    （自然排序久石让元素所属的类实现Comparable接口，重写`ComparableTo()方法）`
    
    不能使用普通for循环遍历；
    
    由于是Set集合，所以不包含重复元素对的集合。
    

## 泛型

1. 概述：本质是参数化类型，将类型由原来的具体的类型参数化，然后在使用/调用时传入具体的类型。
2. 泛型的定义格式：
    
    `<类型>`：指定一种类型的格式。这里的类型可以看成是形参
    
    `<类型1，类型2>`：指定多种类型格式。
    
3. 泛型的好处：把运行时期的问题提前到了编译期间；避免了强制类型转换。
4. 泛型类
    
    定义格式：
    
    `修饰符 class 类名<类型>{ }`
    
    `Public class Generic<T>{ }`   (此处T可以随便写为任意表示，常见的如T、E、K、V等形式的参数常用于表示泛型)
    
    1. 泛型方法
    
    `Public<T>  void 方法名（T t）{ }`
    
    1. 泛型接口
    
    `Public class xxxx<T> implements xxx<T>`{
    
    重写xxx里面的方法
    
    }
    
5. 类型通配符
    
    类型通配符：`<？>`
    
    `List<?>`：表示类型位置的List，它的元素可以匹配任何类型
    
    类型通配符上限：`<？extends类型>`
    
    `List<？extends Number>`：它表示的类型是Number或者子类型
    
    类型通配符下限：`<？super类型>`
    
    `List<？super Number>`：他表示的类型是Number或者其父类型
    
6. 可变参数
    
    格式：修饰符 返回值类型 方法名（数据类型。。。。变量名）{}
    
    范例：`public static sum(int….a)`
    
7. 可变参数的使用
    
    Arrays工具类中有一个静态方法：`public static <T> List<T> asList(T….a):`返回由指定数组支持的固定大小的列表。返回的集合不能做增删操作，可以做修改操作
    
    List接口有一个静态方法：`public static <E> List<E> of(E….elements):`返回任意数量元素的不可变列表
    
    Set接口有一个静态方法：`public static <E> Set<E> of(E….elements)`:返回任意一个包含任意数量元素的不可变集合
    

## Map集合

1. Map集合概述：
    
    `Interface Map<K,V>`  K:键的类型；V：值的类型
    
    将键映射到值的对象；不能包含重复的键；每个键可以映射到最多一个值
    
    创建Map集合对象：多态方式；具体的实现类HashMap
    
    `Map<String,String> map=new HashMap<String,String>();`
    
    `Map.put();`
    
2. Map集合的基本功能

![Untitled](../../.vuepress/public/071501/JAVA_jiegou3.png)

3.  Map集合的获取功能

![Untitled](../../.vuepress/public/071501/JAVA_jiegou4.png)

4.  Map集合的遍历

```java
Set<String> keyset=map.keyset();   //获取所有键的集合
For(String key:keyset){      //用增强for遍历
	String vale=map.get(key)   //获取所有键的值
	//输出
}

Set<Map.Entry<String,String>> entrySet = map.entrySet()；//获取所有键值对对象集合
For(Map.Entry<String,String> me:entrySet){   //增强for循环
     String key=me.getKey();   //获取键
     String value=me.getValue();   //获取值
     //输出；
}
```

用HashMap统计字符串中字符出现的个数：

- 键盘录入一个字符
- 创建HashMap集合，键是Character，值是Integer
- 遍历字符串，得到每一个字符
- 拿到的每一个字符作为键到HashMap集合中去找对应的值，看起返回值；

## Collection

是针对集合操作的工具类；
常用方法：

`Boolean add（Object e）`向集合中添加元素
`int size（）`获取集合元素的个数
`void clear（）`清空集合
`Boolean contains（Object o）`判断当前集合中是否包含元素o，包含返回true。
`boolean remove(Object o)`删除集合中的某个元素
`boolean isEmpty()`判断集合是否为空，是返回true
`Object[] toArray()`调用这个方法把集合转换成数组

```java
Collection.sort(list );
Collection.shuffle(list);   //随机置换
```

## IO流

1. File类
    
    它是文件和目录路径名的抽象表示。
    
    文件和目录是可以通过File封装成对象的
    
    对于File而言，其封装的并不是一个真正存在的文件，仅仅是一个路径名
    
    `File(String pathname)`：                   根据一个路径得到File对象
    `File(String parent, String child)`:        根据一个目录和一个子文件/目录得到File对象
    `File(File parent, String child)`:            根据一个父File对象和一个子文件/目录得到File对象
    

```java
File f1=new File(pathname…….);//-----最简单
File f2=new File(parent……,child……);

File f3=new File(pathname……);
File f4=new File(f3,child……)
```

    `createNewFile()`    创建一个新的文件 如果存在这样的文件，就不创建了.
    `mkdir()`      创建文件夹 如果存在这样的文件夹，就不创建了 注意这个方法只能创建单层目录 如果创建多层目录得一层一层创建
    `mkdirs()`     创建文件夹,如果父文件夹不存在，会帮你创建出来 可以创建多层目录 当然也可以创建单层目录

```java
File f1=new File(pathname…….);
F1.createNewFile();
F1.mkdir();
F2.mkdirs();  //创建多级目录
```

`isDirectory()`                判断是否是目录
`isFile()`                         判断是否是文件
`exists()`                         判断是否存在
`canRead()`                       判断是否可读
`canWrite()`                     判断是否可写
`isHidden()`                     判断是否隐藏
`isAbsolute()`                  判断是否使用的是绝对路径
`getAbsolutePath()`         获取绝对路径

2. 递归
    
    解决递归问题，首先就是要定义一个方法。
    
    递归解决问题的思路：
    
    把一个复杂的问题层层转化为一个与原问题相似的规模娇小的问题来求解
    
    递归解决问题要找到两个内容：
    
    - 递归出口：否则会出现内存溢出
    - 递归规则：与原问题相似的规模较小的问题
3. IO流
    
    IO：输入/输出
    
    流：是对数据传输的总称，数据在设备间的传输称为流，流的本质都是数据传输
    
    IO流分类——按照数据的流向：
    
    输入流：读数据
    
    输出流：写数据
    
    按照数据类型来分：
    
    字节流——字节输入流；字节输出流
    
    字符流——字符输入流；字符输出流
    
    如果数据通过Windows自带的记事本软件打开可以读懂内容，就使用字符流，否则为字节流。
    
4. 字节流
    
    Inputstream：这个抽象类是表示字节输入流的所有类的超类
    
    OutputStream：这个抽象类是表示字节输出流的所有类的超类
    
    子类名特点：子类名称都是以其父类名作为子类名的后缀
    
    FileOutputStream:文件输出流用于将数据写入File；
    
    `FileOutputStream(String name)`：创建文件输出流以指定的名称写入文件
    
    //创建字节输出流对象
    
    `FileOutputStream fos=new FileOutputStream(name:……);`
    
    //将字节写入此文件输出流
    
    `Fos.write(…);`
    
    //释放资源
    
    `Fos.close();` 
    
    | 方法名 | 说明 |
    | --- | --- |
    | write(int b) | 将指定的字节写入此文件输出流一次写一个字节数据 |
    | write(byte[] b) | 将b.length字节从指定的字节数组写入此文件输出流，一次写一个字节数数据 |
    | write(byte[] b,int off,int len) | 将len字节从指定的字节数组开始，从偏移量off开始写入此文件输出流一次写一个字节数组的部分数据 |

```java
Byte[] bys={97,98,99,100,101}
Fos.write(bys);

Byte[] bys=”abcd”.getBytes();
Fos.write(bys);
```

字节流写数据如何实现换行？
`Window:\r\n;`
`Liunx:\n;`
`Mac:\r;`
字节流写数据如何追加写入？
`FileOutputStream fos=new FileOutputStream(name:……….,append:true)`

5. 字节流读数据（一次读一个字节数据）

```java
Int by=Fos.read();
Int by=fis.read();
While(by!=-1){
	System.out.println(char.by);
	By=fis.read();
}
```

6.  字节缓冲流
    
    BufferedOutput：该类实现缓冲输出流。
    BufferedInputStream：创建BufferedInputStream
    
    构造方法：
    字节缓冲输出流：`BufferedOutputStream(OutputStream out)`
    字节缓冲输入流：`BufferedInputStream(InputStream in)`
    
    `BufferedOutputStream bos=new BufferedOutputStream(new FileOutputStream(….));`
    `Bos.write(“…”.getBytes());`
    
    基本字节流每次读写一个字节
    
7. 字符流

汉字的存储（汉字在存储的时候，无论选择哪种编码存储，第一个字节都是负数）

如果是GBK编码，占用2个字符

如果是UTF-8编码，占用3个字符

字符流=字节流+编码表

字符集：

ASCII：用于显示英语，控制符等，气味表示一个字符，共128个字符

GBXXX：简体中文码表，最常用的GBK，最新的GB18030

Unicode：为表达任意语言的任意字符设计，最常用的UTF-8

编码：

`Byte[] getBytes()`：使用平台的默认字符集将该String

`Byte[] getBytes(String charsetName:   )`：使用指定的字符集将String编码为一系列字节

解码：

`String（byte[] bytes）`：通过使用默认字符集解码指定字节数组

`String（byte[] bytes charsetName:）`

字符流抽象基类：

Reader：字符输入流的抽象类

Writer：字符输出流的抽象类

字符流和编码解码问题相关的两个类：

InputStreamReader

OutputStreamWriter