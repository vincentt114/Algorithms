// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

//input array
//output integer
    //that represents the number of 'jumps' it takes to reach the end

//strat
    //create an array of nums.length and fill with negative infinity
        //insert as the last element 0
    //iteriating backwards from nums - 2
        //create a slice of array as slice(i, i+nums[i])
        //sort it and if the slice at index of 0 is greater/equal to 0 then update the current element at index to slice at 0 + 1
    //return array at 0

var jump = function(nums) {
  let array = new Array(nums.length).fill(9999);
  array[array.length - 1] = 0;
  for (let i = nums.length - 2; i >= 0; i--) {
      let copy = array.slice(i, i + nums[i] + 1);
      copy.sort(function(a, b) {
          return a - b
      })
      array[i] = copy[0] + 1
  }
  return array[0]
};