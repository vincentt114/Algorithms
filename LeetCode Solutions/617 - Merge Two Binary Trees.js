// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.

//input 2 roots
//output 1 root merged

//strat
    //use dfs/recursion
    //if both roots/nodes are truthy
        //create a new node summing the 2 vals
        //recurse into left and then into right
        //return node
    //else return either truthy nodes

var mergeTrees = function(root1, root2) {
  if (root1 && root2) {
      const node = new TreeNode(root1.val + root2.val);
      node.left = mergeTrees(root1.left, root2.left);
      node.right = mergeTrees(root1.right, root2.right);
      return node;
  }
  return root1 || root2
};