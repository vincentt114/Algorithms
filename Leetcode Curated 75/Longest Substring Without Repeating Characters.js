// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

//input a string
//output integer

//WHERE output represents the longest continuous substring without repeating characters
//STRAT
  //declare output
  //for loop
    //first begining with i -> create a map
      //nested for loop 
        //use has
          //if so check size against output and then break
        //if not then add
  //return output

//strat
  //use sliding windows
    //left and right both initialized to 0
    //create a new set
    //create output
    //enter into a while loop
      //check if set has s at index right 
        //if not add to set
        //update output as necessary
        //increment right
      //else
        //delete from set at index left
        //increment left
  
const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let right = 0;
  let sub = new Set();
  let output = 0;
  while (left < s.length && right < s.length) {
    if (!sub.has(s[right])) {
      sub.add(s[right]);
      if (output < sub.size) output = sub.size;
      right++;
    }
    else {
      sub.delete(s[left]);
      left++;
    }
  }
  return output;
}

// var lengthOfLongestSubstring = function(s) {
//   let output = 0;
//   for (let i = 0; i < s.length; i++) {
//     let sub = new Set(s[i]);
//     if (sub.size > output) output = sub.size;
//     for (let j = i + 1; j < s.length; j++) {
//       if (sub.has(s[j])) {
//         break;
//       }
//       else sub.add(s[j])
//       if (sub.size > output) output = sub.size;
//     }
//   }
//   return output;
// };

console.log(lengthOfLongestSubstring(" "))