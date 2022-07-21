// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1
 

// Constraints:

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -104 <= target <= 104

//input array and an integer
//output is integer
  //WHERE integer represents the index in which the integer is found or -1 if not found

//use a binary search implemented via a while loop

  //declare a left at 0
  //declare a right at nums.length
//while loop 
  //check if left half is sorted
    //check if its within first half
      //if yes move end to mid
    //else move mid to begin
  //else 
    //check if its within first half
      //if yes move

var search = function(nums, target) {
  let begin = 0;
  let end = nums.length - 1;

  while ( begin <= end ) {
    let mid = Math.floor((begin + end)/2);
    if (nums[mid] === target) return mid;
    //check if left half is sorted
    if (nums[begin] <= nums[mid]) {
      //check if its within first half
      if (nums[begin] <= target && target <= nums[mid]) end = mid - 1;
      else begin = mid + 1;
    }
    //logic for right half
    else {
      if (nums[mid] <= target && target <= nums[end]) begin = mid + 1;
      else end = mid - 1;
    }
  }
  return -1;
};

console.log(search([4,5,6,7,0,1,2], 0))