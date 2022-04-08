function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, determine the sum of all the values.
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/
//input root
//output integer
  //where we sum upp all the values
  //use scope
const bstSum = root => {
  let output = 0;
  const recurse = root => {
    output += root.value;
    if (root.right) recurse(root.right);
    if (root.left) recurse(root.left);
  }
  recurse(root);
  return output;
};

/*

Extension:
Given the root of a binary search tree, reverse the binary search tree in-place
and return the root. Reverse the tree so that for each node, every number on the
left is greater and every number on the right is lesser.

For example, the original tree:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

reverses to:

     4
   /   \
  7     2
 /     / \
9     3   1
 \
  8

Do this in-place, so that we never use the BinarySearchTree constructor to
create any new nodes in memory.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

//input root
//output root
  //reverse the right nodes with the left inplace

const bstReverse = root => {
  const helper = root => {
    if (root === null) return;
    const hold = root.left;
    root.left = root.right;
    root.right = hold;
    helper(root.right);
    helper(root.left);
  }
  helper(root);
  return root;
};

module.exports = {BinarySearchTree, bstSum, bstReverse};
