/* 
Determine whether a target substring can be found within a string! 
No regex allowed! No string.prototype.includes or string.prototype.indexOf!

Your solution should have O(n * m) time-complexity where:
n is equal to the given string length
m is equal to the target substring length

I.e. in 'xztzcatbfbbq' find 'cat' 

Input: 'xztzcatbfbbq', 'cat'
Output: true

Input: 'finding a needle in a haystack', 'lein'
Output: false
*/

//input 2 strings
//output boolean
  //where true if substring is present inside string

//nested loop iteriating based on string's length
  //if string at index i === substring [0]
    //iteriating on substring's length beginning at 1
      //if string[i + j] !== substring[j] break
    //return true
  //else return false

const needleInHaystack = (string, substring) => {

  for (let i = 0; i < string.length; i++) {
    if (string[i] === substring[0]) {
      if (substring.length === 1) return true;
      for (let j = 1; j < substring.length; j++) {
        if (string[i + j] !== substring[j]) break;
        if (j === substring.length - 1) return true;
      }
    }
  }
  return false
};

console.log(needleInHaystack('yolo', 'o'))

/*
Extension: Now imagine the target substring and string both might have underscores '_'.
Treat '_'s as wildcards, or blank pieces in Scrabble - i.e., they can be any letter.

Input: '_ello_orld', 'helloworl_'
Output: true

Input: 'montana', '__o__'
Output: false
*/

const needleInHaystackWithWildcards = (string, substring) => {

  for (let i = 0; i < string.length; i++) {
    if (string[i] === substring[0] || string[i] === '_' || substring[0] === '_') {
      //edge case for one letter substrings 
      if (substring.length === 1) return true;

      for (let j = 1; j < substring.length; j++) {
        if (string[i + j] !== substring[j] && string[i + j] !== '_' && substring[j] !== '_') break;
        if (j === substring.length - 1) return true;
      }
    }
  }

  return false;

};

console.log(needleInHaystackWithWildcards('_ello_orld', 'helloworl_'))

module.exports = { needleInHaystack, needleInHaystackWithWildcards };