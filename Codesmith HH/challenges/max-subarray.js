/*
You are given an array of integers with both positive and negative numbers.
A valid subarray is any slice of consecutive elements from the array.
(
  e.g. the following are some valid subarrays of [3, 11, 2, 7, 4]
  [3, 11, 2]
  [11, 2, 7]
  [2]
  [3, 11, 2, 7, 4]
)
Find the subarray with the largest sum from the input array.

e.g.
input = [1, -2, 3, 10, -4, 7, 2, -5]
maxSubarray(input); 
// returns 18 from subarray [3, 10, -4, 7, 2]

input2 = [15, 20, -5, 10]
maxSubarray(input2); 
// returns 40 from subarray [15, 20, -5, 10]
*/

//input arr
//output a slice of the arr
  //where the slice represents the largest sum of consecutive elements w/in the array

//helper function that adds up the entire arr or subarr
  //reduce method

//sliding windows
  //left one 
  //right one

//compare them against one another within a while loop
  //while loop can increment the left or right window depending on what's greater 
  //have a variable w/in scope to determine the greatest current sum 

const maxSubarray = (arr) => {
  
  const helper = (arr) => {
    return arr.reduce((acc, ele) => {
      acc += ele;
      return acc
    }, 0) || -Infinity
  }

  let l = 0;
  let r = arr.length;
  let max = -Infinity;

  while (l != r) {
    let entire = helper(arr);
    let left = helper(arr.slice(l, r - 1));
    let right = helper(arr.slice(l + 1, r));

    let greater = Math.max(entire, left, right);
    if (greater > max) max = greater;
    
    if (left > right) r -= 1;
    else l += 1;
  }

  return max
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))

/*
  Extension: solve in linear time and constant space
  Hint: Kadane's Algorithm
*/

const kadanesMaxSubarray = (arr) => {
  
}

module.exports = { maxSubarray, kadanesMaxSubarray };
