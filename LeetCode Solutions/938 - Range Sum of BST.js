// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

//input root, 2 integers
//output integer
    //that is the sum of all values that between low and high integers

//strat
    //declare an output and initialize to 0
    //declare a dfs helper function that takes in root
        //if root's val is in between low and high then sum
        //if root left exist then recurse
        //if root right exist then recurse
    //call helper
    //return output

var rangeSumBST = function(root, low, high) {
  let output = 0;
  const helper = root => {
      if (low <= root.val && root.val <= high) {
          output += root.val;
      }
      if (root.left) helper(root.left);
      if (root.right) helper(root.right);
  }
  helper(root);
  return output;
};