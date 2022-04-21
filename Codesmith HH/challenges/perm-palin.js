/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
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
 */

//input string
//output boolean

//if length 1 return true
//create a cache
//iteriate through string and fill out cache based on char and its occurrences
//find length of string
  //if even
    //all the values must be even
  //if odd
    //one value must be odd

const permPalin = str => {

  if (str.length === 1) return true;
  
  //filling out the cache
  const cache = {};
  for (let i = 0; i < str.length; i++) {
    if (!cache[str[i]]) cache[str[i]] = 1;
    else cache[str[i]]++;
  }

  //determining how many odd occurences there are
  let odd = 0
  for (let key in cache) {
    if (cache[key] % 2 !== 0) odd++;
  }

  if (str.length % 2 !== 0) {
    if (odd === 1) return true;
    else return false;
  }
  else {
    if (odd > 0) return false;
    else return true;
  }
};

/* 
 * Extension: Solve in constant space complexity.
 */
const permPalinAdvanced = str => {

};

module.exports = { permPalin };