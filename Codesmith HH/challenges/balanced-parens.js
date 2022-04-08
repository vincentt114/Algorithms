/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

//input string
//output boolean
  //WHERE if string's parantheses consisting of () {} [] are balanced

//create a cache 
  // [, {, ( and initialize to 0
//iteriate through string
  //if one of those on line 32, increment
  //if one of the closing pairs check for falsy
    //if falsy return false
    //if truthy decrement

const balancedParens = input => {

  const cache = {
    "[": 0,
    "{": 0,
    "(": 0
  }

  //inner logic for decrementing
  //keep track of the order in which things are being entered
    //create an array and shift as necessary
  let track = []
  for (let i = 0; i < input.length; i++) {
    switch(input[i]) {

      case "[":
      case "{":
      case "(": 
      cache[input[i]]++;
      track.push(input[i])
      break;

      case "]":
        if (cache["["] === 0) return false;
        else cache["["]--;
        if (track.pop() !== "[") return false;
        break;

      case "}":
        if (cache["{"] === 0) return false;
        else cache["{"]--;
        if (track.pop() !== "{") return false
        break;

      case ")":
        if (cache["("] === 0) return false;
        else cache["("]--;
        if (track.pop() !== "(") return false;
        break;
    }
  }
  //edge case if there are too many opens
  if (track.length > 0) return false;

  return true;
};

console.log(balancedParens('{([{}])}'))

module.exports = { balancedParens} ;
