/*

Given an array nums of n integers and an integer target, find two integers in
nums such that the sum is closest to target. Return the sum of the two
integers. You may assume that each input would have exactly one solution, and
that the array will have at least two elements.

Example:

Given array nums [2, -2, 1] and target = 4.
The sum that is closet to the target is 3. (2 + 1 = 3).

Given array nums = [2, -3, -6, 7, 4] and target = 3.
The sum that is closest to the target is 4. (-3 + 7 = 4).

Given array nums = [3, 1, 4, 3] and target = 6.
The sum that is closest to the target is 6. (3 + 3 = 6).

Solve this problem using any strategy you would like: a naive solution is fine.

Extension:
The naive solution for this problem has O(n^2) time complexity. Can you come up
with a different solution with better time complexity? Hint: first sort the
array, which is O(n*log(n)) time, and see if you can post-process the array in
O(n) time.

*/

//input array, integer
//output integer
  //where output integer are the sum of 2 elements in input array that are closest to input integer

//create a copy of input array and sort it

//create 2 pointers
//create output being target - (elements pointers looking at summed)
  //while loop
    //logic
      //if output === target then return output
    //if 2 pointer elements sum is greater than then subtract 1 from bigger pointer
    //if 2 pointer elements sum is lesser than then add 1 to smaller pointer

const twoSumClosest = (nums, target) => {
  
  const arr = nums.sort((a, b) => a - b)
  
  let i = 0;
  let j = nums.length - 1;
  let closest = Infinity;

  while (i < j) {
    const current = arr[i] + arr[j];
    if (Math.abs(current - target) < Math.abs(closest - target)) closest = current;
    if (current > target) j--;
    else i++;
  }

  return closest
};

console.log(twoSumClosest([3, 1, 4, 3], 6))
module.exports = {twoSumClosest};

