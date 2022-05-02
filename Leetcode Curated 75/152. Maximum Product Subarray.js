// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

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
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

/**
 * @param {number[]} nums
 * @return {number}
 */

//b/c of the negative rule need to keep track of both highest and lowest 
//declare a past min, past max, result and initialize to first element of array
//iteriate 
    //declare and initialize a current min max and set it to min/max of element at i (in case of 0), element at i * past min (in case of negative rule), element at i * past max
    //reassign past min/max to current min/max
    //reassign result between result and max
//return
var maxProduct = function(nums) {
  let pastMin = nums[0], pastMax = nums[0], result = nums[0]
  for (let i = 1; i < nums.length; i++) {
      const currentMin = Math.min(nums[i], nums[i] * pastMin, nums[i] * pastMax);
      const currentMax = Math.max(nums[i], nums[i] * pastMin, nums[i] * pastMax);
      pastMin = currentMin;
      pastMax = currentMax;
      result = Math.max(result, pastMax)
  }
  return result;
};