// <!-- Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. -->

//input arr
//output integer

//WHERE output represents the highest possible product made up of a contiguous subarray

//ISSUES
//need to account for double negatives within the arr

//STRAT
  //keep track of past min and max
  //create a output that changes depending on which is larger output/max

var maxProduct = function(nums) {
  let output = nums[0];
  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const options = [nums[i], nums[i] * min, nums[i] * max]
    min = Math.min(...options);
    max = Math.max(...options);
    output = Math.max(output, max)
  }
  return output
};

console.log(maxProduct([2, -5,-2, -4, 3]))