// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.
// Example 3:

// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.

//input root, integer
//output boolean

//strat
    //declare a helper function that takes in root and sum
        //if root is falsy return false
        //update sum
        //if root.left and right are falsy, logic for checking sum
        //return helper left or right
    //call helper

var hasPathSum = function(root, targetSum) {
  const helper = (root, sum) => {
      if (!root) return false;
      sum += root.val;
      if (!root.left && !root.right) return sum === targetSum;
      return helper(root.left, sum) || helper(root.right, sum)
  }
  return helper(root, 0)
};