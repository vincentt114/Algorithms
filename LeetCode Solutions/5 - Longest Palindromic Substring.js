// Given a string s, return the longest palindromic substring in s.

// A string is called a palindrome string if the reverse of that string is the same as the original string.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

//input string
//output string

//rule
    //output needs to be a substring of input that is palindromic

//strat
    //create helper function that checks if palindrome
    //declare output and initialize to emptry string
    //sliding window implement via a while loop
        //where j moves and once j's is i's neighbor, i increments and j resets to the end
    //increment i            
    //return output
        

var longestPalindrome = function(s) {
    
  let output = s[0];
  
  //helper function to determine if palinedrome or not and updates output accordingly
  const helper = (i, j) => {
      let begin = i;
      let end = j;
      while (begin < end) {
          if (s[begin] != s[end]) return false;
          begin++;
          end--;
      }
      let palindrome = s.slice(i, j + 1)
      if (output.length < palindrome.length) output = palindrome;
  }
  
  //while loop that implements a sliding window
      //j slides to i, once j is i's neighbor, i is incremented and j resets
  let i = 0;
  let j = s.length - 1;
  while (i <= s.length - 2) {
      helper(i, j);
      if (i === j - 1) {
          i = i + 1;
          j = s.length - 1
      }
      else j--;
      if (output.length >= s.length - i) return output; //edge case for super long input strings
  }
  
  return output;
};