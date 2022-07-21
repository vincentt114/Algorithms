// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

//input string s and integer k
//output integer

//WHERE
  //output represents the longest substring of same chars, in which we are able to change chars k times
//STRAT
  //2 arrows one both on left
  //declare left right and continuousletters and cahce
  //implement via a while loop
    //declare char and initialize to char at s of index right
    //log into cache
      //update continuous letters based on cache
    //logic to determine length of letter (right - left + 1 - continuous) < k
      //increment l
      //decrement cache[l index] so we do not mess with the continuous letters
    //return r - l

var characterReplacement = function(s, k) {
  let left = 0;
  let right = 0;
  let continuous = 0;
  const cache = {};
  while (right < s.length) {
    const char = s[right];
    cache[char] = cache[char] ? cache[char] += 1 : cache[char] = 1;
    if (cache[char] > continuous) continuous = cache[char];

    if ((right - left + 1 - continuous) > k) {
      left++;
      cache[s[left]] -= 1;
    }
    right++;
  }
  return right - left;
}

console.log(characterReplacement('AABBBAA', 2))