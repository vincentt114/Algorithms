//input root 
//output boolean based on whether the tree is symmetrical

//strat
    //edge case if root is null
    //create a helper function that uses dfs/recursion takes in left and right
        //if left and right fasly return true
        //if left or right or val not equal return fals
        //recurse 
    //call helper

var isSymmetric = function(root) {
  const helper = (left, right) => {
      if (!left && !right) return true;
      if (!left || !right || left.val != right.val) return false;
      return helper(left.left, right.right) && helper(left.right, right.left)
  }
  return helper(root.left, root.right)
};