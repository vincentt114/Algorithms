// You are given the root of a full binary tree with the following properties:

// Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
// Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.
// The evaluation of a node is as follows:

// If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
// Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.
// Return the boolean result of evaluating the root node.

// A full binary tree is a binary tree where each node has either 0 or 2 children.

// A leaf node is a node that has zero children.

// Example 1:

// Input: root = [2,1,3,null,null,0,1]
// Output: true
// Explanation: The above diagram illustrates the evaluation process.
// The AND node evaluates to False AND True = False.
// The OR node evaluates to True OR False = True.
// The root node evaluates to True, so we return true.
// Example 2:

// Input: root = [0]
// Output: false
// Explanation: The root node is a leaf node and it evaluates to false, so we return false.

//input root of binart tree
//output boolean based on whether the root is true or false as per these rules:
    //0 is false
    //1 is true
    //2 is OR (look into roots)
    //3 is AND (look into roots)
//strat
    //create helper function dfs that takes in root
        //returns 0/1 as false/true
        //2 recursively calls dfs passing in left || right
        //3 recusively calls dfs passing in left && right
    //return dfs

var evaluateTree = function (root) {
  const dfs = root => {
    if (root.val === 0) return false;
    if (root.val === 1) return true;
    if (root.val === 2) {
      return dfs(root.left) || dfs(root.right)
    }
    if (root.val === 3) {
      return dfs(root.left) && dfs(root.right)
    }
  }
  return dfs(root)
};