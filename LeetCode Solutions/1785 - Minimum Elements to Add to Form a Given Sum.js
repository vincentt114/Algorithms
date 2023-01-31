// You are given an integer array nums and two integers limit and goal. The array nums has an interesting property that abs(nums[i]) <= limit.

// Return the minimum number of elements you need to add to make the sum of the array equal to goal. The array must maintain its property that abs(nums[i]) <= limit.

// Note that abs(x) equals x if x >= 0, and -x otherwise.

 

// Example 1:

// Input: nums = [1,-1,1], limit = 3, goal = -4
// Output: 2
// Explanation: You can add -2 and -3, then the sum of the array will be 1 - 1 + 1 - 2 - 3 = -4.
// Example 2:

// Input: nums = [1,-10,9,1], limit = 100, goal = 0
// Output: 1

//input array of integers, integer - limit, and integer - goal
//output integer
    //that represents the number of integers (up to limit pos/neg) that must be added to nums, so that the sum is equal to goal

//strat
    //find the total of nums
    //subtract nums from goal
    //divide limit from the remaining
        //round up and then return

var minElements = function(nums, limit, goal) {
  let current = nums.reduce((a, b) => a + b);
  current = Math.abs(goal - current);
  return Math.ceil(current / limit);
};