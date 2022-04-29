// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

//input array and integer
//output array containing 2 elements
  //wherein the elements are the indexes of 2 different elements within the input array that add up to the input integer

//declare a const cache and initialize it to an empty object
//iteriate through the input array
  //declare a const complement and initialize it to to target - nums[i]
  //check to see if cache[complement] exists 
    //if yes then return [cache[complement], i]
    //if not then add cache[nums[i]]

var twoSum = function (nums, target) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (cache.hasOwnProperty(complement)) return [cache[complement], i]
    else cache[nums[i]] = i
  }
};

console.log(twoSum([2,7,11,15], 9))