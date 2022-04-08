function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

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
  //however reverse bst 
  //reinitialize right to left and left to hold
//use Recursion to dig
  //basecase if root is null 


const bstReverse = root => {
  if (root === null) return;
  const hold = root.left;
  root.left = root.right;
  root.right = hold;
  bstReverse(root.left);
  bstReverse(root.right);
  return root;
};

/*

Extension:

Given an array where elements are sorted in ascending order, convert it to a
height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in
which the depth of the two subtrees of every node never differ by more than 1.

Ex:

Given the sorted array: [0, 3, 4, 6, 8, 9], the output is:

     6 
   /   \
  3     9
 / \   /
0   4 8

Whenever you have two elements in the middle like [1, 4, 7, 8], always
prioritize the rightmost value to place at the top of the tree/subtree,
giving us:

    7
   / \
  4   8
 /
1

(i.e. choose the 7 over the 4 to place at the top of the entire tree, and then
the 4 over the 1 to place at the top of the left subtree. Hint: look up the
Math.ceil function)

*/

//create a helper function w/ 2 pointers (begining and end)
  //base case if (beginning overlaps end)
  //find middle
    //create new node w/ middle
    //create left and right using helper
  //return new node

const sortedArrayToBST = arr => {
  const helper = (i, j) => {
    if (i > j) return null;
    const mid = Math.ceil((i + j) / 2);
    const head = new BinarySearchTree(arr[mid]);
    head.left = helper(i, mid - 1);
    head.right = helper(mid + 1, j)
    return head;
  }
  return helper(0, arr.length - 1)
};

module.exports = {BinarySearchTree, bstReverse, sortedArrayToBST};
