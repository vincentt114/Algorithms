// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

//input 2 strings
//output integer that represents the longest matching subsequence between the 2 string

//STRAT
    //create a matrix that represents the current longest subsequence at each point betweent he two strings

    //create a helper funciton to fill out matrix
        //if match then spot in matrix will equal the pervious diagonal + 1
        //else spot in matrix will equal the max between the 3 previous diagonal
    
    //iteriate through both strings for indexes for helper func
    //return 

    var longestCommonSubsequence = function(text1, text2) {
    
      const memo = new Array(text1.length + 1);
      for (let i = 0; i < memo.length; i++) {
          memo[i] = new Array(text2.length + 1).fill(0)
      }
      
      const helper = (i, j) => {
          if (text1[i - 1] === text2[j - 1]) memo[i][j] = 1 + memo[i - 1][j - 1]
          else memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1], memo[i - 1][j - 1])
      }
      
      for (let i = 1; i <= text1.length; i++) {
          for (let j = 1; j <= text2.length; j++) {
              helper(i, j)
          }
      }
      return memo[text1.length][text2.length]
  };