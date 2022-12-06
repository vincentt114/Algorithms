// You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

 

// Example 1:


// Input: root = [4,2,7,1,3], val = 5
// Output: [4,2,7,1,3,5]
// Explanation: Another accepted tree is:

// Example 2:

// Input: root = [40,20,60,10,30,50,70], val = 25
// Output: [40,20,60,10,30,50,70,null,null,25]
// Example 3:

// Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
// Output: [4,2,7,1,3,5]


//input root of a bst and a value
//output the root
    //insert a new node of val value into the root

//strat -> recursion
    //create a helper function that takes in a root
        //if root left is null AND val is less than root left -> root left will be a new node passing in val
        //else if root right is null AND val is greater than root right -> root right will be a new node passing in val
        //else if val is greater than root, recurse into root right
        //else recurse into root left
    //call helper
    //return root

var insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val);
  const recurse = node => {
      if (node.left === null && node.val > val) node.left = new TreeNode(val);
      else if (node.right === null && node.val < val) node.right = new TreeNode(val);
      else if (node.val < val) recurse(node.right);
      else recurse(node.left);
  }
  recurse(root);
  return root;
};