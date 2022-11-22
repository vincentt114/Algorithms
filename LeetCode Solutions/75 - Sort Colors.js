// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

//input array
//output array but sorted

//strat
    //iterate through nums starting at index 1
        //sort logic
            //if fits then reset index to 0
    //return nums

var sortColors = function(nums) {

  for (let i = 1; i < nums.length; i++) {
      let current = nums[i];
      let prev = nums[i - 1];
      if (current < prev) {
          let hold = prev;
          nums[i - 1] = current;
          nums[i] = hold;
          i = 0;
      } 
  }
  return nums;
};