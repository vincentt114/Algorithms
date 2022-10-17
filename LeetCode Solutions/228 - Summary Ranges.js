// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
 

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

//input array of integers
//output array of strings
    //where strings represent the continuous uninterrupted sets of integers within input

//strat
    //declare an output array
    //declare a first and initialize it to index of 0
    //declare a current and initialize it to index of 0
    //declare a last and initialize it to null

    //iteriate through nums beginning at index of 1
        //if first is emptry string
            //reassign first to index
            //reassign current to index
        //else if current index === current + 1
            //then reinitialize current to current index
            //assign last to current index
        //else 
            //if last is null, then push '' + first into output
            //else push '' + first + '->' + last
            //reassign first to ''
            //reassign last to null
    //return output

var summaryRanges = function (nums) {

  if (nums.length === 1) return ['' + nums[0]]

  const output = [];
  let first = nums[0];
  let current = nums[0];
  let last = null;

  for (let i = 1; i < nums.length; i++) {
    if (current + 1 === nums[i]) {
      current = nums[i];
      last = nums[i];
    }
    else {
      if (last === null) output.push('' + first);
      else output.push('' + first + '->' + last);
      first = nums[i];
      last = null;
      current = nums[i]
    }
    if (i === nums.length - 1) {
      if (last === null) output.push('' + first);
      else output.push('' + first + '->' + last);
    }
  }

  return output;
};