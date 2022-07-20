
// 10473

// 339

// Add to List

// Share
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

//input array of strings
//output array of array where each subarr consists of the anagrams

//STRAT
  //iteriate through input arr and log the letters into an main obj
//create a current arr and initailize it to 
//create a leftover arr
//itereriate through the main obj

var groupAnagrams = function(strs) {
  //creating a cache to fill it up
  let obj = {};

  for (str of strs) {
    const letter = str.split('').sort().join('');
    obj[letter] ? obj[letter].push(str) : obj[letter] = [str]
  }
  return Object.values(obj)
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))