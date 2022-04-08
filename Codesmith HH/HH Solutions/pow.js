/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

/**
 * @name pow - calculates base ^ power iteratively
 * @param {Number} base
 * @param {Number} power
 * @returns {Number}
 *
 *
 * Big O analysis:
 * Time complexity => 0(n) Linear time complexity to the 'power' argument. As you can see we are
 * going on a loop until counter, which starts at the value of 1, is no longer less than power. This means that
 * the time that this algorithm will take to complete is proportional to the value of the 'power'
 * argument.
 * 
 * Space complexity: O(1) constant space complexity. We will create the same amount of variables, and
 * will use/occupy the same amount of memory regardless of the size of any of the function's
 * parameters.
 */


// function to calculate base ^ power iteratively
function pow(base, power) {
  // handle case where power is 0
  if (power === 0) return 1;
  // handle case where power is 1
  else if (power === 1) return base;
  
  // initialize result to 1
  let result = 1;
  // multiple result by base for power times
  for (let counter = 0; counter < power; counter++) {
    result *= base;
  }
  // return result
  return result;
}
console.log(pow(2, 4)); // expect 16 because 2*2*2*2 = 16