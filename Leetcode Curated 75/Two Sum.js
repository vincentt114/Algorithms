// sGiven an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

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

//input (1) array of integers; (2) integer
//output array of 2 integers

//WHERE
  //output of 2 integers are the 2 indexes of (1) array of integers 
  //THAT add up to (2) integer

//create an empty object
//iteriate through nums - track 3 things (element, target - element, index)
  //check if object[target - element] exist
    //if yes return [object[target - element], i]
  //if no then object[element] = index

var twoSum = function(nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if ((target - nums[i]) in obj) return [obj[target - nums[i]], i] 
    obj[nums[i]] = i; 
  }
  
};

console.log(twoSum([2, 7, 11, 15], 9))