// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

var levelOrder = function(root) {
  const output = [];
  const queue = [root];
  while (queue[0]) {
      const levels = [];
      const length = queue.length;
      for (let i = 0; i < length; i++) {
          const current = queue.shift();
          if (current.left) queue.push(current.left);
          if (current.right) queue.push(current.right);
          levels.push(current.val)
      }
      output.push(levels)
  }
  return output;
};