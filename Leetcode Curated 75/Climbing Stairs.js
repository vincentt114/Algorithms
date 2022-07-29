// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

//input integer
//output integer
    //output represents the # of ways to climb input   
        //condition that can climb 1 or 2 steps at a time

//create an array

//0 index is 1
//1st is 2
//beginning at index 2 iteriate based on n's length
    //array[i] = array[i - 1] + array[i - 2]
//return array[n - 1]

// var climbStairs = function(n) {
//     const arr = [];
//     arr[0] = 1;
//     arr[1] = 2;
//     for (let i = 2; i < n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2]
//     }
//     return arr[n - 1]
// };

//create an object to memo info
//if memo[n] then return as is
//else recurse into it
//return memo[n]

var climbStairs = function(n) {
  const memo = {1:1, 2:2}
  const helper = (n) => {
      if (memo[n]) return memo[n];
      memo[n] = helper(n - 1) + helper(n - 2)
      return memo[n]
  }
  return helper(n)
};
