//input root
//output boolean
    //WHERE true if BST is valid else false

//use recursion
    //if left then check left
        //recurse
    //if right then check right
        //recurse
//return true

const isValidBST = (root) => {
    const helper = (root, min, max) => {
        if (!root) return true;
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;
        return helper(root.left, min, root.val) && helper(root.right, root.val, max)
    }
    return helper(root, null, null)
}