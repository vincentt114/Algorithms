// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

//input array
//output boolean
    //based on whether we can 'jump' to the last index beginning at the 1st index
    //can jump up to the current element's value

//strat
    //declare a current and max 
    //while loop based on current
        //re initialize max 
        //if statement checking max against nums.length - 1
        //else if checking if max is less or equal to current AND current's element being 0
        //increment

var canJump = function(nums) {
  //approach 1
  let current = 0, max = 0;
  while (current < nums.length) {
      max = Math.max(max, current + nums[current]);
      if (max >= nums.length - 1) return true;
      if (max <= current && nums[current] === 0) return false;
      current++;
  }
  
  //approach 2
  let array = new Array(nums.length).fill(false);
  array[nums.length - 1] = true;
  
  for (let i = nums.length - 2; i >= 0; i--) {
      const copy = array.slice(i, i + nums[i] + 1);
      if (copy.includes(true)) array[i] = true;
  }
  return array[0]
};