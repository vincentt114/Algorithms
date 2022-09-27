// You are given a non-negative integer array nums. In one operation, you must:

// Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
// Subtract x from every positive element in nums.
// Return the minimum number of operations to make every element in nums equal to 0.

 

// Example 1:

// Input: nums = [1,5,0,3,5]
// Output: 3
// Explanation:
// In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
// In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
// In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].
// Example 2:

// Input: nums = [0]
// Output: 0
// Explanation: Each element in nums is already 0 so no operations are needed.

//input array
//output integer

//rules
    //integer represents how many times it takes to reduce all elements to 0 
    //each step is subtracting all non zero numbers by x (x can change)

//strat
    //declare a count and initialize to 0
    //enter into a while loop
        //sort nums lowest to highest
        //shift out all elements that are 0
        //declare lowest and initialize to index of 1
        //use the for each method to subtract by lowest
        //count++
    //return count

var minimumOperations = function(nums) {
  let count = 0;
  
  while (nums.length) {
      //sorting
      nums.sort((a, b) => a - b);
      //removing 0
      while (nums[0] === 0) {
          nums.shift()
      };
      
      const lowest = nums[0];
      nums.forEach((ele, index) => {
          nums[index] = ele - lowest;
      })
      if (nums.length === 0) return count;
      count++;
  }
  
  return count;
};