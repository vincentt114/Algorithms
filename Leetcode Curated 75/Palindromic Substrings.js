// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.
// Accepted
// 474,279
// Submissions

//input stirng
// output integer representing the number of palindromic substrings within input

//strat
  //iteriate through s 
  //implement a helper function that checks if at index i of s the following are palindromes:
    //s going to the right
    //s goign to the left and right
    //utilize a while loop to check if
      //left arrow is greater= 0
      //right arrow is less than length
      //if at index left and index right are equal
      //then increment output 

const countSubstrings = (s) => {
  let output = 0;
  const helper = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
      output++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }
  return output;
}

