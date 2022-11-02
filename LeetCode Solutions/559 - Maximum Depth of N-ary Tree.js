//input root
//output integer

//strat
    //use recursion/dfs to iteriate down into the tree
        //use a counter arg/parameter to keep track of recursion count
    //have an output that keeps count of the greatest count
    //return output

var maxDepth = function(root) {
  let output = 0;
  const helper = (root, count) => {
      output = Math.max(output, count);
      if (root) {
          root.children.forEach(child => helper(child, count + 1))
      }
  }
  if (root) helper(root, 1)
  return output;
};