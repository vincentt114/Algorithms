// Given the root of a binary tree, return the inorder traversal of its nodes' values.

//input root of a binary tree
//output array of binary tree's values in order (left to right)

//strat 
    //create an arr 
    //create an output
    //enter into while loop based on conditions - root truthy or arr.length 
        //if root truthy
            //push root into arr
            //root = root.lefyt
        //else 
            //root = arr.pop
            //push root.value into output
            //root = root.right


var inorderTraversal = function(root) {
  const arr = [], output = []
  
  while (root || arr.length) {
      if (root) {
          arr.push(root);
          root = root.left;
      }
      else {
          root = arr.pop();
          output.push(root.val);
          root = root.right;
      }
  }
  return output;
};