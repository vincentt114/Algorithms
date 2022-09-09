// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

//input array of strings
//output string
    //where output represents the longest common prefix amongst all elements of input

//strat
  //create an output and initalize to emptry string
  //double for loop   
      //first loop is 1st element of input
          //second is all other elements of input
              //compare char at index of first loop against all othere lements
                  //if falsy thenr eturn output
          //output += char being looked at
      //return output
      
var longestCommonPrefix = function(strs) {
  let output = '';
  
  for (let i = 0; i < strs[0].length; i++) {
      for (let j = 1; j < strs.length; j++) {
          if (strs[0][i] !== strs[j][i]) return output;
      }
      output += strs[0][i]
  }
  
  return output;
};