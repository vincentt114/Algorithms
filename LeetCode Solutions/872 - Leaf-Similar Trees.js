// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Example 1:

// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true

// Example 2:

// Input: root1 = [1,2,3], root2 = [1,3,2]
// Output: false

//input 2 roots
//output boolean
    //boolean is based on whether the end leaf notes are similiar to one another

//strat
    //general - recursion/dfs
    //create 2 arrays for root1 and root 2
    //create a helper function that takes in a root
        //if left and right are null then push into array
        //recurse into left/recurse into right
    //call helper on root1 and root 2
    //compare the 2 arrays
        //if not equal thenr eturn false
    //return true

var leafSimilar = function(root1, root2) {
  const arr1 = [];
  const arr2 = [];
  
  const dfs = (root, arr) => {
      if (!root.left && !root.right) arr.push(root.val);
      if (root.left) dfs(root.left, arr);
      if (root.right) dfs(root.right, arr);
  }
  
  dfs(root1, arr1);
  dfs(root2, arr2);
  
  if (arr1.length != arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) return false;
  }
  return true;
};