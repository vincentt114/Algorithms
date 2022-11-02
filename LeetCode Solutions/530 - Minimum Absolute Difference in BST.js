// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

// Example 1: 

// Input: root = [4,2,6,1,3]
// Output: 1

//input root of a bast
//output integer
    //integer represents the lowest difference between 2 node values amongst the entire tree

//strat
    //create an empty array
    //push all the values of the tree into the array -> using a dfs recursive helper func
    //create an output
    //sort the array
    //iteriate through the array, update the output based on current element - prev element
    //return output

var getMinimumDifference = function (root) {
  const arr = [];
  const dfs = root => {
    arr.push(root.val);
    if (root.left) dfs(root.left);
    if (root.right) dfs(root.right);
  }
  dfs(root);
  arr.sort((a, b) => a - b)

  let output = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    output = Math.min(output, arr[i] - arr[i - 1])
  }
  return output;
};