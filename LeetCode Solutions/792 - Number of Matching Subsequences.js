// Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
 

// Example 1:

// Input: s = "abcde", words = ["a","bb","acd","ace"]
// Output: 3
// Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".
// Example 2:

// Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
// Output: 2

//input string, array of words
//output integer
    //that represents the number of subsequences of string that are in array 
//strat -> 2 pointers
    //declare and initialize output to 0
    //iteriate through words
        //edge case for too long
        //declare words pointer and s pointer
        //enter a while loop based on word pointer being less than element length
            //if pointers match
                //increment both
            //if not
                //increment s pointer
        //if s pointer is less than s length
            //increment output

var numMatchingSubseq = function(s, words) {
  let output = 0;
  let cache = {};
  for (let i = 0; i < words.length; i++) {
      const current = words[i];
      //for weird edge case of repeating the same element in words a lot of times
      if (cache[current]) {
          output += cache[current] - 1
          continue;
      }
      //edge case where element is greater than word
      if (current.length > s.length) continue;
      //2 pointers
      let wordPointer = 0;
      let sPointer = 0;
      while (wordPointer < current.length && sPointer < s.length) {
          //if match we move both
          if (current[wordPointer] === s[sPointer]) {
              wordPointer++;
              sPointer++;
          }
          //if not we move sPointer
          else sPointer++;
      }
      //checking if wordPointer got to the end
      if (wordPointer === current.length) {
          output++;
          cache[current] = 2
      } else cache[current] = 1
  }
  return output;
};