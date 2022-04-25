/*

You are given an array of integers and a target number. Write a function that
returns the smallest absolute difference of the closest subset sum to the
target. A subset can be any size and the elements do not have to appear
consecutively in the array.

Positive, negative, and zero allowed. Some numbers may be duplicated.

subsetSumClosest([3, 7, 8, 2], 5) -> 0
Because 3 + 2 -> 5 exactly, the difference between the closest sum and the target
is 5 - 5 = 0.

subsetSumClosest([3, 7, 8, 2], 6) -> 1
The closest subset sum to 6 is either 7 -> 7, or 3 + 2 -> 5. Either of these has
an absolute difference from the target of 1.

subsetSumClosest([1, -3, 2], 5) -> 2
The closest subset sum to 5 is 1 + 2 -> 3, which has an absolute difference
from the target of 2.

subsetSumClosest([], 6) -> 6
An empty array "sums" to 0, which has an absolute difference from the target 6
of 6.

*/

//input array, target
//output integer

//where output integer is the lowest absolute difference between a sum of any elements within input array and target

//create output and initialize it to infinity
//create a helper/recursive function takes in 2 args (targert, index)
  //if index === nums.length 
    //reinitialize output to the smaller between output and target
    //return
  //recursion on helper
    //"take it"
    //leave it
//call helper
//return output

const subsetSumClosest = (nums, target) => {
  let output = Infinity;
  const helper = (target, index) => {
    if (index === nums.length) {
      output = Math.min(Math.abs(target), output);
      return;
    }
    helper(target - nums[index], index + 1);
    helper(target, index + 1);
  }
  helper(target, 0);
  return output;
};

/*

Extension:

Given a set of candidate numbers (nums) (without duplicates) and a target
number (target), find all unique combinations in candidates where the candidate
numbers exactly sum to target.

The candidate numbers will always be presented in ascending order.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
The solution set may be returned in any order.

Input: nums = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

Input: nums = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

Input: nums = [3, 4, 7, 8, 11], target = 5,
A solution set is:
[
]

*/

//declarer and initialize to const variables to empty arrays (output and current)
//create a recursive helper function (target, index)
  //if target === 0 push a of current into output and return
  //if index === nums length or nums[index] is greater than target return

  //push into current nums[index]
  //helper function (target - nums[index], index) = logic for calculations 
  //pop current
  //helper (target, index + 1) = moving the index along

//call helper func
//return output

const generateCombinations = (nums, target) => {
  const current = [], output = []

  const helper = (target, index) => {
    //if subsets match then push
    if (target === 0) output.push(current.slice());
    //if subsets will not match
    if (index === nums.length || nums[index] > target) return;

    //recursion time to find out combos that match
    current.push(nums[index]);
    helper(target - nums[index], index);
    current.pop();
    helper(target, index + 1);
  }
  helper(target, 0);
  return output;
};

module.exports = {subsetSumClosest, generateCombinations};
