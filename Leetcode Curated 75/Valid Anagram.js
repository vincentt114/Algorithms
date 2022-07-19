// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

//input 2 strings s, t
//output boolean

//where if t is an anagram of s return boolean

//create a cache
//iteriate through s filling up the cache
  //first appearance = 0 and then increment going forward
//iteriate through t
  //if cache is either less than 0 or falsy 
    //return false
  //decrement cache
//iteriate through cache
  //if cache values arent 0 return false
//return true

var isAnagram = function(s, t) {
    const cache = {};
    for (let i = 0; i < s.length; i++) {
      if (!cache[s[i]]) cache[s[i]] = 1;
      else cache[s[i]]++;
    }
    // return cache
    for (let j = 0; j < t.length; j++) {
      if (!cache[t[j]] || cache[t[j]] < 1) return false;
      else cache[t[j]]--;
    }
    for (let keys in cache) {
      if (cache[keys] !== 0) return false;
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"))