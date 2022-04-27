/* 
  Given a node representing the root of a binary tree, write a function to check if it is a valid binary *search* tree. 
  
  A binary tree is a valid binary search tree if it satisfies the following constraints:
    - For any given node, the value of ALL of the child nodes in its left branches must be less than its value.
    - For any given node, the value of ALL of the child nodes in its right branches must be greater than its value.
    - The tree contains no duplicate values.

  For example, this would be a valid BST:

         4
       /   \ 
     2      5
   /   \
  1     3

  whereas this would not be a valid BST:

         3
       /   \
     2      5
   /   \
  1    *4*

  because the node with value 4 on the left-hand side of the tree, but it's value is greater than the root node value 3.
  For this to be considered a valid BST the tree would need to look like this:
  
         3
       /   \
     2      5
   /      /
  1     *4*

*/

//input bst head
//output boolean

//recursion
//introduce 2 additional parameters (min and max) and set them to -/+ Infinity
  //base case if tree is falsy return true
  //edge cases if value is less than min or greater than max return false
  //return function 2x
    //for left -> min is value
    //for right -> max is value

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const validBST = (tree, min = -Infinity, max = Infinity) => {
  if (!tree) return true;
  if (tree.value < min || tree.value > max) return false;
  return (
    validBST(tree.left, min, tree.value) &&
    validBST(tree.right, tree.value, max)
  )
};

module.exports = { BinaryTree, validBST };
