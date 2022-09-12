// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

 

// Example 1:

// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".

//input string, integer
//output string
    //that represents the first input integer words

//strat
    //create an arr that is s split by ' '
    //create an output and initialize to empty ''
    //iteriate through s based on k
        //add to output
    //return output
    

    var truncateSentence = function(s, k) {
      const arr = s.split(' ');
      let output = '';
      
      for (let i = 0; i < k; i++) {
          if (output === '') output += arr[i]
          else output += " " + arr[i]
      }
      
      return output
  };