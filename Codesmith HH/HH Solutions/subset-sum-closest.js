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

const subsetSumClosest = (nums, target) => {
  let minDifference = Infinity;
  const process = (target, index) => {
    if (index === nums.length) {
      minDifference = Math.min(minDifference, Math.abs(target));
      return;
    }
    
    process(target - nums[index], index + 1);
    process(target, index + 1);
  };
  
  process(target, 0);
  return minDifference;
}

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
The solution set combinations may be returned in any order. However, each
individual combination must be presented in ascending order.

Input: nums = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
also returning
[
  [2,2,3],
  [7]
]
would be valid too.

Input: nums = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
(rearrangements of the arrays are valid too, as long as each array has the
numbers in ascending order)


Input: nums = [3,4,7,8,11], target = 5,
A solution set is:
[
]
because there are no solutions possible

*/

const generateCombinations = (nums, target) => {
  const subsets = [];
  const curr = [];
  
  const processSubset = (target, index) => {
    if (target === 0) {
      subsets.push(curr.slice());
      return;
    }
    if (nums[index] > target || index === nums.length) return;
    
    curr.push(nums[index]);
    processSubset(target - nums[index], index);
    curr.pop();
    processSubset(target, index + 1);
  };
  
  processSubset(target, 0);
  return subsets;
}

module.exports = {subsetSumClosest, generateCombinations};
