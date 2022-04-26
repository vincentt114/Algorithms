/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/

//create a cache to store
//iteriate through nums so that
  //check to see if object has property target - element at nums index
    //if yes return true
  //const completement = target - element at nums index
  //complement: element at nums index
//return false

var twoSum = function(nums, target) {
 const cache = {};
 for (let i = 0; i < nums.length; i++) {
   const complement = target - nums[i]
   if (cache.hasOwnProperty(complement)) return true;
   else cache[nums[i]] = true;
 }
 return false
};

console.log(twoSum([2, 5, 11, 15], 7))

/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

const threeSum = (arr, target) => { 
  const cache = {};
  //fill out the cache

  //check to see if they add up
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const complement = target - (arr[i] + arr[j]);
      if (cache.hasOwnProperty(complement)) return true;
      else cache[arr[j]] = arr[j]
    }
  }
  return false;
}





module.exports = { twoSum, threeSum };