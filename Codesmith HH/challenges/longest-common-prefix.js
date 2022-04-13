/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

//input array of strings
//output string
  //where output string is the longest common prefix of input strings

//declare an empty output string
//iteriate through the first element of input string, going through each individual char
  //for each of the input array elements check if they include the char at index i
    //if not return output
  //output concat 

const longestCommonPrefix = (strs) => {
  let output = '';
  if (!strs.length) return output;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) return output;
    }
    output += strs[0][i];
  }
  return output;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))

module.exports = { longestCommonPrefix };
