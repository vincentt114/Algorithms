// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

 

// Example 1:


// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
// Example 2:


// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

//create a recursive helper function that checks if trees are replicas
    //(sroot, subroot)
        //if !sroot && !subroot return true
        //else if !sroot || !subroot || sroot.val !== subroot.val return false
        //return with lefts and right portions
//create a dfs function
    //(node)
        //if !node return false
        // if (node.val === subroot's.val && helper) return true
        //return left or right

        var isSubtree = function(root, subRoot) {

          const helper = (sroot, subRoot) => {
              if (!sroot && !subRoot) return true;
              else if (!sroot || !subRoot || sroot.val !== subRoot.val) return false;
              return helper(sroot.left, subRoot.left) && helper(sroot.right, subRoot.right)
          }
          
          const dfs = (node) => {
              if (!node) return false;
              if (node.val === subRoot.val && helper(node, subRoot)) return true;
              return dfs(node.left) || dfs(node.right)
          }
          return dfs(root)
      };