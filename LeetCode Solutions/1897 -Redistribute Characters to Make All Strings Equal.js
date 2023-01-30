// You are given an array of strings words (0-indexed).

// In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].

// Return true if you can make every string in words equal using any number of operations, and false otherwise.

 

// Example 1:

// Input: words = ["abc","aabc","bc"]
// Output: true
// Explanation: Move the first 'a' in words[1] to the front of words[2],
// to make words[1] = "abc" and words[2] = "abc".
// All the strings are now equal to "abc", so return true.
// Example 2:

// Input: words = ["ab","a"]
// Output: false
// Explanation: It is impossible to make all the strings equal using the operation.

//input array of strings
//output boolean
    //where it is true if we can make all strings equal in value, w/ any number of operations

//strat
    //so long as the % of each char is divisible by the length as 0 then true
    //create an object
    //iteriate through each string in array and increment accordingly
    //iteriate through object
        //if not divisible return false
    //return true

var makeEqual = function(words) {
  const cache = {};
  for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
          if (!cache[words[i][j]]) cache[words[i][j]] = 0;
          cache[words[i][j]]++;
      }
  }
  for (const char in cache) {
      if (cache[char] % words.length != 0) return false
  };
  return true;
};