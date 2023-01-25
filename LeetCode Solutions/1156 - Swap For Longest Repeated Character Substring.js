// You are given a string text. You can swap two of the characters in the text.

// Return the length of the longest substring with repeated characters.

 

// Example 1:

// Input: text = "ababa"
// Output: 3
// Explanation: We can swap the first 'b' with the last 'a', or the last 'b' with the first 'a'. Then, the longest repeated character substring is "aaa" with length 3.
// Example 2:

// Input: text = "aaabaaa"
// Output: 6
// Explanation: Swap 'b' with the last 'a' (or the first 'a'), and we get longest repeated character substring "aaaaaa" with length 6.
// Example 3:

// Input: text = "aaaaa"
// Output: 5
// Explanation: No need to swap, longest repeated character substring is "aaaaa" with length is 5.

//input string
//output integer
    //that represents the length of the longest substring where we can swap 2 chars

//strat
    //create a cache of a count of each letter
    //iteriate and cache each letter count
    //declare an output and initalize to 0
    //iterate through each element of string
        //declare a skip and initialize to false
        //declare a count and initialize to 1
        //inner loop
            //if same
                //increment count
            //if not same and skip is false and count is less than letter count
                //increment count
                //skip is true
            //else break
        //update output
    //return output

var maxRepOpt1 = function(text) {
  //edge case for length of 1
  if (text.length === 1) return 1
  //to cache all letter counts
  const map = new Map();
  for (let i = 0; i < text.length; i++) {
      if (!map[text[i]]) map[text[i]] = 1;
      else map[text[i]]++;
  }
  
  let output = 0;

  //checking longest length going forward
  for (let i = 0; i < text.length - 1; i++) {
      let skip = false;
      let count = 1;
      for (let j = i + 1; j < text.length; j++) {
          if (text[i] === text[j]) count++;
          else if (text[i] != text[j] && !skip && count < map[text[i]]) {
              skip = true;
              count++;
          }
          else if (skip) break
      }
      count = Math.min(count, map[text[i]]);
      output = Math.max(output, count);
  }

  //checking longest length going backwards
  for (let i = text.length - 1; i >= 1; i--) {
      let skip = false;
      let count = 1;
      for (let j = i - 1; j >= 0; j--) {
          if (text[i] === text[j]) count++;
          else if (text[i] != text[j] && !skip && count < map[text[i]]) {
              skip = true;
              count++;
          }
          else if (skip) break
      }
      count = Math.min(count, map[text[i]]);
      output = Math.max(output, count)
  }
  return output;
};