// 438. Find All Anagrams in a String
// Medium
// 9.3K
// 288
// Companies
// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

//input 2 strings
//output array of integers
    //that represents the starting indexes of s input string, of which are anagrams of abc

//strat - sliding window
    //create an object
        //iteriate through p string and index the chars of p
    //create a copy of object
    //declare begin as 0
    //declare end as 0
    //iteriate through s via a while loop - need to deal with edge cases where there are stray characters
        //check for value end
            //if does not have end
                //then update begin to end + 1 and end to end + 1
                //reset copy of object
            //else
                //decrement accordingly
        //if end - begin + 1 === p.length
            //check for anagram
                //logic
            //increment begin value in object
            //increment begin and end
        //else end + 1
    //return outptu
var findAnagrams = function(s, p) {
  //caching all instances of p
  const obj = {};
  for (let i = 0; i < p.length; i++) {
      if (obj[p[i]]) obj[p[i]]++;
      else obj[p[i]] = 1;
  }
  const output = []
  let copy = {...obj};
  let begin = 0, end = 0;
  while (end < s.length) {
      //checking if values char at end is present in p
      if (!copy.hasOwnProperty(s[end])) {
          end = end + 1;
          begin = end;
          copy = {...obj};
          continue
      }
      //counting char at end
      copy[s[end]]--;
      //if right length for anagram
      if (end - begin === p.length - 1) {
          //checking if it is anagram
          const arr = Object.values(copy).sort((a, b) => a - 0);
          if (arr[0] === 0 && arr[arr.length - 1] === 0) output.push(begin)
          //incrementing to next values
          copy[s[begin]]++;
          begin++;
          end++;
      //not right length
      } else end++;
  }
  return output;
};