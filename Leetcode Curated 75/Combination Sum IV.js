// Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

// The test cases are generated so that the answer can fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.
// Example 2:

// Input: nums = [9], target = 3
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 1000
// All the elements of nums are unique.
// 1 <= target <= 1000

//input array and integer
//output integer    
//where integer represents the number of distinct combos of nums elements that add up to target

//add a new parameter memo = {}
//base case for 0 and if memo contains target // how we obtain the values

//create a hold and initialize to 0
//enter for loop
    //if target is greater/equal to nums[i]
        //hold = recurse
    //memo[target] = hold // how we are holding past calculations
    //return hold // the last hold will be the initial target 

    var combinationSum4 = function(nums, target, memo = {}) {
      if (target === 0) return 1;
      if (typeof memo[target] != 'undefined') return memo[target];
      
      let hold = 0;
      for (let i = 0; i < nums.length; i++) {
          if (target >= nums[i]) {
              hold += combinationSum4(nums, target - nums[i], memo)
          }
      }
      memo[target] = hold;
      return hold
  };