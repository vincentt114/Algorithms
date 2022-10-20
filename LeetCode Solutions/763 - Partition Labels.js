// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

 

// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
// Example 2:

// Input: s = "eccbbbbdec"
// Output: [10]

//input string
//output array of integers
    //integers represent lengths of substrings consisting of chars that appear only within that substring

//strat
    //declare an empty cache
    //keep track of last appearance of char -> iteriate backwards to fill out cache
    //keep track of substring, by finding last appearance of beginning of substring -> declare end as cache[s[0]]
    //declare output = []
    //iteriate through s
        //reinitialize end to the greater of end OR cache[s[i]]
        //if s === i
            //if output has length
                //output.push(i - output.reduce((prev, rcurr) + 1)
            //else
                //output.push(i)
    //return output

    var partitionLabels = function(s) {
      const cache = {};
      for (let i = s.length - 1; i >= 0; i--) {
          if (!cache[s[i]]) cache[s[i]] = i;
      }
      let end = cache[s[0]];
      const output = [];
      for (let i = 0; i < s.length; i++) {
          end = Math.max(end, cache[s[i]]);
          if (i === end) {
              if (output.length) {
                  output.push(i - output.reduce((prev, curr) => prev + curr, 0) + 1)
              }
              else {
                  output.push(i + 1)
              }
          }
      }
      return output;
  };