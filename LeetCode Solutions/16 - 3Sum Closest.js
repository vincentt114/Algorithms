// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

//input array, integer
//output integer
    //that represents the sum of 3 elements from input array that is the closest to input integer

//strat
    //iterate through nums and also using 2 pointers to keep track of which elements we're looking at
    //details
        //sort nums array from smallest to largest
        //declare output and define as first 'total'
        //iterate through nums
            //define begin
            //define end
            //enter while loop
                //define total
                //logic for output
                //logic for begin and end
        //return output

var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let output = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
      let begin = i + 1;
      let end = nums.length - 1;
      while (begin < end) {
          const total = nums[i] + nums[begin] + nums[end];
          if (Math.abs(target - total) < Math.abs(target - output)) output = total;
          if (target - total > 0) begin++;
          else end--;
      }
  }
  return output;
};