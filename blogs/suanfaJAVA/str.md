---
title: 字符串
date: 2022-8-15
sidebar: 'auto'
tags:
 - JAVA
categories:
 -  JAVA算法
---

## **344. 反转字符串**

> 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 `s` 的形式给出。
> 
> 
> 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
> 

```java
输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]
```

**思路一：定义一个空字符串，反向存储s里面的字符串**

```java
class Solution {
    public void reverseString(char[] s) {
        char[] reslut=new char[s.length];
        int temp=s.length-1;
        for(char i:s){
            reslut[temp]=i;
            temp--;
        }
        int flag=0;
        for(char j:reslut){
            s[flag]=j;
            flag++;
        }

    }
}
```

**思路二：双指针**

左右指针分别遍历字符串，并交换左右字符串的值

```java
class Solution {
    public void reverseString(char[] s) {
        int left=0;
        int right=s.length-1;
        while(left<right){
            char temp=s[left];
            s[left]=s[right];
            s[right]=temp;
            left++;
            right--;
        }
    }
}
```

## **541. 反转字符串 II**

> 给定一个字符串 `s` 和一个整数 `k`，从字符串开头算起，每计数至 `2k` 个字符，就反转这 `2k` 字符中的前 `k` 个字符。
> 
> - 如果剩余字符少于 `k` 个，则将剩余字符全部反转。
> - 如果剩余字符小于 `2k` 但大于或等于 `k` 个，则反转前 `k` 个字符，其余字符保持原样。

```java
输入：s = "abcdefg", k = 2
输出："bacdfeg"
```

这道题可以在遍历字符串的过程中，只要让 `i += (2 * k)`，i 每次移动 2 * k 就可以了，然后判断是否需要有反转的区间

可以将start设置为i，end设置为`end= Math.*min*(res.length-1,start-k+1);` 如果字符串少于k就等于长度减一，但是如果长度在2k-k之间只需要翻转前k个字符

```java
class Solution {
    public String reverseStr(String s, int k) {
        char[] res=s.toCharArray();
        for(int i=0;i<res.length;i=i+(2*k)){
            int start=i;
//判断end的值是关键
            int end= Math.min(res.length-1,start+k-1);
            while(start<end){
                char temp=res[start];
                res[start]=res[end];
                res[end]=temp;
                start++;
                end--;
            }
        }
//注意返回形式是String
        return new String(res);
    }
}
```

## **剑指 Offer 05. 替换空格**

> 请实现一个函数，把字符串 `s`中的每个空格替换成"%20"。
> 

```java
输入：s = "We are happy."
输出："We%20are%20happy."
```

**思路一：利用StringBuilder**

```java
class Solution {
    public String replaceSpace(String s) {
        StringBuilder sb=new StringBuilder();
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)==' '){
                sb.append("%20");
            }else{
                sb.append(s.charAt(i));
            }
        }
        return sb.toString();
    }
}
```

**思路二：双指针(感觉好复杂忽略了)**

## **151. 反转字符串中的单词**

> 给你一个字符串 `s` ，请你反转字符串中 **单词** 的顺序。
> 
> 
> **单词** 是由非空格字符组成的字符串。`s` 中使用至少一个空格将字符串中的 **单词** 分隔开。
> 
> 返回 **单词** 顺序颠倒且 **单词** 之间用单个空格连接的结果字符串。
> 

```java
输入：s = "the sky is blue"
输出："blue is sky the"
```

解题思路：

1. 移除多余空格
    
    双指针，定义两个指针start和end
    
    首先判断字符串两头是否存在空格
    
    创建StringBuilder sb如果`s.charAt(start)!=' '` ，将其添加到sb中
    
2. 将整个字符串反转
    
    利用`sb.setChartAt` 翻转字符串
    
3. 将每个单词反转
    
    设置一个end用来统计空格，并统计出单词的索引，调用2函数来翻转单个单词
    

```java
class Solution {
   public String reverseWords(String s) {
        StringBuilder sb= removeSpace(s);
        reverseString(sb,0,sb.length()-1);
        reverseEachWord(sb);
        return sb.toString();
    }

    private StringBuilder removeSpace(String s){
        int start=0;
        int end=s.length()-1;
        while(s.charAt(start)==' ') start++;
        while(s.charAt(end)==' ') end--;
        StringBuilder sb=new StringBuilder();
        while(start<=end){
            char c=s.charAt(start);
            if(c!=' '||sb.charAt(sb.length()-1)!=' '){
                sb.append(c);
            }
            start++;
        }
        return sb;
    }

    public void reverseString(StringBuilder sb, int start, int end) {
        while (start < end) {
            char temp = sb.charAt(start);
            sb.setCharAt(start, sb.charAt(end));
            sb.setCharAt(end, temp);
            start++;
            end--;
        }
    }

     private void reverseEachWord(StringBuilder sb) {
        int start = 0;
        int end = 1;
        int n = sb.length();
        while (start < n) {
            while (end < n && sb.charAt(end) != ' ') {
                end++;
            }
            reverseString(sb, start, end - 1);
            start = end + 1;
            end = start + 1;
        }
    }
}
```

**setCharAt()：**该方法是StringBuffer中的方法，主要作用是将字符串中指定的位置的字符替换成目标字符，setCharAt（int index,char ch）index就是取代的位置 索引从0开始，ch是你要替换为的字符串。

## **剑指 Offer 58 - II. 左旋转字符串**

> 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
> 

```java
输入: s = "abcdefg", k = 2
输出: "cdefgab"
```

思路1：以k为分界线，分别翻转前后的单词串，之后再翻转整体

```java
class Solution {
     public String reverseLeftWords(String s, int n) {
        int len=s.length();
        StringBuilder sb=new StringBuilder(s);
        reversepart(sb,0,n-1);
        reversepart(sb,n,len-1);
        return sb.reverse().toString();
    }

    public static void reversepart(StringBuilder sb,int start,int end){
        while(start<end){
            char temp=sb.charAt(start);
            sb.setCharAt(start,sb.charAt(end));
            sb.setCharAt(end,temp);
            start++;
            end--;
        }
    }
}
```

思路2：试图将n之前的数后置，n之后的数前置，但是代码调试一直有问题

但是看到letcode讨论当中有人使用`s.substring(n) + s.substring(0,n);` 原理类似，但是不准备使用内置函数

`substring(int beginIndex) :` 根据传入的索引截取当前字符串,截取到末尾

## **28. 找出字符串中第一个匹配项的下标**

> 给你两个字符串 `haystack`和 `needl`，请你在 `haystack`字符串中找出 `needle`字符串的第一个匹配项的下标（下标从 0 开始）。如果 `needle`不是 `haystack`的一部分，则返回  `-1` ****。
> 

```java
输入：haystack = "sadbutsad", needle = "sad"
输出：0
解释："sad" 在下标 0 和 6 处匹配。
第一个匹配项的下标是 0 ，所以返回 0 。
```

思路一：双指针（暴力破解）

```java
class Solution {
    public int strStr(String haystack, String needle) {
        for(int i=0;i<=haystack.length()-needle.length();i++){
            int a=i;
            int b=0;
            while(b<needle.length() && haystack.charAt(a)==needle.charAt(b)){
                a++;
                b++;
            }
            if(b==needle.length()) return i;
        }
        return -1;
    }
}
```

思路二：KMP算法

KMP的经典思想就是:**当出现字符串不匹配时，可以记录一部分之前已经匹配的文本内容，利用这些信息避免从头再去做匹配。**

- 前缀表：next数组就是前缀表(prefix table)
    
    前缀表是用来回退的，它记录了模式串与主串(文本串)不匹配的时候，模式串应该从哪里开始重新匹配。
    
    前缀是指不包含最后一个字符的所有以第一个字符开头的连续子串。
    
    后缀是指不包含第一个字符的所有以最后一个字符结尾的连续子串。
    
    前缀表的任务是当前位置匹配失败，找到之前已经匹配上的位置，再重新匹配
    
    前缀表中主要**记录下标i之前（包括i）的字符串中，有多大长度的相同前缀后缀**
    
- Next数组(有时候next数组是新前缀表，即旧的前缀表统一减一)
- 时间复杂度：暴力破解的时间复杂度是O(n*m)，而KMP的时间复杂度是O(n+m)

构造next数组的步骤：

1. 初始化
2. 处理前后缀不相同的情况
3. 处理前后缀相同的情况

```java
public void getNext(int[] next, String s){
        int j = -1;
        next[0] = j;
        for (int i = 1; i < s.length(); i++){
            while(j >= 0 && s.charAt(i) != s.charAt(j+1)){
                j=next[j];
            }

            if(s.charAt(i) == s.charAt(j+1)){
                j++;
            }
            next[i] = j;
        }
    }
```

完整代码：

```java
class Solution {
    public void getNext(int[] next, String s){
        int j = -1;
        next[0] = j;
        for (int i = 1; i < s.length(); i++){
            while(j >= 0 && s.charAt(i) != s.charAt(j+1)){
                j=next[j];
            }

            if(s.charAt(i) == s.charAt(j+1)){
                j++;
            }
            next[i] = j;
        }
    }
    public int strStr(String haystack, String needle) {
        if(needle.length()==0){
            return 0;
        }

        int[] next = new int[needle.length()];
        getNext(next, needle);
        int j = -1;
        for(int i = 0; i < haystack.length(); i++){
            while(j>=0 && haystack.charAt(i) != needle.charAt(j+1)){
                j = next[j];
            }
            if(haystack.charAt(i) == needle.charAt(j+1)){
                j++;
            }
            if(j == needle.length()-1){
                return (i-needle.length()+1);
            }
        }

        return -1;
    }
}
```

