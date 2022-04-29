// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

var productExceptSelf = function(nums) {
  const output = [];
  if (nums.includes(0)) {
      for (let i = 0; i < nums.length; i++) {
          let current = 1;
          let array = [...nums]
          array.splice(i, 1);
          for (let j = 0; j < array.length; j++) {
              current *= array[j];
          }
          output.push(current)
      }
  }
  else {
      let current = 1;
      for (let i = 0; i < nums.length; i++) {
          current *= nums[i]
      };
      for (let j = 0; j < nums.length; j++) {
          output.push(current/nums[j])
      }
  }
  return output;
};

console.log(productExceptSelf(
  [-1,1,0,-3,3]))