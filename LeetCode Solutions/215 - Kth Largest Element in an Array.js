// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

//input array and an integer
//output integer
    //that represents the integer'th greatest element
//strat
    //sort input array
    //return sort[k - 1]

    var findKthLargest = function(nums, k) {
      nums = nums.sort((a, b) => b - a);
      return nums[k - 1]
  };