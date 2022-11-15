// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

//strat
    //general
        //find each number of occurence of letters
        //sum up all the even numbers
        //if there's 1 odd number left then add it 
    //create an empty object
    //iteriate through s
        //fill up the object with 'char' : num appearances
    //declare output;
    //iteriate through object.values
        //if divisible by 2 then add it to output
    //if output is less than s input then add 1
    //return

var longestPalindrome = function(s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
      if (!obj[s[i]]) obj[s[i]] = 1;
      else obj[s[i]]++;
  }
  let output = 0;
  let appearances = Object.values(obj)

  for (let i = 0; i < appearances.length; i++) {
      if (appearances[i] % 2 === 0) output += appearances[i];
      else if (appearances[i] % 2 === 1 && appearances[i] > 2) output += appearances[i] - 1;
  }
  if (output < s.length) output++;
  return output;
};