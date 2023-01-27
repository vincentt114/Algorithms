// You are given a 0-indexed integer array nums. You have to partition the array into one or more contiguous subarrays.

// We call a partition of the array valid if each of the obtained subarrays satisfies one of the following conditions:

// The subarray consists of exactly 2 equal elements. For example, the subarray [2,2] is good.
// The subarray consists of exactly 3 equal elements. For example, the subarray [4,4,4] is good.
// The subarray consists of exactly 3 consecutive increasing elements, that is, the difference between adjacent elements is 1. For example, the subarray [3,4,5] is good, but the subarray [1,3,5] is not.
// Return true if the array has at least one valid partition. Otherwise, return false.

 

// Example 1:

// Input: nums = [4,4,4,5,6]
// Output: true
// Explanation: The array can be partitioned into the subarrays [4,4] and [4,5,6].
// This partition is valid, so we return true.
// Example 2:

// Input: nums = [1,1,1,2]
// Output: false
// Explanation: There is no valid partition for this array.

//input arr
//output boolean
    //based on whether arr can be partitioned into subarrays following these rules
        //2 equal elements
        //3 equal elements
        //3 elements increasing by 1

//strat - use iteration to DP check for validity up to certain index
    //create an array of nums length + 1 and fill w/ false - call it arr
        //first index will be true
    //iteriate through arr beginning at 2
        //first condiiton
            //if arr[i - 2] is true and nums[i - 1] is equal to nums[i - 2] -> update current element to true
        //second 
            //if i is greater than 3 and there's a valid partition prior to the beginning of this AND conditions for 2nd -> update element to true
        //third
            //if i is greater than 3 and there's a valid partition prior to the beginning of this AND conditions for 3rd -> update element to true
    //return last element of arr

var validPartition = function(nums) {
  const arr = new Array(nums.length + 1).fill(false);
  arr[0] = true;
  for (let i = 2; i < arr.length; i++) {
      //first condition
      if (arr[i - 2] && nums[i - 1] === nums[i - 2]) arr[i] = true;
      //second
      else if (i >= 3 && arr[i - 3] && nums[i - 1] === nums[i - 2] && nums[i - 1] === nums[i - 3]) arr[i] = true;
      //third
      else if (i >= 3 && arr[i - 3] && nums[i - 1] === nums[i - 2] + 1 && nums[i - 2] === nums[i - 3] + 1) arr[i] = true;
  }
  return arr[arr.length - 1];
};