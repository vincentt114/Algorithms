// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

// Example 1:


// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
// Example 2:


// Input: root = [4,2,7,1,3], val = 5
// Output: []

//input root of a bsst and an integer
//output a root whose value is equal to integer OR null if does not exist

//strat
  //create a dfs helper function
    //if root.val is equal to val then return root
    //else if left recurse elft
    //if right recurse right
  //call helper function
  //return null

var searchBST = function(root, val) {
  const dfs = root => {
      if (!root) return null
      if (root.val === val) return root;
      return dfs(root.left) || dfs(root.right);
  };
  return dfs(root);
};