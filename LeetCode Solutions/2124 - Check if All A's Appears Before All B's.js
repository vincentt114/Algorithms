// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

 

// Example 1:

// Input: s = "aaabbb"
// Output: true
// Explanation:
// The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
// Hence, every 'a' appears before every 'b' and we return true.
// Example 2:

// Input: s = "abab"
// Output: false
// Explanation:
// There is an 'a' at index 2 and a 'b' at index 1.
// Hence, not every 'a' appears before every 'b' and we return false.
// Example 3:

// Input: s = "bbb"
// Output: true
// Explanation:
// There are no 'a's, hence, every 'a' appears before every 'b' and we return true.

//input string
//output boolean
    //basde on whether a appears before b

//strat
    //declare firstB and lastA
    //from left to right enter a while loop
        //if char is b 
            //update firstB and break
    //from right to left enter a while loop
        //if char is a
            //update firstB and break
    //3 if condiitons to return true
        //if lastA > firstB |lastA is falsy | lastB is falsy
    //return false

var checkString = function(s) {
  let firstB = null, lastA = null;
  if (s.indexOf('b') >= 0) firstB = s.indexOf('b')
  if (s.lastIndexOf('a') >= 0) lastA = s.lastIndexOf('a')
  if (lastA < firstB || lastA === null || firstB === null)  return true;
  return false;
};