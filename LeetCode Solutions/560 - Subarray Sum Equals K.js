// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

//input array and an integer
//output integer 
    //that represents the number of combos of elements that sum (or alone) equal input integer

//strat
    //declare a map
    //declare a sum and a count == 0
    //enter into a for loop
        //reinitialize sum
        //if map at sum - k then count += map at sum - k
        //if map at sum exists increment
        //else create
    //return count

var subarraySum = function(nums, k) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0, count = 0;
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (map.has(sum - k)) count += map.get(sum - k);
      if (map.has(sum)) map.set(sum, map.get(sum) + 1);
      else map.set(sum, 1)
  }
  return count;
};