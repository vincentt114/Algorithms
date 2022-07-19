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

//input array
//output sum

  // WHERE SUM represents greatest sum of continuous subarray

//declare an output and initialize it to nums[0]
//declare a arr2 which represents the greatest sum achieveable for each subarray ending at that index and initialize it to [nums[0]]
//iteriate through nums beginning at 1
  //if nums[i] < nums[i] + arr2[i - 1] then arr2 push nums[i] + arr2[i - 1]
    //else arr2 push nums[i]
  //if nums[i] + arr2[i - 1] > output, reinitialize output
//return output;

var maxSubArray = function(nums) {
  let output = nums[0];
  const arr2 = [nums[0]];
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i] + arr2[i - 1]) arr2.push(nums[i] + arr2[i - 1]);
    else arr2.push(nums[i]);
    if (output < arr2[arr2.length - 1]) output = arr2[arr2.length - 1];
  }
  return output; 
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))