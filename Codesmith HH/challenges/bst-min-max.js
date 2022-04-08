function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}


/*

Given the root of a binary search tree, determine the difference of the maximum
and minimum value.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

returns 8, becuase 9 - 1 = 8

*/

//input bst root
//output integer
  //where integer = max value - min value
//use recursion to dig into left most and right most and subtract accordingly

const bstMinMax = root => {
  let max = root, min = root;
  while (max.right) max = max.right;
  while (min.left) min = min.left;
  return max.value - min.value;
};

/*

Extension: (not necessarily related in technique to above problem, but
nevertheless still a BST problem)

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
given nodes "p" and "q" in the BST. Return the LCA node itself.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

The LCA of node 1 and node 3 is node 2.
The LCA of node 8 and node 9 is node 9.
The LCA of node 2 and node 8 is node 4.

*/

//ensure that p and q are in correct order (p's value is smaller than q's)
//lca RULES
  //q will always be larger than
    //if q is smaller than move to the left  
  //p will always be smaller
    //if p is larger than move to the right

const lowestCommonAncestor = (root, p, q) => {
  if (p.value > q.value) return lowestCommonAncestor(root, q, p);

  if (q.value < root.value) return lowestCommonAncestor(root.left, p, q)
  else if (p.value > root.value) return lowestCommonAncestor(root.right, p, q)
  else return root;
};

module.exports = {BinarySearchTree, bstMinMax, lowestCommonAncestor};
