// Given the root of a binary tree, return the sum of values of its deepest leaves.
 

// Example 1:


// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
// Example 2:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19

//input root
//output integer
    //output represents the sum of the deepest leaves

//strat
    //create an array called sum and initialize it to empty array
    //create a helper function that takes in 2 args -> node and i
        //if !sum[i] then sum[i] = node.val
        //else sum[i] += nod.val
        //recurse into left and right
    //return sum at sum length - 1

var deepestLeavesSum = function(root) {
  const sum = [];
  const helper = (node, i) => {
      if (!sum[i]) sum[i] = node.val;
      else sum[i] += node.val;
      if (node.left) helper(node.left, i + 1);
      if (node.right) helper(node.right, i + 1)
  }
  helper(root, 0);
  return sum[sum.length - 1]
};