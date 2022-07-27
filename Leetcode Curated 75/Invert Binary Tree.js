//input root
//output root
//WHERE
    //we are inverting the subroots of the roots
//use recursion
    //create a hold variable and then flip
    //if there's a left node then recurse
    //same with right

var invertTree = function(root) {
    if (root === null) return root
    const recurse = (root) => {
        const hold = root.left;
        root.left = root.right;
        root.right = hold;
        if (root.left !== null) recurse(root.left)
        if (root.right !== null) recurse(root.right)
    }
    recurse(root)
    return root
};