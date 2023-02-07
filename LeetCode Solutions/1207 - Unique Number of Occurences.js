// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

 //input array
 //output boolean based on if number of appearances are unique

 //strat
    //sort arr
    //create a set
    //iteriate through arr
        //declare last as last index of current element
        //if set had last - i return false;
        //else add to set last - i
        //update i to last
    //return true;
    
var uniqueOccurrences = function(arr) {
  arr.sort();
  const set = new Set()
  for (let i = 0; i < arr.length; i++) {
      const last = arr.lastIndexOf(arr[i]);
      if (set.has(last - i)) return false;
      else set.add(last - i);
      i = last;
  }
}  