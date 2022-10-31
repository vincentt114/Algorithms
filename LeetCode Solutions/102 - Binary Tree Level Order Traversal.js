// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

//input root of a tree
//output nested array
    //sub arrays consist of all the values of a tree's roots on the same level (left -> right)

//strat
    //declare an output array to hold and return
    //declare a queue array consisting of root 
    //while loop based on queue being truthy
        //declare current and iniitalize to empty array
        //declare currentLevel and initialize to queue length
        //enter into while loop based on currentLevel being truthy
            //declare node and initialize it to queue.shift
            //if node has a left push into queue
            //if node has a right push into queue
            //push node val into current
            //decrement current level
        //push current into output
    //return output

var levelOrder = function (root) {
  const output = [];
  const queue = [root];
  while (queue[0]) {
    const current = [];
    let currentLevel = queue.length;
    while (currentLevel) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      current.push(node.val);
      currentLevel--;
    }
    output.push(current);
  }
  return output;
};