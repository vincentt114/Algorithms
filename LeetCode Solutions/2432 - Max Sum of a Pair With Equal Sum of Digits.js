// You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

// Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

 

// Example 1:

// Input: nums = [18,43,36,13,7]
// Output: 54
// Explanation: The pairs (i, j) that satisfy the conditions are:
// - (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
// - (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
// So the maximum sum that we can obtain is 54.
// Example 2:

// Input: nums = [10,12,19,14]
// Output: -1
// Explanation: There are no two numbers that satisfy the conditions, so we return -1.

//input array
//output integer

//RULE
    //elements should be broken down into sum of their parts
    //where sum of elements parts appear at least twice
        //return the sum of the largest matching pair (original)

//STRAT
    //create an object
    //iteriate through input
        //cache object so that the values are as follows
            //sum : [original value]
    //declare output and initialize to -1
    //sort through object
        //if value has a length of 2
            //sort value to greatest to least
            //logic for updating output
    //return output

var maximumSum = function(nums) {
  const cache = {};
  
  //filling up the object with key value pair representing - sum : [original elements]
  for (let i = 0; i < nums.length; i++) {
      const string = nums[i] + '';
      let hold = 0;
      for (let j = 0; j < string.length; j++) {
          hold += Number(string[j]);
      };
      if (cache[hold]) cache[hold].push(nums[i]);
      else cache[hold] = [nums[i]];
  };
  
  //updating output via sorting through object
  let output = -1;
  for (let sum in cache) {
      if (cache[sum].length >= 2) {
          cache[sum].sort((a, b) => b - a);
          output = Math.max(output, cache[sum][0] + cache[sum][1]);
      };
  };
  
  return output;
};