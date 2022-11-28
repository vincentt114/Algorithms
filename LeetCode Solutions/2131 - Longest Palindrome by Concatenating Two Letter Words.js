// You are given an array of strings words. Each element of words consists of two lowercase English letters.

// Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.

// Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.

// A palindrome is a string that reads the same forward and backward.

 

// Example 1:

// Input: words = ["lc","cl","gg"]
// Output: 6
// Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
// Note that "clgglc" is another longest palindrome that can be created.
// Example 2:

// Input: words = ["ab","ty","yt","lc","cl","ab"]
// Output: 8
// Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
// Note that "lcyttycl" is another longest palindrome that can be created.
// Example 3:

// Input: words = ["cc","ll","xx"]
// Output: 2
// Explanation: One longest palindrome is "cc", of length 2.
// Note that "ll" is another longest palindrome that can be created, and so is "xx".

//input array
//output integer
    //that represents the length of the longest palindrome that can be made from input elements

//strat
    //initialize output to 0
    //create 2 objects
        //1 for palindromes
        //1 for others
    //iteriate through words
        //if its the element is a palindrome
            //check if its in the object palindrome
                //if yes 
                    //increment output by 4
                    //delete object entry
                //else add to object
        //else 
            //check if its reverse is in object
                //if yes increment output by 4
                //decrement reverse object entry by 1
                //if object entry is 0 then delete object entry
            //else add to object with a 1 as value
    //return output

var longestPalindrome = function(words) {
  let output = 0;
  const palindrome = {}, regular = {};
  for (let i = 0; i < words.length; i++) {
      //palindrome element logic
      if (words[i][0] === words[i][1]) {
          if (palindrome[words[i]]) {
              output += 4;
              delete palindrome[words[i]]
          }
          else palindrome[words[i]] = 1
      }
      //regular logic
      else {
          const reverse = words[i][1] + words[i][0];
          if (regular[reverse]) {
              output += 4;
              regular[reverse] -= 1;
              if (regular[reverse] === 0) delete regular[reverse]
          }
          else if (regular[words[i]]) regular[words[i]]++;
          else regular[words[i]] = 1
      };
  };
  if (Object.keys(palindrome).length) output += 2;
  return output;
};