// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

 

// Example 1:


// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true
// Example 2:


// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false

//input root of a bst and an integer
//output boolean
    //based on whether or not there exists a pair of root values that sum to k

//strat
    //create a new set
    //create a dfs helper function that takes in root
        //if root is falsy return false
        //if there exists a set value of k - root.val return true
        //else 
            //log into set root.val
            //recurse left or right
    //return helper func

var findTarget = function(root, k) {
  const set = new Set();
  const dfs = root => {
      if (!root) return false;
      if (set.has(k - root.val)) return true;
      else {
          set.add(root.val);
          return dfs(root.left) || dfs(root.right)
      };
  };
  return dfs(root);
};