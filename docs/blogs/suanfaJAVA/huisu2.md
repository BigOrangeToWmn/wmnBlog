---
title: 回溯法-下
date: 2022-11-1
sidebar: 'auto'
tags:
 - JAVA
categories:
 -  JAVA算法
---

## **93. 复原 IP 地址**

> **有效 IP 地址** 正好由四个整数（每个整数位于 `0` 到 `255` 之间组成，且不能含有前导 `0`），整数之间用 `'.'` 分隔。
> 
> - 例如：`"0.1.2.201"` 和 `"192.168.1.1"` 是 **有效** IP 地址，但是 `"0.011.255.245"`、`"192.168.1.312"` 和 `"192.168@1.1"` 是 **无效** IP 地址。
> 
> 给定一个只包含数字的字符串 `s` ，用以表示一个 IP 地址，返回所有可能的**有效 IP 地址**，这些地址可以通过在 `s` 中插入 `'.'` 来形成。你 **不能** 重新排序或删除 `s` 中的任何数字。你可以按 **任何** 顺序返回答案。
> 

```jsx
输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
```

回溯三部曲：

1. 参数和返回值：返回值为void，参数为字符串s，为了避免重复定义startIndex，记录点数pointNum
2. 终止条件：当pointNum==3并且当符合条件，之后可将s存储到reslut中
3. 单层搜索逻辑
    
    处理节点：首先需要判断结点是否符合条件，符合条件即可将substring中加入小数点
    
    递归：需要从i+2处开始
    
    回溯
    

```java
class Solution {
   List<String> reslut=new ArrayList<>();
    public List<String> restoreIpAddresses(String s) {
        if(s.length()>12){
            return reslut;
        }
        trackbacking(s,0,0);
        return reslut;
    }
    public void trackbacking(String s,int startIndex,int pointNum){
        if(pointNum==3){
            if(isValid(s,startIndex,s.length()-1)){
                reslut.add(s);
            }
            return;
        }
        for(int i=startIndex;i<s.length()-1;i++){
            if(isValid(s,startIndex,i)){
                s=s.substring(0,i+1)+"."+s.substring(i+1);
                pointNum++;
                trackbacking(s,i+2,pointNum);
                pointNum--;
                s=s.substring(0,i+1)+s.substring(i+2);
            }else{
                break;
            }
        }
    }
    private boolean isValid(String s,int start,int end){
        if(start>end) return false;
        //以0开头不合法
        if(s.charAt(start)=='0'&&start!=end){
            return false;
        }
        int num=0;
        for(int i=start;i<=end;i++){
            //需要在0-9之间
            if(s.charAt(i)<'0'||s.charAt(i)>'9'){
                return false;
            }
            num=num * 10+(s.charAt(i)-'0');
            //需要小于255
            if(num>255){
                return false;
            }
        }
        return true;
    }
}
```

## **78. 子集**

> 给你一个整数数组 `nums` ，数组中的元素 **互不相同** 。返回该数组所有可能的子集（幂集）。
> 
> 
> 解集 **不能** 包含重复的子集。你可以按 **任意顺序** 返回解集。
> 

```java
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

求取子集问题，不需要任何剪枝！

```java
class Solution {
    List<List<Integer>> reslut=new ArrayList<>();
    List<Integer> path=new ArrayList<>();
    public List<List<Integer>> subsets(int[] nums) {
        trackbacking(nums,0);
        return reslut;
    }
    public void trackbacking(int[] nums,int startIndex){
        reslut.add(new ArrayList<>(path));
        for(int i=startIndex;i<nums.length;i++){
            path.add(nums[i]);
            trackbacking(nums,i+1);
            path.remove(path.size()-1);
        }
    }
}
```

## **90. 子集 II**

> 给你一个整数数组 `nums` ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
> 
> 
> 解集 **不能** 包含重复的子集。返回的解集中，子集可以按 **任意顺序** 排列。
> 

```java
输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
```

该题是**40. 组合总和 II和78. 子集**两题的结合

同样需要设置一个used数组，来存储是否重复出现过

```java
class Solution {
    List<List<Integer>> reslut=new ArrayList<>();
    List<Integer> path=new ArrayList<>();
    boolean[] used;
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        used=new boolean[nums.length];
        Arrays.fill(used,false);
        Arrays.sort(nums);
        trackbacking(nums,0);
        return reslut;
    }
    public void trackbacking(int[] nums,int startIndex){
        reslut.add(new ArrayList<>(path));
        if(startIndex>=nums.length){
            return;
        }
        for(int i=startIndex;i<nums.length;i++){
            if(i>0&&nums[i-1]==nums[i]&&!used[i-1]){
                continue;
            }
            used[i]=true;
            path.add(nums[i]);
            trackbacking(nums,i+1);
            used[i]=false;
            path.remove(path.size()-1);

        }
    }
}
```

## **491. 递增子序列**

> 给你一个整数数组 `nums` ，找出并返回所有该数组中不同的递增子序列，递增子序列中 **至少有两个元素** 。你可以按 **任意顺序** 返回答案。
> 
> 
> 数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。
> 

```jsx
输入：nums = [4,6,7,7]
输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
```

本题和**90. 子集 II**的不同点我们通过将数组进行排序来标记重复，但是该题要求我们递增子序列不能对原数组进行排序，所以原来的去重方案不可行。

本题的去重方案：

①同一父节点下的同层上使用过的元素就不能再使用了 通过每层初始化设置一个used数组，出现过的nums[i]将used数组设置为1  `used[nums[i] + 100] = 1;`

②所取得元素需要小于子序列的最后一个元素 `nums[i] < path.get(path.size() - 1)` 

回溯三部曲：

1. 参数和返回值：返回值void，参数nums数组，startIndex用来调整下一层开始的位置
2. 终止条件：我们需要遍历整个树，但是根据题目 `path.size() > 1` 
3. 单层搜索逻辑
    
    节点处理：首先去重，如果重复的continue(去重方法上面已经提到了)
    
    递归
    
    回溯
    

```jsx
class Solution {
    List<List<Integer>> reslut=new ArrayList<>();
    List<Integer> path=new ArrayList<>();
    public List<List<Integer>> findSubsequences(int[] nums) {
        trackbacking(nums,0);
        return reslut;
    }
    public void trackbacking(int[] nums,int startIndex) {
        if (path.size() > 1) {
            reslut.add(new ArrayList<>(path));
        }
        int[] used = new int[201];
        for (int i = startIndex; i < nums.length; i++) {
            if (!path.isEmpty() && nums[i] < path.get(path.size() - 1) || used[nums[i] + 100] == 1) {
                continue;
            }
            used[nums[i] + 100] = 1;
            path.add(nums[i]);
            trackbacking(nums, i + 1);
            path.remove(path.size() - 1);
        }
    }
}
```

## **46. 全排列**

> 给定一个不含重复数字的数组 `nums`，返回其 *所有可能的全排列*。你可以 **按任意顺序**返回答案。
> 

```jsx
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

本题是排列问题求解，和我们之前的组合，分割，子集问题不同，排列是有虚的，所以就不能简单的用startIndex，而是**需要一个和nums相同大小的boolean数组**，来存储出现过的情况

回溯三部曲：

1. 参数和返回值：返回值void，参数nums数组，boolean数组used
2. 终止条件`path.size==nums.length`就说明一次排序结束，将结果存储
3. 单层搜索逻辑
    
    节点处理：`if(used[i]==true) continue;` 每次循环一个i将其used[i]设置为true
    
    递归
    
    回溯：需要同时将`used[i]=false;`
    

```jsx
class Solution {
    List<List<Integer>> reslut=new ArrayList<>();
    List<Integer> path=new ArrayList<>();
    public List<List<Integer>> permute(int[] nums) {
        boolean[] used=new boolean[nums.length];
        Arrays.fill(used,false);
        trackbacking(nums,used);
        return reslut;
    }
    public void trackbacking(int[] nums,boolean[] used){
        if(path.size()==nums.length){
            reslut.add(new ArrayList<>(path));
            return;
        }
        for(int i=0;i<nums.length;i++){
            if(used[i]==true) continue;
            used[i]=true;
            path.add(nums[i]);
            trackbacking(nums,used);
            path.remove(path.size()-1);
            used[i]=false;
        }
    }
}
```

## **47. 全排列 II**

> 给定一个可包含重复数字的序列 `nums` ，***按任意顺序*** 返回所有不重复的全排列。
> 

```jsx
输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
```

要求返回所有不重复的全排列，重点还是去重，首先要求需要**对数组进行排序**

去重的方法：`nums[i]==nums[i-1]&&user[i-1]=false` 同一个树枝上是可以重复的，但是同一层是不可以重复的，树脂可重复，数层不可以重复。

回溯三部曲：

1. 参数和返回值：返回值void，参数nums和记录元素是否出现过的数组used
2. 终止条件  `path.size()==nums.length` 
3. 单层搜索逻辑：
    
    处理节点：首先去重，其次需要判断如果一个数层中used[i]==true即使用过，就可以跳过。
    
    递归
    
    回溯
    

```jsx
class Solution {
    List<List<Integer>> reslut=new ArrayList<>();
    List<Integer> path=new ArrayList<>();
    public List<List<Integer>> permuteUnique(int[] nums) {
        boolean[] used=new boolean[nums.length];
        Arrays.fill(used,false);
        Arrays.sort(nums);
        trackbacking(nums,used);
        return reslut;
    }

    public void trackbacking(int[] nums,boolean[] used){
        if(path.size()==nums.length){
            reslut.add(new ArrayList<>(path));
            return;
        }
        for(int i=0;i<nums.length;i++){
            if(i>0&&nums[i-1]==nums[i]&&used[i-1]==false){
                continue;
            }
            if(used[i]==false){
                used[i]=true;
                path.add(nums[i]);
                trackbacking(nums,used);
                path.remove(path.size()-1);
                used[i]=false;
            }
        }
    }
}
```