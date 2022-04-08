/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 * 
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 * 
 * Bonus: Solve in constant space complexity.
 */

/**
 * 1. Generate all permutations of string and check if each is palindrome
 * 
 * - Input = 'abc' -> ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'] => false
 * - Input = 'aab' -> ['aab', 'aba', 'baa'] => true ('aba')
 * 
 * Time Complexity: O(n!n)
 * Space Complexity: O(n!)
 */
const permPalin = (str) => {
  // if input is not a string
  if (typeof str !== 'string') return false;
  // if input is an empty string
  if (str === '') return true;


  // helper functions permute, isPalindrome, and swap
  const permute = (string, start) => {
    if (start === string.length - 1) return array.push(string);

    for (let i = start; i < string.length; i++) {
      string = swap(string, start, i);
      permute(string, start + 1);
      string = swap(string, start, i);
    }
  }

  const isPalindrome = string => {
    // sanitize string
    const newString = string.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

    for (let i = 0; i < Math.floor(newString.length / 2); i++) {
      if (newString[i] !== newString[(newString.length - 1) - i]) return false;
    }

    return true;
  }

  const swap = (string, i, j) => {
    const arr = string.split('');
    [arr[j], arr[i]] = [arr[i], arr[j]];
    return arr.join('');
  }

  // array to store permutations of string
  const array = [];

  // populate array with permutations
  permute(str, 0);

  // iterate through permutation array to find if any strings are palindromes
  for (let i = 0; i < array.length; i += 1) {
    if (isPalindrome(array[i])) return true
  }

  // if no palindrome detected in array, return false
  return false;

}

/**
 * 2. Memoize string and check for appropriate number of odd occurences
 * 
 * - If string length is even, there should be no odd character frequencies
 * - If string length is odd, there should be one odd character frequency
 * 
 * - Memoized object examples
 * => { 'a': 2, 'b': 4, 'c': 1 } 
 *  - string length = 7 & one odd character frequency => true
 * => { 'd': 3, 'e': 5} 
 *  - string length = 8 & two odd character frequencies => false
 * => { 'f': 2, 'g': 4 }
 *  - string length = 6 & zero odd character frequencies => true
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 */
const permPalinII = str => {
  // if input is not a string
  if (typeof str !== 'string') return false;
  // if input is an empty string
  if (str === '') return true;

  const cache = {};

  // determine whether string length is even or odd
  const strLengthEven = str.length % 2 === 0;

  // populate cache with characters as keys,
  // and whether or not each character occurs an even (0) or odd (1) amount of times
  // - like bit flipping => 'b' occurs 5 times => {'b': 1}, 'a' occurs 4 times => {'a': 0}
  str.split('').forEach((char) => {
    cache[char] = cache[char] === 1 ? 0 : 1;
  });

  // calculates how many 1's exist as values in the object - the number of characters with odd frequencies
  const oddFreqChars = Object.entries(cache).reduce((a, b) => {
    return b[1] > 0 ? a + 1 : a
  }, 0)

  // if string length is even and no odd character frequencies => true
  // else if string length is odd and only one odd character frequency => true
  // else false
  if (strLengthEven && !oddFreqChars) return true;
  else if (!strLengthEven && oddFreqChars === 1) return true;
  else return false;

}

/**
* 3. Storing frequency of characters in an integer (BigInt)
* 
* => Very similar implementation to permPalinII, but achieves constant space
*    by using an integer to memoize the character frequencies.
* 
* - If string length is even, the bitVector should be 0.
* - If string length is odd, the bitVector should contain one bit of value 1
* 
* Time Complexity: O(n)
* Space Complexity: O(1)
* 
* Note: Use of BigInt included because JavaScript natively uses 53-bit integers,
* but to store frequencies of character codes 0-9, a-z, and A-Z, 
* we need to have at least 128 indices to work with => 'z'.charCodeAt() = 122
* BigInt's implementation allows for this headroom, but all operations and comparisons
* must be made by the same type, which is why numbers like 0n, 1n, and BigInt(x) are used.
*/
const permPalinAdvanced = str => {
  /**
   * toggles specific bit at index on the bitVector
   * 
   * @param {BigInt} bitVector 
   * @param {Integer} index 
   * 
   * toggle(0b1000, 3) => bitVector = 0
   * toggle(0, 3) => bitVector = 0b1000
   */
  const toggle = (bitVector, index) => {
    // index out of bounds
    if (index < 0) return bitVector;

    // mask used for comparison against bitVector, detecting whether specific bit is 1 or not
    // index = 3, mask = 0b1000
    const mask = BigInt(1 << index);

    // if ANDing bitVector and mask results in 0, the specific bit at index will be set to 1
    // 0b1000 & 0b100 = 0 => bitVector = 0b1000 | 0b100 = 0b1100
    if ((bitVector & mask) === 0n) {
      bitVector = bitVector | mask
    }
    // else the specific bit on bitVector has a value of 1,
    // the bitVector is ANDed with the inverse of mask
    // if 0b10 & 0b10 = 0b10 then bitVector = 0b10 & 0b01 = 0
    else {
      bitVector = bitVector & ~mask
    }

    return bitVector;
  }

  // BigInt to handle bit indexes over 53
  let bitVector = 0n;

  const strLengthEven = str.length % 2 === 0;

  // toggle on/off each character of the string using character codes
  str.split('').forEach(char => {
    bitVector = toggle(bitVector, char.charCodeAt())
  });


  if (strLengthEven && bitVector === 0n) return true
  // if bitVector = 0b1000 and bitVector - 1 = 0b111, ANDing them gives the result 0,
  // indicating only one bit on the integer had a value of 1
  // conversely, if bitVector = 0b1100 and bitVector - 1 = 0b1011, ANDing gives the result 0b1000,
  // indicating more than one specific bit on bitVector had a value of 1
  else if (!strLengthEven && ((bitVector & (bitVector - 1n)) === 0n)) return true
  else return false
}

module.exports = { permPalin, permPalinII, permPalinAdvanced };