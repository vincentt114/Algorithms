// 

//input root of a binary tree
//output integer
    //where integer represents the depth of the binary tree
//call the function recursively
//edge case where root is undefined or null -> return 0
//return the max between left and right calling recursively + 1 // +1 is for each level
var maxDepth = function(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};