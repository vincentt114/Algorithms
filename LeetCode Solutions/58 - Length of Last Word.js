// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

//input string
//output integer

//rules
    //return the length of the last word of the input sentence

//strat
    //split string using ' '
    //return length of last element of array

var lengthOfLastWord = function(s) {

  const split = s.split(' ')
  console.log(split)
  
  let last = split.length - 1
  while (split[last] === '') {
      console.log(split[last])
      last--
  }
  return split[last].length
};