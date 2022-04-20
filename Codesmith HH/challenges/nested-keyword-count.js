/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

//input array (elements may be arrays/nested arrays), string
//output integer
  //where integer represents number of times string appears within the array

//SCOPE
//declare output and initailize it to 0

//helper function
  //for loop
    //if element is an array call helper function on element
  //if element is equal to string then increment output

//return output

const keywordCount = (array, keyword) => {
  let output = 0;
  const helper = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) helper(array[i]);
      else if (array[i] === keyword) output++
    }
  }
  helper(array);
  return output;
};

/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

//input array
//output array
  //where array is element(s) that appear the most

//scope/recursion
//create output initialize to empty array
//create cache
//create num counter

//helper function
  //store cache
  //find highest appearance

//iteriate through cache
  //if value === num counter then push into output

//return output
const keywordMode = array => {
  let output = [];
  let cache = {};
  let num = 0;

  const helper = (array) => {
    for (let i = 0; i < array.length; i++) {
      //recurse if nested array
      if (Array.isArray(array[i])) helper(array[i]);
      //creating the cache
      else if (!cache[array[i]]) cache[array[i]] = 1;
      else cache[array[i]]++;
      //logic for the num counter
      if (cache[array[i]] > num) num = cache[array[i]];
    }
  }
  helper(array);
  
  for (let keys in cache) {
    if (cache[keys] === num) output.push(keys)
  }

  return output;
};

console.log(keywordMode(['y', ['hi'], [['bright', ['x']], ['z', 'x']], 'hi', [['y']], 'light']));
module.exports = {keywordCount, keywordMode};
