/* 
  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "". 

  (Note: All given inputs are in lowercase letters a-z.)

  ex: 
  longestCommonPrefix(["flower","flow","flight"]) --> "fl"
  longestCommonPrefix(["dog","racecar","car"]) --> "" 
*/

// O(n*m) time complexity solution 
const longestCommonPrefix = (strs) => {
  //return empty string is an empty array is passed in 
  if (!strs.length) return '';
  //iterate through the letters in the string at the 0th index of the array 
  for (let i = 0; i < strs[0].length; i++) {
    //iterate through the strings in the array
    for (let str of strs) {
      //compare the letter at index i of the string at index i with the letter at index i of the string at the 0th index of the array 
      if (str[i] !== strs[0][i]) {
        // as soon as there is a difference in letters are the same index i between any 2 strings, return a string of all the preceeding letters - this is the LCP 
        return str.slice(0, i);
      }
    }
  }
  //return the string at 0th index if no difference between letters was found while iterating 
  return strs[0];
}

/**
 * O(n*m) time complexity
 * 
 * just a different approach from the one above
 * general idea here is that the longest possible prefix
 *  is the length of the shortest string in the array.
 * 1. Sort the array shortest -> longest to find the longest possible prefix
 * 2. Outer for-loop starts with the longest possible prefix and decrements down to 0
 * 3. Within the outer for-loop we set what the substring prefix currently is, as well
 *    as some tracker variables to enable breaking out of the loop if we get to a point
 *    where the current prefix is not a match
 * 4. Inner while loop runs as long as
 *    a. we still have a string to check
 *    AND
 *    b. all previously checked strings were a match
 * 5. knowing that we started with the longest possible and are working our way backward, 
 *     once we've broken the while loop if we still have a match we can simply return it.
 * 6. If, however, we get through all of that and still haven't found a matching prefix, we just return an empty string.
 * NOTE: this is after taking care of the invalid input case where the input is not an array
 */
const longestCommonPrefix = (strs) => {
  // handle invalid input
  if (!Array.isArray(strs) || !strs.length) return '';
  // sort array into shortest -> longest word
  const sorted = strs.sort((a, b) => a.length >= b.length ? true : false);
  // the longest possible prefix is whatever the shortest word is, so set a max variable
  const max = sorted[0].length;
  // decrement through the number of possible characters in the shortest word
  for (let prefixLength = max; prefixLength >= 0;  prefixLength--) {
    // slice the shortest word up to the current prefix length
    const curPrefix = sorted[0].slice(0, prefixLength);
    // set variable to track whether the current prefix slice exists
    let isCommonPrefix = true;
    // set starting index for other strings to check
    let strToCheck = 1;
    // while the prefix still exists in all previous strings checked
    // AND while our strToCheck index still has valid item in strs arr
    // THEN if the current string to check DOES NOT start with the prefix,
    //  we know we can move on so set isCommonPrefix to false
    while (isCommonPrefix && strToCheck < strs.length) {
      if (strs[strToCheck].indexOf(curPrefix) !== 0) isCommonPrefix = false;
      strToCheck++;
    }
    // if we make it through all subsequent strs and it is still a common prefix, return the prefix!
    if (isCommonPrefix) return curPrefix;
  }
  return '';
};

module.exports = { longestCommonPrefix };