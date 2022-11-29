// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

//input array
//output array of arrays 
    //that represent all possible combos of input array (in order)

//strat
    //declare an output and initialzie to an empty array w/ an empty array
    //declare a hold
    //iterate through nums
        //reinitialize hold to empty array
        //iteriate through output
            //push into hold output, nums
        //push hold into output
    //return output

var subsets = function(nums) {
  let output = [[]], hold = [];
  for (let i = 0; i < nums.length; i++) {
      hold = [];
      for (let arr of output) {
          hold.push([...arr, nums[i]]);
      };
      output.push(...hold);
  };
  return output;
};