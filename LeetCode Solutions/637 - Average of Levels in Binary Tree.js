// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].
// Example 2:


// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]

//input tree
//output array of integers
    //where each integer represents the avg value of the node levels

//strat
    //declare an output and initialize to empty array
    //create currLevel var and initialize it to root
    //declare a currVals and initialize to empty arr
    //create a next level var and initialize it to empty array
    //enter into a while loop
        //declare current as currLevel pop
        //logic for left and right to current -> push them into next level
        //push curr's value into currVals
        //if currLevel empty
            //reduce currVals and divide by length then push into output
            //initialize currLevel to next Level
            //initialize next level to empty

var averageOfLevels = function(root) {

  const output = [];
  let currLevel = [root];
  let currValue = [];
  let nextLevel = [];
  
  while (currLevel.length) {
      
      const current = currLevel.shift();
      if (current.left) nextLevel.push(current.left);
      if (current.right) nextLevel.push(current.right);
      currValue.push(current.val);
      
      if (!currLevel.length) {
          console.log(currValue)
          const avg = currValue.reduce((prev,curr) => prev + curr, 0) / currValue.length;
          output.push(avg);
          currLevel = nextLevel;
          nextLevel = [];
          currValue = [];
      }
  }
  
  return output
};