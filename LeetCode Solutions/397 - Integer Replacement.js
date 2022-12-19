// Given a positive integer n, you can apply one of the following operations:

// If n is even, replace n with n / 2.
// If n is odd, replace n with either n + 1 or n - 1.
// Return the minimum number of operations needed for n to become 1.

 

// Example 1:

// Input: n = 8
// Output: 3
// Explanation: 8 -> 4 -> 2 -> 1
// Example 2:

// Input: n = 7
// Output: 4
// Explanation: 7 -> 8 -> 4 -> 2 -> 1
// or 7 -> 6 -> 3 -> 2 -> 1
// Example 3:

// Input: n = 4
// Output: 2

//input integer
//output integer
    //that represents the number least number of steps needed to reduce input to 1
    //steps are either
        //if even divide by 2
        //if odd
            //either add 1
            //or subtract 1

//strat 2 approaches
//brute force - use recursion
    //declare output and initialize to infinity
    //create a helper that takes in number, count
        //if count is greater or equal to output return
        //if number is 1
            //update output
            //return
        //if number is divisible
            //recurse
        //if number is not divisible
            //recurse and recurse
    //call helper
    //return output
var integerReplacement = function(n) {
  let output = Infinity;
  const helper = (number, count) => {
      if (count >= output) return;

      if (number === 1) {
          output = Math.min(count, output)
      } else if ( number % 2 === 0) {
          helper(number / 2, count + 1);
      } else {
          helper (number - 1, count + 1);
          helper (number + 1, count + 1);
      }
  }
  helper(n, 0);
  return output;
};