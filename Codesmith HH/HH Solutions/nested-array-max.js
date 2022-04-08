
/* 

Write a function to find the largest number in an arbitrarily nested array. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all elements in each array are numbers.

Ex:

const arrFlat = [1, 3, 10, 6];
nestedArrMax(arrFlat);
-> 10

const arrNested = [1, [3, [10], 6]];
nestedArrMax(arrNested);
-> 10

*/

// Linear Recursive Solution
// Time Complexity: O(n)
// Space Complexity: O(1)
// Advantages - better space complexity! We're not creating any new arrays.
const nestedArrMax = arr => {
  let max = arr.length ? -Infinity : undefined;

  arr.forEach(el => { 
    // check if the element is an array
    // if it is, recursively find largest value from that array 
    // compare largest value from sub array with the current max
    if (Array.isArray(el)) max = Math.max(nestedArrMax(el), max);
    // check if max is still undefined or current element is greater than max
    // if it is, set max to current element
    if (!max || el > max) max = el;
  });

  return max;
};


/*

Extension:
Write a function to find the largest number in a nested array, up to and including a given level. 
Return the largest number without going deeper in the nested array than the specified level.
Assume all elements in each array are numbers.

The original array is considered to be at depth 1, any inner array is depth 2, etc.

Ex:

const arrNested = [1, [3, [10], 6]];
nestedArrMaxLevel(arrNested, 1);
-> 1

nestedArrMaxLevel(arrNested, 2);
-> 6

nestedArrMaxLevel(arrNested, 3);
-> 10

*/

// Extension: Linear Recursive Solution
// Time Complexity: O(n)
// Space Complexity: O(1)
// Similar approach to the recursive solution for the standard problem
// Decrement level with each turn, and return the current max if we're at level 1

const nestedArrMaxLevel = (arr, level) => {
  let max = arr.length ? -Infinity : undefined;

  arr.forEach(el => {
    if (Array.isArray(el)) {
      // if level is 1, we've hit the deepest level we're allowed to go to - no more recursion
      if (level === 1) return max;    
      // find max of nested array, decrementing level
      max = Math.max(nestedArrMaxLevel(el, level - 1), max); 
    }  
    if (!max || el > max) max = el;
  });

  return max;
};

module.exports = {nestedArrMax, nestedArrMaxLevel};