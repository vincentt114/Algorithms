// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

 

// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.

//input 2 integers
//output integer
    //that represents the value of dividing the divident by the divisor
    //be sure to math.floor all values
    //cannot use multiplicaiton, division, or mod operator

//strat
    //math.floor both inputs
    //create a negative var and initialize to false
    //if divident is negative then update negative
    //if divisor is negative then update
    //create an output
    //enter into a while loop based on divident >= 0
        //decreemnt divisor frmo dividend
        //incremnt output
    //return output

var divide = function(dividend, divisor) {
    
  if (divisor === 1) return dividend;
  if (dividend === 0) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  
  let negative = false;
  if (dividend < 0) negative = !negative;
  if (divisor < 0) negative = !negative;
  
  dividend = Math.abs(Math.floor(dividend));
  divisor = Math.abs(Math.floor(divisor));
  
  let output = 0;
  while (dividend > 0) {
      dividend -= divisor;
      output++;
  };
  if (dividend < 0) output -= 1
  
  if (negative) return 0 - output;
  else return output;
};