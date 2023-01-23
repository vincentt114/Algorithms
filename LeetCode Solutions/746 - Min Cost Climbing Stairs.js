// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

 

// Example 1:

// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.
// Example 2:

// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.

//input array of integers
//output integer that represents the lowest cost to reach the 'top'

//strat
    //create an array that consists of the first 2 integers of input array
    //iterate through input array beginning at 2
        //push into array current element + the lower of the last 2 elements of array
    //return the lower of the last integer of arr or 2nd to last

var minCostClimbingStairs = function(cost) {
  const arr = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
      const last = arr[arr.length - 1], last2 = arr[arr.length - 2];
      arr.push(cost[i] + Math.min(last, last2));
  }
  return Math.min(arr[arr.length - 1], arr[arr.length - 2]);
};