// Given two binary trees original and cloned and given a reference to a node target in the original tree.

// The cloned tree is a copy of the original tree.

// Return a reference to the same node in the cloned tree.

// Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

//strat
    //create a helper function that takes in og and cloned
        //if og is falsy return
        //if og == target return clone
        //recurse into left and right
    //call helper

var getTargetCopy = function(original, cloned, target) {
  const helper = (original, cloned) => {
      if (!original) return;
      if (original === target) return cloned;
      return helper(original.left, cloned.left) || helper(original.right, cloned.right)
  };
  return helper(original, cloned)
};