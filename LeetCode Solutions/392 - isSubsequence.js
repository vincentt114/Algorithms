// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

//input 2 strings
//output boolean

//strat
    //declare 2 pointers sPoint and tPoint
    //enter a while loop based tPoint being less than t length
        //if sPoint and tPoint are equal increment sPoint
        //if sPoint === s.length - 1 return true
        //increment tPoint
    //return false

var isSubsequence = function(s, t) {
  let sPoint = 0, tPoint = 0;
  if (!s) return true;
  while (tPoint < t.length) {
      if (s[sPoint] === t[tPoint]) sPoint++;
      if (sPoint === s.length) return true;
      tPoint++;
  }
  return false;
};