// You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

// For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

// The test cases are generated so that the answer fits in a 32-bits integer.

// Example 1:


// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

// Example 2:

// Input: root = [0]
// Output: 0

//input root of a bst
//output integer
    //that represents the sum of the routes (top to bottom) converted from binary to integer

//strat
    //declare output and initialize to 0
    //declare a helper function/dfs/recursion that takes in 2 args = node and binary
        //if node is falsy return
        //if node.left and node.right are falsy then
            //add to output parseInt(binary + node.val)
        //if node left truthy 
            //recurse calling node.elft and binary + node.val
        //if node right truthy
            //recurse calling node right and binary + node. val
    //call helper (root, '')
    //return helper

var sumRootToLeaf = function(root) {
  let output = 0;
  const helper = (node, binary) => {
      if (!node) return;
      if (!node.left && !node.right) output += parseInt(binary + node.val, 2);
      if (node.left) helper(node.left, binary + node.val);
      if (node.right) helper(node.right, binary + node.val)
  }
  helper(root, '');
  return output;
};