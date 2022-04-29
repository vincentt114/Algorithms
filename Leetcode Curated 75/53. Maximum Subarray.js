// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
 
// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
 
// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */

//input array of integers
//output integer   
    //representing the largest sum of a continuous subarray of input array
//create an output variable and initialize it to first index of array
    //iteriate through nums beginning at 1
    //reassign element at i to be the GREATER of element at i OR element at i + element at i - 1
    //if conditional to reassign output
//return output
    
var maxSubArray = function (nums) {
    let output = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
        if (nums[i] > output) output = nums[i]
    }
    return output;
};