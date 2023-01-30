// Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

// Find the leftmost occurrence of the substring part and remove it from s.
// Return s after removing all occurrences of part.

// A substring is a contiguous sequence of characters in a string.

 

// Example 1:

// Input: s = "daabcbaabcbc", part = "abc"
// Output: "dab"
// Explanation: The following operations are done:
// - s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
// - s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
// - s = "dababc", remove "abc" starting at index 3, so s = "dab".
// Now s has no occurrences of "abc".
// Example 2:

// Input: s = "axxxxyyyyb", part = "xy"
// Output: "ab"
// Explanation: The following operations are done:
// - s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
// - s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
// - s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
// - s = "axyb", remove "xy" starting at index 1 so s = "ab".
// Now s has no occurrences of "xy".

//input 2 strings (s, part)
//output string
    //where output string is s after part is removed from it

//strat - RECURSION
    //create a helper function that takes in s and part
        //create a hold
        //iteriate through s
            //if first char is equal then check the rest
            //if rest is good then 
                //update hold
                //breka
        //if hold recurse
        //else return string

var removeOccurrences = function(s, part) {
  const helper = s => {
      if (s === part) return '';
      //hold is used to determine if we have updated s
      let hold;
      for (let i = 0; i < s.length; i++) {
          //if a char of s and first part are equal
          if (s[i] === part[0]) {
              for (let j = 0; j < part.length; j++) {
                  //if not equal
                  if (s[i + j] != part[j]) break;
                  //if equal
                  if (j === part.length - 1) {
                      const first = s.split('').slice(0, i).join('')
                      const second = s.split('').slice(i + j + 1, s.length).join('');
                      hold = first + second;
                  }
              };
              //will need to recurse so we break out of this loop
              if (hold) break;
          }
      }
      //recursing back onto hold
      if (hold) return helper(hold);
      else return s;
  }
  return helper(s)
};