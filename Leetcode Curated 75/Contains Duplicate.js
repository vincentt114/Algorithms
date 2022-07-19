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

//input array of integers
//output boolean

//WHERE if
  //the array contains at least 2 instance of the same lement return true
  //else return false if all elements are unique

//create a cache
  //iteriate thorugh array
    //fill out cache
    //if existing return true
  //return false
var containsDuplicate = function(nums) {
    const cache = {};
    for (let i = 0; i < nums.length; i++) {
      if (!cache[nums[i]]) cache[nums[i]] = 'count'
      else return true;
    }
    return false;
};

console.log(containsDuplicate([1,2,3]))