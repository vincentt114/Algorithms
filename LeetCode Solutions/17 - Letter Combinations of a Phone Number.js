// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

//input string
//outout array of strings
    //that represent all combinations of letters from input string (converted from telephone buttons)

//strat - use recursion to dynamically create all combos
    //create object that holds all number - letter, key value pairs
    //create an output array that is empty

    //create a helper function that takes in the following arguments -> string, number
        //if string length == digits length
            //push string into output 
            //return
        //iterates through key value pair (using number input as index holder)
            //recursively call
    
    //call helper function
    //return output

var letterCombinations = function(digits) {
  const obj ={
      '2' : 'abc',
      '3' : 'def',
      '4' : 'ghi',
      '5' : 'jkl',
      '6' : 'mno',
      '7' : 'pqrs',
      '8' : 'tuv',
      '9' : 'wxyz'
  };
  const output = [];
  if (!digits) return output;
  const helper = (string, index) => {
      if (string.length === digits.length) {
          output.push(string);
          return;
      }
      const currentLetters = obj[digits[index]]
      for (let i = 0; i < currentLetters.length; i++) {
          helper(string + currentLetters[i], index + 1)
      }
  }
  helper('', 0);
  return output;
};