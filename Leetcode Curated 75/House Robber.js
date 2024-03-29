// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

//input array
//output integer that represents the largest amount that can be stolen
    //cannot steal from adjacent houses

//STRAT
    //edge cases for length of 1 or 2
    //create an array
        //array at 0 = nums[0]
        //array at 1 = nums[1]
        //array at 2 = nums[2]
    //create output
    //iteriate through nums beginning at i = 3
        //array at i = math.max((array[i] + array[i - 2], array[i - 3]))
        //logic for output
    //return 

    var rob = function(nums) {
      if (nums.length === 1) return nums[0];
      if (nums.length === 2) return Math.max(nums[0], nums[1]);
      
      const arr = [nums[0], nums[1], nums[2] + nums[0]]
      let output = Math.max(arr[1], arr[2])
      
      for (let i = 3; i < nums.length; i++) {
          arr[i] = Math.max(nums[i] + arr[i - 2], nums[i] + arr[i - 3])
          output = Math.max(output, arr[i])
      }
      
      return output;
  };