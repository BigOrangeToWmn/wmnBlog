---
title: 二叉树-下
date: 2022-9-30
sidebar: 'auto'
tags:
 - JAVA
 - 二叉树
categories:
 -  JAVA算法
---

## **654. 最大二叉树**

> 给定一个不重复的整数数组 `nums` 。 **最大二叉树** 可以用下面的算法从 `nums` 递归地构建:
> 
> 1. 创建一个根节点，其值为 `nums` 中的最大值。
> 2. 递归地在最大值 **左边** 的 **子数组前缀上** 构建左子树。
> 3. 递归地在最大值 **右边** 的 **子数组后缀上** 构建右子树。
> 
> 返回 *`nums` 构建的 **最大二叉树*** 。
> 

```jsx
输入：nums = [3,2,1,6,0,5]
输出：[6,3,5,null,2,0,null,null,1]
解释：递归调用如下所示：
- [3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。
    - [3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。
        - 空数组，无子节点。
        - [2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。
            - 空数组，无子节点。
            - 只有一个元素，所以子节点是一个值为 1 的节点。
    - [0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。
        - 只有一个元素，所以子节点是一个值为 0 的节点。
        - 空数组，无子节点。
```

解题思路：

1. 在数组当中找到最大的元素作为根结点
2. 在最大元素的左区间为左子树
3. 在最大元素的右区间为右子树

递归三要素：

1. 递归参数和返回值：递归参数为nums数组，左区间和右区间的索引，leftIndex和rightIndex，返回值为最大值的root
2. 递归终止条件：rightIndex-leftIndex<1说明没有元素返回null，=1说明仅有一各元素
3. 各层递归逻辑：
    
    找到区间中的最大元素
    
    以最大元素为分割分别递归左区间和右区间
    

```java
class Solution {
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        return construct(nums,0,nums.length);
    }

     public TreeNode construct(int[] nums,int leftIndex,int rightIndex){
        //没有元素的时候返回null
        if(rightIndex-leftIndex<1){
            return null;
        }
        //仅有一个元素的情况
        if(rightIndex-leftIndex==1){
            return new TreeNode(nums[leftIndex]);
        }
        int maxvalue=nums[leftIndex];
        int maxIndex=leftIndex;
        for(int i=leftIndex+1;i<rightIndex;i++){
            if(nums[i]>maxvalue){
                maxvalue=nums[i];
                maxIndex=i;
            }
        }
        TreeNode root=new TreeNode(maxvalue);
        root.left=construct(nums,leftIndex,maxIndex);
        root.right=construct(nums,maxIndex+1,rightIndex);
        return root;
     }
}
```

## **617. 合并二叉树**

> 给你两棵二叉树： `root1` 和 `root2` 。
> 
> 
> 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，**不为** null 的节点将直接作为新二叉树的节点。返回合并后的二叉树。
> 

```jsx
输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
输出：[3,4,5,5,4,null,7]
```

递归三要素：

1. 递归参数和返回值：参数就是两个二叉树root1和root2，返回值以root1为返回值，所以root2需要加到root1当中
2. 递归终止条件：如果root1和root2中有任意一个为空均返回对方
3. 单层递归逻辑：利用root1为返回值，将 `root1.val+= root2.val;` 并递归左子树和右子树

```java
class Solution {
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        if(root1==null) return root2;
        if(root2==null) return root1;

        root1.val+= root2.val;
        root1.left=mergeTrees(root1.left,root2.left);
        root1.right=mergeTrees(root1.right,root2.right);
        return root1;
    }
}
```

## **700. 二叉搜索树中的搜索**

> 给定二叉搜索树（BST）的根节点 `root`和一个整数值 `val`。
> 

```jsx
输入：root = [4,2,7,1,3], val = 2
输出：[2,1,3]
```

递归三要素：

1. 确定参数和返回值：参数即根节点root和val值，返回值就是val所在的根节点
2. 确定终止条件：`root==null||root.val==val` 
3. 单层递归条件：
    
    因为二叉搜索树的节点是有序的，所以可以有方向的去搜索。
    
    当`val<root.val` 时搜索左节点，反之搜索右结点
    

```java
class Solution {
    public TreeNode searchBST(TreeNode root, int val) {
        if(root==null||root.val==val){
            return root;
        }
        if(val<root.val){
            return searchBST(root.left,val);
        }else{
            return searchBST(root.right,val);
        }
    }
}
```

## **98. 验证二叉搜索树**

> 给你一个二叉树的根节点 `root` ，判断其是否是一个有效的二叉搜索树。
> 
> 
> **有效** 二叉搜索树定义如下：
> 
> - 节点的左子树只包含 **小于** 当前节点的数。
> - 节点的右子树只包含 **大于** 当前节点的数。
> - 所有左子树和右子树自身必须也是二叉搜索树。

```java
输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4
```

验证二叉搜索树，就相当于变成了判断一个序列是不是递增的了

易错点：不可以只单纯的判断左子点小于中间节点，右结点大于中间节点，而需要判断的是左子树的所有节点小于中间节点，右子树得的所有节点大于中间节点

**搜索树需要考虑中序遍历**

中序遍历，一直更新max，一旦发现`root.val<=max.val`，就返回false，注意元素相同时候也要返回false

```java
class Solution {
    TreeNode max;
    public boolean isValidBST(TreeNode root) {
        if(root==null) return true;
        //左
        boolean left=isValidBST(root.left);
        if(!left){
            return false;
        }
        //中
        if(max!=null&&root.val<=max.val){
            return false;
        }
        max=root;

        //右
        boolean right=isValidBST(root.right);
        return right;
    }
}
```

## **530. 二叉搜索树的最小绝对差**

> 给你一个二叉搜索树的根节点 `root` ，返回 **树中任意两不同节点值之间的最小差值** 。
> 
> 
> 差值是一个正数，其数值等于两值之差的绝对值。
> 

```java
输入：root = [4,2,6,1,3]
输出：1
```

看到二叉树搜索就要想到中序遍历，将二叉树变为有序数组，最小之差就是彼此相邻的节点

```java
class Solution {
    TreeNode pre;
    int reslut=Integer.MAX_VALUE;
    public int getMinimumDifference(TreeNode root) {
        if(root==null){
            return 0;
        }
        traversal(root);
        return reslut;
    }

    public void traversal(TreeNode root){
        if(root==null) return;
        //左
        traversal(root.left);
        //中
        if(pre!=null){
            reslut=Math.min(reslut,root.val-pre.val);
        }
        pre=root;
        //右
        traversal(root.right);
        
    }
}
```

## **501. 二叉搜索树中的众数**

> 给你一个含重复值的二叉搜索树（BST）的根节点 `root` ，找出并返回 BST 中的所有 [众数](https://baike.baidu.com/item/%E4%BC%97%E6%95%B0/44796)（即，出现频率最高的元素）。
> 
> 
> 如果树中有不止一个众数，可以按 **任意顺序** 返回。
> 
> 假定 BST 满足如下定义：
> 
> - 结点左子树中所含节点的值 **小于等于** 当前节点的值
> - 结点右子树中所含节点的值 **大于等于** 当前节点的值
> - 左子树和右子树都是二叉搜索树

```java
输入：root = [1,null,2,2]
输出：[2]
```

首先，看到这道题的第一思路是：定义一个map集合，键为root的值，值为root出现的次数，递归将root结点全部添加到map集合当中，最后排序集合值的顺序。但是比较麻烦，并且二叉树搜索考虑中序遍历，是一个有序数组，即结果肯定出现在两个相邻的root当中。

解题思路：

1. 定义全局变量，resList列表用来增加存储符合条件的root结点的值，定义一个出现最大值的频率countMax，count用来统计某个节点出现的次数，pre定义为前一个节点
2. 中序遍历递归，首先是左子树，其次中间部分，处理中间的root
    
    如果pre为空或者pre的值和root的值不相等，令count=1；反之令count++
    
    其次更新countMax,如果count>countMax，先清空列表再将列表中增加root.val，赋值最大count。如果count == countMax，直接增加root.val
    
    将pre赋值root
    
    最后处理递归右子节点
    
3. 遍历列表将其结果添加到数组当中，返回结果

```java
class Solution {
    ArrayList<Integer> resList;
    int countMax;
    int count;
    TreeNode pre;
    public int[] findMode(TreeNode root) {
        resList=new ArrayList<>();
        countMax=0;
        count=0;
        pre=null;
        findMode1(root);
        int[] reslut=new int[resList.size()];
        for(int i=0;i<resList.size();i++){
            reslut[i]=resList.get(i);
        }
        return reslut;

    }
    public void findMode1(TreeNode root){
        if(root==null) return;
        //左
        findMode1(root.left);
        //中
        if(pre==null||root.val!=pre.val) count=1;
        else count++;

        //更新countMax
        if(count>countMax){
            resList.clear();
            resList.add(root.val);
            countMax=count;
        }else if (count == countMax){
            resList.add(root.val);
        }

        pre=root;
        //右
        findMode1(root.right);
    }
}
```

**二叉树搜索一定是需要考虑中序遍历的**

## **236. 二叉树的最近公共祖先**

> 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
> 
> 
> 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。”
> 

```java
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
```

递归三要素：

1. 确定递归的参数和返回值：参数就是root和指定节点p,q  返回值为TreeNode
2. 确定递归终止条件：`root==p||root==q||root==null` 
3. 确定单层递归逻辑
    
    每次递归返回left,right
    
    如果left 和 right都不为空，说明此时root就是最近公共节点。
    
    如果left为空，right不为空，就返回right，说明目标节点是通过right返回的，反之。
    

```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root==p||root==q||root==null) return root;
        TreeNode left=lowestCommonAncestor(root.left,p,q);
        TreeNode right=lowestCommonAncestor(root.right,p,q);

        if(left!=null&&right!=null) return root;
        if(left==null&&right!=null) return right;
        else if (left!=null&&right==null) return left;
        else return null;
    }
}
```

## **235. 二叉搜索树的最近公共祖先**

> 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
> 

```java
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。
```

二叉搜索树考虑是有序的，最近祖先要不是本身要不就是两个节点的区间[p,q]，对于所有的左子树都小于结点值，所有的右子树都大于结点值。

```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root.val>p.val&&root.val>q.val) return lowestCommonAncestor(root.left,p,q);
        if(root.val<p.val&&root.val<q.val) return lowestCommonAncestor(root.right,p,q);
        return root;
        
    }
}
```

## **701. 二叉搜索树中的插入操作**

> 给定二叉搜索树（BST）的根节点 `root`和要插入树中的值 `value`，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据 **保证**，新值和原始二叉搜索树中的任意节点值都不同。
> 

```java
输入：root = [4,2,7,1,3], val = 5
输出：[4,2,7,1,3,5]
解释：另一个满足题目要求可以通过的树是：
```

思路一：迭代

```java
class Solution {
    public TreeNode insertIntoBST(TreeNode root, int val) {
        TreeNode pre=root;
        TreeNode newroot=root;
        if(root==null) return new TreeNode(val);
        while(root!=null){
            pre=root;
            if(root.val>val){
                root=root.left;
            }else if(root.val<val){
                root=root.right;
            }
        }
        if(pre.val>val){
            pre.left=new TreeNode(val);
        }else{
            pre.right=new TreeNode(val);
        }
        return newroot;
    }
}
```

思路二：递归

```java
class Solution {
    public TreeNode insertIntoBST(TreeNode root, int val) {
        if(root==null) return new TreeNode(val);
        if(root.val>val){
            root.left=insertIntoBST(root.left,val);
        }else if(root.val<val){
            root.right=insertIntoBST(root.right,val);
        }
        return root;
    }
}
```

## **450. 删除二叉搜索树中的节点**

> 给定一个二叉搜索树的根节点 **root** 和一个值 **key**，删除二叉搜索树中的 **key** 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
> 

```java
输入：root = [5,3,6,2,4,null,7], key = 3
输出：[5,4,6,2,null,null,7]
```

删除儿茶搜索树的某结点有以下几种可能：

1. 没有找到删除节点，遍历到root==null 直接返回
2. 可以找到删除节点
    
    ①左右节点均为空，直接删除节点返回空节点
    
    ②左子树为空，右子树不为空，删除节点右子树补位
    
    ③右子树为空，左子树不为空，删除节点左子树补位
    
    ④左右子树均不为空，首先寻找得到右子树的最左边节点，将删除节点的左子树节点放到后面，返回删除节点右孩子为新的根节点。
    

```jsx
class Solution {
    public TreeNode deleteNode(TreeNode root, int key) {
        root=delete(root,key);
        return root;
    }
    public TreeNode delete(TreeNode root,int key){
        if(root==null) return null;
        if(root.val>key){
            root.left=delete(root.left,key);
        }else if(root.val<key){
            root.right=delete(root.right,key);
        }else{
            //左边为空返回右边
            if(root.left==null) return root.right;
            //右边为空返回左边
            if(root.right==null) return root.left;
            //寻找删除节点右子树的最左边点
            TreeNode temp=root.right;
            while(temp.left!=null){
                temp=temp.left;
            }
            //将删除节点赋值右子树的最左边点
            root.val=temp.val;
            root.right=delete(root.right,temp.val);
        }
        return root;
    }
}
```

## **669. 修剪二叉搜索树**

> 给你二叉搜索树的根节点 `root`，同时给定最小边界`low`和最大边界 `high`。通过修剪二叉搜索树，使得所有节点的值在`[low, high]`中。修剪树 **不应该** 改变保留在树中的元素的相对结构 (即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，存在 **唯一的答案**。
> 

```jsx
输入：root = [1,0,2], low = 1, high = 2
输出：[1,null,2]
```

递归三要素：

1. 确定参数和返回值   参数就是root节点，[low,high]区间内
2. 递归终止条件：root==null时
3. 确定单层递归逻辑
    
    如果root.val<low，遍历右子区间
    
    如果root.val>high，遍历左子区间
    
    然后再分别一次遍历root.left和root.right
    

```jsx
class Solution {
    public TreeNode trimBST(TreeNode root, int low, int high) {
        if(root==null) return null;
        if(root.val<low){
            return trimBST(root.right,low,high);
        }
        if(root.val>high){
           return trimBST(root.left,low,high);
        }
        root.left=trimBST(root.left,low,high);
        root.right=trimBST(root.right,low,high);
        return root;
    }
}
```

## **108. 将有序数组转换为二叉搜索树**

> 给你一个整数数组 `nums` ，其中元素已经按 **升序** 排列，请你将其转换为一棵 **高度平衡** 二叉搜索树。**高度平衡** 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
> 

```jsx
输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
```

该题要求是高度平衡的二叉搜索树，所以我们去中间值我根节点。

然后分别遍历根节点的左区间和右区间

```jsx
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        return traversal(nums,0,nums.length-1);
    }
    public TreeNode traversal(int[] nums,int left,int right){
        if(left>right) return null;
        int mid=(left+right)/2;
        TreeNode root=new TreeNode(nums[mid]);
        root.left=traversal(nums,left,mid-1);
        root.right=traversal(nums,mid+1,right);
        return root;
    }
}
```

## **538. 把二叉搜索树转换为累加树**

> 给出二叉 **搜索** 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 `node`的新值等于原树中大于或等于 `node.val`的值之和。
> 

```jsx
输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
```

首先从返回结果可以看出遍历顺序是右中左，是一个反中序遍历。

解题思路：

1. 定义一个全局变量sum，用来存储每一次遍历到的root.val
2. 按照右中左的顺序去遍历，当遍历中中节点的时候进行处理
3. 将值迭代，并将root.val=sum;

```jsx
class Solution {
     int sum=0;
    public TreeNode convertBST(TreeNode root) {
        traversal(root);
        return root;
    }
    public void traversal(TreeNode root){
        if(root==null) return;
        //右
        traversal(root.right);
        //中
        sum+=root.val;
        root.val=sum;
        //左
        traversal(root.left);
    }
}
```