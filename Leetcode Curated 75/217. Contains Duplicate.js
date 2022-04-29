// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
//input array 
//output boolean
    //true if an element appears at least 2x in nums

//create a cache
//iteriate through the input array
    //fill out the cache so that if the element is the key and its appearance amount is the value
        //if value 2x then return true
//return false
var containsDuplicate = function(nums) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
      if (cache[nums[i]]) return true;
      else cache[nums[i]] = 1;
  }
  return false;
};