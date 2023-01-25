// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

 

// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
// Example 2:

// Input: arr = [1,1]
// Output: 1

//input array of integers
//output integer
    //that represents the element that appears more than 25% of the time

//strat
    //declare a len var and initialize to arr length
    //iteriate through arr
        //begin as i
        //end as findLastIndexOf ele at ith index
        //if end - begin / len > .25 then return value at i
        //else i = end

var findSpecialInteger = function(arr) {
  const len = arr.length;
  for (let i = 0; i < arr.length; i++) {
      const begin = i;
      const end = arr.lastIndexOf(arr[i]);
      if ((end + 1 - begin) / len > .25) return arr[begin];
      else i = end;  
  }
};