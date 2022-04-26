/*

Given a string, find the length of the longest substring without repeating characters.
Just return the length of the substring, not the substring itself.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The longest substring is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The longest substring is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The longest substring is "wke", with the length of 3.
Note that the longest substring must actually be a substring, as "pwke" is a
subsequence and not a substring.

Example 4:
Input: ""
Output: 0
Explanation: an empty string has length 0

Hint: think about the largest valid "window" of a substring without repeating
characters. How do we keep track of this "window"?

*/

//input string
//output integer
  //where the integer represents the longest nonrepeating substring 

//edge case for empty string

//output integer
//for loop
  //create a current var and initialize it to string at index i
  //nested for loop
    //if doesnt contain then concate
    //if does break
  //compare against output
//return output

const substringNonrepeating = str => {
  if (str.length === 0) return 0;

  let output = 1
  if (str.length === 1) return output;

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (!current.includes(str[j])) current+=str[j]
      else break;
    }
    if (current.length > output) output = current.length;
  }
  return output;
};

console.log(substringNonrepeating("abc"))
module.exports = {substringNonrepeating};
46