// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

 

// Example 1:

// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.


// Example 2:

// Input: root = [3,3,null,4,2]
// Output: 3
// Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.


// Example 3:

// Input: root = [1]
// Output: 1
// Explanation: Root is considered as good.

//input tree
//output integer
    //integer represents the number of 'good nodes'
    //good node is a node where all the preceding node values are NOT greater than it

//strat
    //declare an output and initialize to 0
    //create a helper func that takes in 2 parameters - node, max
        //if node.val >= max 
            //increment output
        //max logic
        //recurse into left and right if left and right are truthy
    //call helper 
    //return output

var goodNodes = function(root) {
  let output = 0;
  const helper = (node, max) => {
      if (node.val >= max) output++;
      max = Math.max(max, node.val);
      if (node.left) helper(node.left, max);
      if (node.right) helper(node.right, max);
  };
  helper(root, root.val);
  return output;
};