// Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

 

// Example 1:


// Input: root1 = [2,1,4], root2 = [1,0,3]
// Output: [0,1,1,2,3,4]
// Example 2:


// Input: root1 = [1,null,8], root2 = [8,1]
// Output: [1,1,8,8]

//input 2 trees
//output array
    //array contains all values of nodes within both trees, sorted in ascending order

//strat
    //declare an output array 
    //create a helper function that takes in 1 arg (root)
        //pushes into output array node.val
        //recurse into left and right if exist
    //sort output array
    //return

var getAllElements = function(root1, root2) {
  const output = [];
  const helper = root => {
      output.push(root.val);
      if (root.left) helper(root.left);
      if (root.right) helper(root.right);
  }
  if (root1) helper(root1);
  if (root2) helper(root2);
  output.sort((a, b) => a - b);
  return output;
};