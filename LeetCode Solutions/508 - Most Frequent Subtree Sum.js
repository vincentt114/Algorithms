// Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.

// The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).

 

// Example 1:


// Input: root = [5,2,-3]
// Output: [2,-3,4]
// Example 2:


// Input: root = [5,2,-5]
// Output: [2]

//input root
//output array of integer(s) that represents the sums that appear the most based on a node summing all of its roots

//strat
    //declare a cache and initialize to empty obj
    //declasre a num appearances and initialize to 0
    //declare a output and initialize to empty array

    //declare a dfs helper func that takes in 1 arg -> node
        //if !node return 0
        //let sum be node.val + dfs(left) + dfs(right)

        //LOGIC for caching sum
            //if no key value pair then create 1 with a value of 1
            //else increment

        //LOGIC for numAppearance
            //if numAppearanc is equal to value
                //push sum into output
            //if numAppearance is less than the value
                //update numAppearance
                //reinitialize output to [sum]
        //return sum    

    //call helper
    //return output

var findFrequentTreeSum = function(root) {
  const cache = {};
  let maxAppear = 0;
  let output = [];
  
  const dfs = node => {
      if (!node) return 0;
      const sum = node.val + dfs(node.left) + dfs(node.right);
      
      if (!cache[sum]) cache[sum] = 1;
      else cache[sum]++;
      
      if (cache[sum] === maxAppear) output.push(sum)
      if (cache[sum] > maxAppear) {
          maxAppear = cache[sum];
          output = [sum];
      }
      
      return sum;
  }
  
  dfs(root);
  return output;
};