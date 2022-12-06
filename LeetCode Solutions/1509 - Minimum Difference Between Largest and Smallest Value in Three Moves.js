// You are given an integer array nums.

// In one move, you can choose one element of nums and change it to any value.

// Return the minimum difference between the largest and smallest value of nums after performing at most three moves.

 

// Example 1:

// Input: nums = [5,3,2,4]
// Output: 0
// Explanation: We can make at most 3 moves.
// In the first move, change 2 to 3. nums becomes [5,3,3,4].
// In the second move, change 4 to 3. nums becomes [5,3,3,3].
// In the third move, change 5 to 3. nums becomes [3,3,3,3].
// After performing 3 moves, the difference between the minimum and maximum is 3 - 3 = 0.
// Example 2:

// Input: nums = [1,5,0,10,14]
// Output: 1
// Explanation: We can make at most 3 moves.
// In the first move, change 5 to 0. nums becomes [1,0,0,10,14].
// In the second move, change 10 to 0. nums becomes [1,0,0,0,14].
// In the third move, change 14 to 1. nums becomes [1,0,0,0,1].
// After performing 3 moves, the difference between the minimum and maximum is 1 - 0 = 0.
// It can be shown that there is no way to make the difference 0 in 3 moves.
// Example 3:

// Input: nums = [3,100,20]
// Output: 0
// Explanation: We can make at most 3 moves.
// In the first move, change 100 to 7. nums becomes [4,7,20].
// In the second move, change 20 to 7. nums becomes [4,7,7].
// In the third move, change 4 to 3. nums becomes [7,7,7].
// After performing 3 moves, the difference between the minimum and maximum is 7 - 7 = 0.

//input array of integers
//output integer
    //that represents the difference between the greatest and lowest element AFTER changing 3 elements to any value

//strat -> sliding scale
    //edge case if nums length is 4 or less return 0
    //sort input array lowest to greatest
    //declare i as 0
    //declare j as length - 4 (represents the highest value, when the lowest is i)
    //declare min at infinity
    //while loop, based on i less than 4 (can only update 3 numbers, so when we change one of the lower numbers, one of the higher numbers remains unchanged)
        //update min
        //increment i and j
    //return min

var minDifference = function(nums) {
  if (nums.length <= 4) return 0;
  nums.sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 4;
  let min = Infinity;

  while (i < 4) {
      min = Math.min(nums[j] - nums[i], min);
      i++;
      j++;
  }
  return min;
};