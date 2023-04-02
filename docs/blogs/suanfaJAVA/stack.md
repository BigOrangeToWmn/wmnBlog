---
title: 栈与队列
date: 2022-8-24
sidebar: 'auto'
tags:
 - JAVA
categories:
 -  JAVA算法
---

## 栈与队列的理论基础

栈(stack)：先进后出

队列(queue)：先进先出

![Untitled](../../.vuepress/public/071502/sf7.png)

**线性表**：一次保存单个同类型元素，多个元素之间逻辑上连续(数组，链表，栈，队列，字符串(内部就是char[])都属于线性表)

栈和队列其实是**操作受限的线性表：**数组，链表，既可以在头部插入和删除，也能在尾部插入和删除，甚至在任意位置都可以插入和删除，而“栈和队列”只能在一端插入和删除元素

- 栈的实现
    
    栈只能在栈顶插入元素，在栈顶删除元素
    
    核心操作：
    
    1. `Push(E e)`:向栈中添加元素 即入栈，压栈  其中E为数据类型 e为需要添加的值
    2. `stack.pop()`:出栈操作，弹出栈顶元素
    3. `stack.peek()`:查看栈顶元素，但不出栈
    
    ```java
    public class MyStack<E> {
        //当前栈的元素个数
        private int size;
        //实际存储数据的动态数组，此时在栈中只能在数组末尾添加和删除元素
        private List<E> data = new ArrayList<>();
    
        public void push(E val){
            data.add(val);
            size++;
        }
    
        public E pop(){
            if (isEmpty()){
                throw new NoSuchElementException("stack is empty,cannot pop");
            }
            E val = data.remove(size-1);
            size--;
            return val;
        }
    
        public E peek(){
            if (isEmpty()){
                throw new NoSuchElementException("stack is empty,cannot peek");
            }
            return data.get(size-1);
        }
    
        public String toString(){
            StringBuilder sb = new StringBuilder();
            sb.append("[");
            for (int i = 0; i < size; i++) {
                sb.append(data.get(i));
                if (i != size-1){
                    sb.append(",");
                }
            }
            sb.append("]top");
            return sb.toString();
        }
    
        private boolean isEmpty() {
            return size == 0;
        }
    }
    ```
    
- 实现队列
    
    FIFO，先进先出的数据结构，元素从“队尾”添加到队列中，元素从“队首”出队列
    
    核心操作：
    
    1. `offer(E val)` :入队列
    2. `peek()`:查看队首元素
    3. `poll()`:弹出队首元素
    
    采用链表的方案更适合队列的结构：出队列：删除头节点    添加元素：在链表的尾部添加
    
    ```java
    //创建一个节点类
    class Node<E>{
        E val;
        Node<E> next;
    
        public Node(E val) {
            this.val = val;
        }
    }
    
    public class LinkedQueue<E> implements Queue<E> {
        //当前队列中的元素个数
        private int size;
        //当前队列的队首元素
        private Node<E> head;
        //当前队列的尾部元素
        private Node<E> tail;
        @Override
        public void offer(E val) {
            //产生一个新节点
            Node<E> node = new Node<>(val);
            if (head == null){
                head = tail = node;
            }else {
                //尾插
                tail.next = node;
                tail = node;
            }
            size++;
        }
    
        @Override
        public E poll() {
            if (isEmpty()){
                throw new NoSuchElementException("queue is empty,cannot poll");
            }
            E val = head.val;
            Node<E> node = head;
            head = head.next;
            node.next = node = null;
            size--;
            return val;
        }
    
        @Override
        public E peek() {
            if (isEmpty()){
                throw new NoSuchElementException("queue is empty,cannot peek");
            }
            return head.val;
        }
    
        public String toString(){
            StringBuilder sb = new StringBuilder();
            sb.append("front[");
            for (Node<E> x = head; x != null; x = x.next) {
                sb.append(x.val);
                if (x.next != null){
                    sb.append(",");
                }
            }
            sb.append("]tail");
            return sb.toString();
        }
    
        @Override
        public boolean isEmpty() {
            return size == 0;
        }
    }
    ```
    

## **232. 用栈实现队列**

> 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（`push`、`pop`、`peek`、`empty`）：
> 
> 
> 实现 `MyQueue` 类：
> 
> - `void push(int x)` 将元素 x 推到队列的末尾
> - `int pop()` 从队列的开头移除并返回元素
> - `int peek()` 返回队列开头的元素
> - `boolean empty()` 如果队列为空，返回 `true` ；否则，返回 `false`

```java
输入：
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 1, 1, false]
```

![Untitled](../../.vuepress/public/071502/sf8.png)

需要使用两个栈，一个作为输入栈一个作为输出栈

需要额外定义一个函数，用来判断输出站是否为空，如果为空将输入栈的数据导入输出栈`stackOut.push(stackIn.pop());`

```java
class MyQueue {

   //1.定义两个站，一个输入栈一个输出栈
    Stack<Integer> stackIn;
    Stack<Integer> stackOut;

    public MyQueue() {
        //初始化两个栈
        stackIn=new Stack<>();
        stackOut=new Stack<>();

    }

    public void push(int x) {
        stackIn.push(x);

    }

    public int pop() {
        dumpstackIn();
        return stackOut.pop();
    }

    public int peek() {
        dumpstackIn();
        return stackOut.peek();
    }

    public boolean empty() {
        return stackIn.empty()&&stackOut.empty();

    }

    //如果stackout为空，将stackin里面的所有数据导入到out中
    private void dumpstackIn(){
        if(!stackOut.empty()) return;
        while(!stackIn.empty()){
            stackOut.push(stackIn.pop());
        }
    }
}
```

复习栈的核心操作：

1. push：进栈
2. pop：出栈
3. peek：查看栈顶元素，即最后一个进栈的

## **225. 用队列实现栈**

> 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（`push`、`top`、`pop` 和 `empty`）。
> 
> 
> 实现 `MyStack` 类：
> 
> - `void push(int x)` 将元素 x 压入栈顶。
> - `int pop()` 移除并返回栈顶元素。
> - `int top()` 返回栈顶元素。
> - `boolean empty()` 如果栈是空的，返回 `true` ；否则，返回 `false` 。

```java
输入：
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 2, 2, false]
```

```java
class MyStack {

     Queue<Integer> que;
    public MyStack() {
        que=new LinkedList<>();
    }

    public void push(int x) {
        que.offer(x);
        int size=que.size();
        while(size-->1){
            que.offer(que.poll());
        }
    }

    public int pop() {
        return que.poll();
    }

    public int top() {
        return que.peek();

    }

    public boolean empty() {
        return que.isEmpty();
    }
}
```

## **20. 有效的括号**

> 给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。
> 
> 
> 有效字符串需满足：
> 
> 1. 左括号必须用相同类型的右括号闭合。
> 2. 左括号必须以正确的顺序闭合。
> 3. 每个右括号都有一个对应的相同类型的左括号。

```java
输入：s = "()"
输出：true
```

解题思路：

1. 新建一个栈stack
2. 如果遇到左括号，分别将相应的右括号压入栈中
3. 如果stack为空，或者stack顶部弹出的值不等于遍历得到的括号返回false
4. 最后判断循环完的stack是否为空，为空返回true反之

```java
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack=new Stack<>();
       for(int i=0;i<s.length();i++){
           if(s.charAt(i)=='('){
               stack.push(')');
           }else if(s.charAt(i)=='{'){
               stack.push('}');
           }else if(s.charAt(i)=='['){
               stack.push(']');
           }else if(stack.empty()||s.charAt(i)!=stack.pop()){
               return false;
           }
       }
       return stack.isEmpty();
    }
}
```

## **1047. 删除字符串中的所有相邻重复项**

> 给出由小写字母组成的字符串 `S`，**重复项删除操作**会选择两个相邻且相同的字母，并删除它们。
> 
> 
> 在 S 上反复执行重复项删除操作，直到无法继续删除。
> 
> 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
> 

```java
输入："abbaca"
输出："ca"
```

刚开始考虑的是使用堆栈，但是堆栈给出的结果是反的还是翻转比较麻烦，最终用了队列

解题思路：

1. 设置一个新的队列
2. 遍历字符串，如果字符串不为空或者遍历到的字符串不等于队顶元素，将该字符串添加到队列中中
3. 反之，对顶元素等于遍历到的字符串说明重复项，弹出
4. 最后需要输出String格式，定义String将队列pop弹出并加入。

```java
class Solution {
    public String removeDuplicates(String s) {
        ArrayDeque<Character> deque=new ArrayDeque<>();
      for(char c:s.toCharArray()){
          if(deque.isEmpty()||c!=deque.peek()){
              deque.push(c);
          }else{
              deque.pop();
          }
      }
      String result="";
      while(!deque.isEmpty()){
          result=deque.pop()+result;
      }
      return result;

    }
}
```

## **150. 逆波兰表达式求值**

> 给你一个字符串数组 `tokens` ，表示一个根据 [逆波兰表示法](https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437) 表示的算术表达式。
> 
> 
> 请你计算该表达式。返回一个表示表达式值的整数。
> 

```java
输入：tokens = ["2","1","+","3","*"]
输出：9
```

这道题和删除重复项类似

![Untitled](../../.vuepress/public/071502/sf9.png)

```java
class Solution {
    public int evalRPN(String[] tokens) {
         Deque<Integer> que=new LinkedList<>();
        for(String s:tokens){
            if("+".equals(s)){
                que.push(que.pop()+que.pop());
            }else if("-".equals(s)){
                que.push(-que.pop()+que.pop());
            }else if("*".equals(s)){
                que.push(que.pop()*que.pop());
            }else if("/".equals(s)){
                int temp1=que.pop();
                int temp2=que.pop();
                que.push(temp2/temp1);
            }else {
                que.push(Integer.valueOf(s));
            }
        }
        return que.pop();

    }
}
```

## ****239. 滑动窗口最大值****

> 给你一个整数数组 `nums`，有一个大小为 `k` **的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 `k`个数字。滑动窗口每次只向右移动一位。
> 

```jsx
输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

本题运用**单调队列**

单调队列：单调递减或单调递增的队列

设计单调队列的时候，pop，和push操作要保持如下规则：

1. pop(value)：如果窗口移除的元素value等于单调队列的出口元素，那么队列弹出元素，否则不用任何操作
2. push(value)：如果push的元素value大于入口元素的数值，那么就将队列入口的元素弹出，直到push元素的数值小于等于队列入口元素的数值为止

保持如上规则，每次窗口移动的时候，只要问que.front()就可以返回当前窗口的最大值。

解题思路：

1. 定义一个队列deque（用来存储对应的下标)
2. 下标的范围应该是[i-k+1,i]，所以需要满足的第一个条件就是`deque.peek()<i-k+1`
3. 因为是一个单调队列，所以如果存入的数字比末尾的大，需要被弹出 `nums[deque.peekLast()]<nums[i]`
4. 每当i符合一个k的范围，将`deque.peek()` 存入到结果当中

```java
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        ArrayDeque<Integer> deque=new ArrayDeque<>();
        int[] reslut=new int[nums.length-k+1];
        int index=0;
        for(int i=0;i<nums.length;i++){
            while(!deque.isEmpty()&&deque.peek()<i-k+1){
                deque.poll();
            }
            while(!deque.isEmpty()&&nums[deque.peekLast()]<nums[i]){
                deque.pollLast();
            }
            deque.offer(i);
            if(i>=k-1){
                reslut[index++]=nums[deque.peek()];
            }
        }
        return reslut;
    }
}
```

**Java中由ArrayDeque实现的接口**

用Java创建ArrayDeque双端队列的方法：`ArrayDeque<Type> animal = new ArrayDeque<>();`

****ArrayDeque方法：****

- 使用add()，addFirst()和addLast()添加元素
- 使用 offer()，offerFirst()和offerLast()插入元素
- 使用getFirst()和getLast()访问元素
- 使用peek()，peekFirst()和peekLast()方法访问元素
- 使用remove()，removeFirst()，removeLast()方法删除元素
- 使用poll()，pollFirst()和pollLast()方法删除元素

## **347. 前 K 个高频元素**

> 给你一个整数数组 `nums`和一个整数 `k`，请你返回其中出现频率前 `k` 高的元素。你可以按 **任意顺序**返回答案。
> 

```java
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
```

该题使用**优先队列**

**Java PriorityQueue**类是一种队列数据结构实现，其中根据**优先级**处理对象。  **默认情况下，**优先级队列的对象**按自然顺序排序**。

解题思路：

1. 定义一个Map，其中Map键位num的值，值为num出现的次数
2. 定义一个优先队列，将队列转换为Set集合，并将值和出现的次数添加到优先队列中，并且元素要按照从大到小排序
3. 定义一个需要返回的数组，遍历弹出pq的值

```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer,Integer> map=new HashMap<>();
        //定义Map键位num的值，值为num出现的次数。
        for(int num:nums){
            map.put(num,map.getOrDefault(num,0)+1);
        }
        //定义一个优先队列
       PriorityQueue<int[]> pq = new PriorityQueue<>((pair1, pair2)->pair2[1]-pair1[1]);
        for(Map.Entry<Integer,Integer> entry:map.entrySet()){//大顶堆需要对所有元素进行排序
            pq.add(new int[]{entry.getKey(),entry.getValue()});
        }
        int[] reslut=new int[k];
        for(int i=0;i<k;i++){
            reslut[i]=pq.poll()[0];
        }
        return reslut;
    }
}
```

**Java HashMap getOrDefault() 方法**

getOrDefault() 方法获取指定 key 对应对 value，如果找不到 key ，则返回设置的默认值。

getOrDefault() 方法的语法为：`hashmap.getOrDefault(Object key, V defaultValue)`

**Java HashMap entrySet() 方法**

entrySet() 方法返回映射中包含的映射的 Set 视图。

entrySet() 方法的语法为：`hashmap.entrySet()`

**Lambda表达式 --> 函数式编程（函数编程思想）**

- 标准格式：（参数列表） -> {代码}
- 格式说明：
    
    小括内的语法与传统方法参数列表一致，没有参数就留空，有多个参数就用逗号分隔
    
    【->】 是新引入的语法格式，代表指向动作
    
    大括号内的语法与传统方法体要求一致
    
- 比较器案例
    
    ```java
    List<Integer> list = new ArrayList<>();
            Collections.addAll(list,11,22,33,44,55);
            System.out.println("排序之前的集合：" + list);
            
            // 比较器的正常书写格式
            Collections.sort(list, new Comparator<Integer>() {
                @Override
                public int compare (Integer o1, Integer o2) {
                    return o2-o1;
                }
            });
     
            // Lambda表达式
            Collections.sort(list,(Integer o1, Integer o2)->{return o2-o1;});
            System.out.println("排序之后的集合：" + list);
    ```
    