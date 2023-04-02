---
title: 二叉树-中
date: 2022-9-20
sidebar: 'auto'
tags:
 - JAVA
 - 二叉树
categories:
 -  JAVA算法
---

## ****104.二叉树的最大深度****

该题使用递归完成

```java
class solution {
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int leftDepth = maxDepth(root.left);
        int rightDepth = maxDepth(root.right);
        return Math.max(leftDepth, rightDepth) + 1;
    }
}
```

## **559. N 叉树的最大深度**

> 给定一个 N 叉树，找到其最大深度。
> 
> 
> 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
> 

```java
输入：root = [1,null,3,2,4,null,5,6]
输出：3
```

```java
class Solution {
    public int maxDepth(Node root) {
        if(root==null) return 0;
        int depath=0;
        if(root.children!=null){
            for(Node next:root.children){
                depath=Math.max(depath,maxDepth(next));
            }
        }
        return depath+1;
        
    }
}
```

## ****111.二叉树的最小深度****

使用递归实现

```java
class Solution {
    public int minDepth(TreeNode root) {
        if(root==null) return 0;
        int depathLeft=minDepth(root.left);
        int depathRight=minDepth(root.right);
        if(root.left==null) return depathRight+1;
        if(root.right==null) return depathLeft+1;
        return Math.min(depathRight,depathLeft)+1;
    }
}
```

## **222. 完全二叉树的节点个数**

> 给你一棵 **完全二叉树**的根节点 `root`，求出该树的节点个数。
> 

```java
输入：root = [1,2,3,4,5,6]
输出：6
```

思路一：递归

```java
class Solution {
    public int countNodes(TreeNode root) {
        if(root==null) return 0;
        return countNodes(root.left)+countNodes(root.right)+1;
    }
}
```

思路二：迭代

```java
class Solution {
    public int countNodes(TreeNode root) {
        if(root==null) return 0;
        Queue<TreeNode> que=new LinkedList<>();
        que.offer(root);
        int result=0;
        while(!que.isEmpty()){
            int size=que.size();
            while(size-->0){
                TreeNode node=que.poll();
                result++;
                if(node.left!=null) que.offer(node.left);
                if(node.right!=null) que.offer(node.right);
            }
        }
        return result;
    }
}
```

## **110. 平衡二叉树**

> 给定一个二叉树，判断它是否是高度平衡的二叉树。
> 

```java
输入：root = [3,9,20,null,null,15,7]
输出：true
```

**思路一：递归**

- 二叉树节点的深度：指从根节点到该节点的最长简单路径边的条数。
- 二叉树节点的高度：指从该节点到叶子节点的最长简单路径边的条数。

判断高度是否平衡，我们需要使用后序遍历，计算左子节点和右子节点的高度，如果高度差大于1则不是平衡二叉树

**递归三要素：**

1. 确定参数和返回值   参数就是root，返回值可以用-1来标记不合符平衡树标准的
2. 明确终止条件，`root==null`
3. 明确单层递归的逻辑  分别递归求左子树的高度和右子树的高度，再计算高度差值

```java
class Solution {
    public boolean isBalanced(TreeNode root) {
        return getHeight(root)!=-1;
    }
    public int getHeight(TreeNode root){
        if(root==null){
            return 0;
        }
        int leftHeight=getHeight(root.left);
        if(leftHeight==-1){
            return -1;
        }
        int rightHeight=getHeight(root.right);
        if(rightHeight==-1){
            return -1;
        }
        if(Math.abs(leftHeight-rightHeight)>1){
            return -1;
        }
        return Math.max(leftHeight,rightHeight)+1;
    }
}
```

思路二：迭代（思路复杂繁琐这里忽略了，后序遍历+层序遍历求高度）

## **257. 二叉树的所有路径、**

> 给你一个二叉树的根节点 `root` ，按 **任意顺序** ，返回所有从根节点到叶子节点的路径。
> 
> 
> **叶子节点** 是指没有子节点的节点。
> 

```java
输入：root = [1,2,3,null,5]
输出：["1->2->5","1->3"]
```

解题思路：

1. 设置空列表保存返回结果，设置一个路径空链表保存每一条路径
2. traversal函数迭代，迭代的参数为root，path(保存路径),reslut(保存最终结果)
    
    使用前序遍历首先将中间值添加到path
    
    迭代终止条件结点的左右子结点均为空
    
    设置一个StringBuilder，遍历path列表将其添加到StringBuilder中，最后将每一次遍历的路径的StringBuilder添加到最终结果reslut中。
    

```java
class Solution {
     public List<String> binaryTreePaths(TreeNode root) {
        List<String> reslut=new ArrayList<>();
        if(root==null) return reslut;
        List<Integer> path=new ArrayList<>();
        traversal(root,path,reslut);
        return reslut;
    }
    public void traversal(TreeNode root,List<Integer> path,List<String> reslut){
        path.add(root.val);
        if(root.left==null&&root.right==null){
            StringBuilder sb=new StringBuilder();
            for(int i=0;i<path.size()-1;i++){
                sb.append(path.get(i)).append("->");
            }
            sb.append(path.get(path.size()-1));
            reslut.add(sb.toString());
        }
        if(root.left!=null){
            traversal(root.left,path,reslut);
						.//回溯
            path.remove(path.size()-1);
        }
        if(root.right!=null){
            traversal(root.right,path,reslut);
						//回溯
            path.remove(path.size()-1);
        }
    }
}
```

## **404. 左叶子之和**

> 给定二叉树的根节点 `root`，返回所有左叶子之和。
> 

```java
输入: root = [3,9,20,null,null,15,7] 
输出: 24 
解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
```

节点A的左孩子不为空，且左孩子的左右孩子都为空（说明是叶子节点），那么A节点的左孩子为左叶子节点

**递归三要素：**

1. 确定参数和返回值  参数需要传入root，返回左节点之和int
2. 确定终止条件  `root==null`即不存在左右节点
3. 明确单层递归的逻辑 
    
    当`root.left!=null&&root.left.left==null&&root.left.right==null` 即为左子结点的值，我们将其分为左节点的左子节点和右结点的左子节点，分别去计算并相加。
    

```java
class Solution {
    public int sumOfLeftLeaves(TreeNode root) {
        if(root==null) return 0;
        int left=sumOfLeftLeaves(root.left);
        int right=sumOfLeftLeaves(root.right);
        if(root.left!=null&&root.left.left==null&&root.left.right==null){
            left=root.left.val;
        }
       int sum=left+right;
       return sum;
    }
}
```

## **513. 找树左下角的值**

> 给定一个二叉树的 **根节点** `root`，请找出该二叉树的 **最底层 最左边** 节点的值。
> 
> 
> 假设二叉树中至少有一个节点。
> 

```java
输入: root = [2,1,3]
输出: 1
```

本题要求我们要找到最后一层，即深度最大的左子树值

**递归三要素：**

1. 确定参数和返回值，参数为root和depth(每一次循环都需要更新depth)，无返回值直接将reslut赋值，最前面将reslut定义为了全局变量
2. 递归终止条件：①该节点的左右子树都为空 ②最大深度(每次都给depth赋值给Deep)
3. 确定单层递归逻辑

```java
class Solution {
    int Deep=-1;
    int reslut=0;
    public int findBottomLeftValue(TreeNode root) {
        reslut=root.val;
        fintLeft(root,0);
        return reslut;
    }
    public void fintLeft(TreeNode root,int depth){
        if(root==null) return;
        if(root.left==null&&root.right==null){
            if(depth>Deep){
                reslut=root.val;
                Deep=depth;
            }
        }
        if(root.left!=null) fintLeft(root.left,depth+1);
        if(root.right!=null) fintLeft(root.right,depth+1);
    }
}
```

## **112. 路径总和**

> 给你二叉树的根节点 `root`和一个表示目标和的整数 `targetSum`。判断该树中是否存在 **根节点到叶子节点**的路径，这条路径上所有节点值相加等于目标和 `targetSum`。如果存在，返回 `true`；否则，返回 `false`。
> 

```java
输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
```

```java
class Solution {
     public boolean hasPathSum(TreeNode root, int targetSum) {
        if(root==null) return false;
        if(root.left==null&&root.right==null){
            return targetSum==root.val;
        }
        return hasPathSum(root.left,targetSum-root.val)||hasPathSum(root.right,targetSum-root.val);
    }
}
```

## **113. 路径总和 II**

> 给你二叉树的根节点 `root` 和一个整数目标和 `targetSum` ，找出所有 **从根节点到叶子节点** 路径总和等于给定目标和的路径。
> 
> 
> **叶子节点** 是指没有子节点的节点。
> 

```java
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
```

```java
class Solution {
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        List<List<Integer>> reslut=new ArrayList<>();
        List<Integer> path=new ArrayList<>();
        if(root==null) return reslut;
        path(root,path,reslut,targetSum);
        return reslut;
    }
    public void path(TreeNode root,List<Integer> path,List<List<Integer>> reslut,int targetSum){
        path.add(root.val);
        if(root.left==null&&root.right==null){
            if(targetSum-root.val==0){
                reslut.add(new ArrayList<>(path));
            }
        }
        if(root.left!=null){
            path(root.left,path,reslut,targetSum-root.val);
            path.remove(path.size()-1);
        }
        if(root.right!=null){
            path(root.right,path,reslut,targetSum-root.val);
            path.remove(path.size()-1);
        }
    }
}
```

## **106. 从中序与后序遍历序列构造二叉树**

> 给定两个整数数组 `inorder`和 `postorder`，其中 `inorder`是二叉树的中序遍历， `postorder`是同一棵树的后序遍历，请你构造并返回这颗 *二叉树* 。
> 

```java
输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
输出：[3,9,20,null,null,15,7]
```

中序数组和后续数组的分割思想：

1. 如果数组为空，则说明是空节点
2. 数组不为空，取后序数组的最后一个元素为结点元素
3. 在中序数组当中以后续数组最后一个元素为结点分隔中序数组的左结点和右节点
4. 再切割后续数组的左节点和右节点
5. 递归分别处理左区间和右区间

解题思路：

1. 定义一个map集合，将中序数组放入到map当中，键为中序数组的元素，值为中序数组的索引
2. 开始进行递归
    
    ①确定参数和返回值，参数是中序数组和后序数组，中序数组开始和结束索引，后续数组开始和结束索引，返回值为所求的前序排列的二叉树root
    
    ②递归终止条件，`inbegin>=inend||posbegin>=postend` 
    
    ③确定单层递归逻辑
    
    在inorde里面找到postorder的最后一个元素的索引，作为分割线
    
    分别求root的左子树和右子树
    
    对于左子树：中序数组：inbegin—rootIndex，后序数组：postbegin—postbegin+(rootIndex-inbegin)
    
    对于右子树：中序数组：rootIndex+1—inend，后序数组：postbegin+(rootIndex-inbegin)—postend-1
    

```java
class Solution {
    Map<Integer,Integer> map;
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        map=new HashMap<>();
        for(int i=0;i<inorder.length;i++){
            map.put(inorder[i],i);
        }
        return findeNode(inorder,0,inorder.length,postorder,0,postorder.length);
    }
    public TreeNode findeNode(int[] inorder,int inbegin,int inend,int[] postorder,int posbegin,int postend){
        if(inbegin>=inend||posbegin>=postend){
            return null;
        }
        //找到post的最后一个点
        int rootIndex = map.get(postorder[postend - 1]);
        int lenOfleft=rootIndex-inbegin;
        //最后一个点放入到root结点当中
        TreeNode root=new TreeNode(inorder[rootIndex]);

        root.left=findeNode(inorder,inbegin,rootIndex,postorder,posbegin,posbegin+lenOfleft);
        root.right=findeNode(inorder,rootIndex+1,inend,postorder,posbegin+lenOfleft,postend-1);

        return root;
    }
}
```

## **105. 从前序与中序遍历序列构造二叉树**

> 给定两个整数数组 `preorder`和 `inorder` ，其中 `preorder` 是二叉树的**先序遍历**， `inorder`
 是同一棵树的**中序遍历**，请构造二叉树并返回其根节点。
> 

```java
输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]
```

和上一题类似

```java
class Solution {
    Map<Integer,Integer> map;
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        map=new HashMap<>();
        for(int i=0;i<inorder.length;i++){
            map.put(inorder[i],i);
        }
        return findeNode(preorder,0,preorder.length,inorder,0,inorder.length);
    }
    public TreeNode findeNode(int[] preorder,int prebegin,int preend,int[] inorder,int inbegin,int inend){
        if(inbegin>=inend||prebegin>=preend){
            return null;
        }
        //找到post的最后一个点
        int rootIndex = map.get(preorder[prebegin]);
        int lenOfleft=rootIndex-inbegin;
        //最后一个点放入到root结点当中
        TreeNode root=new TreeNode(inorder[rootIndex]);

        root.left=findeNode(preorder,prebegin+1,prebegin+lenOfleft+1,inorder,inbegin,rootIndex);
        root.right=findeNode(preorder,prebegin+lenOfleft+1,preend,inorder,rootIndex+1,inend);

        return root;
    }
}
```