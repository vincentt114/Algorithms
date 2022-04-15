/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

//input array of integers
//output mode (integer that appears the most)
  //if multiple modes return the largest mode integer

//declare a cache var; initialize it to an empty object
//declare an occurrence var; initialize it to 0
//output var

//iteriate through the array
  //if element of the array exists in the cache
    //increment it in the cache value
    //check to see its value is greater than occurence var, if yes then reassign occurence var
      //reassign output var to element
    //check to see its value is equal to occurence var, if yes then check to see if it's greater then output var

const mode = array => {

  const cache = {};
  let count = 0;
  let output;

  for (let i = 0; i < array.length; i++) {
    if (!cache[array[i]]) cache[array[i]] = 1;
    else cache[array[i]]++;

    if (cache[array[i]] > count) {
      count = cache[array[i]];
      output = array[i]
    }
    else if (cache[array[i]] === count && array[i] > output) output = array[i]
  }

  return output;
  
};

console.log(mode([3, 2, 4, 3]))

/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

//input array of integers
//output mode (integer that appears the most)
  //if multiple modes return the largest mode integer

//declare a cache var; initialize it to an empty object
//declare an occurrence var; initialize it to 0
//output var

//declare a helper function that takes in an array
  //iteriate through the array
    //if array[i] is an array recurse helper function
    //if element of the array exists in the cache
      //increment it in the cache value
      //check to see its value is greater than occurence var, if yes then reassign occurence var
        //reassign output var to element
      //check to see its value is equal to occurence var, if yes then check to see if it's greater then output var

const modeNested = array => {

  const cache = {};
  let count = 0;
  let output;

  const helper = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) helper(array[i])

      if (!isNaN(array[i])) {
        if (!cache[array[i]]) cache[array[i]] = 1;
        else cache[array[i]]++;

        if (cache[array[i]] > count) {
          count = cache[array[i]];
          output = array[i]
        }
        else if (cache[array[i]] === count && array[i] > output) output = array[i]
      }
    }
  }

  helper(array);

  if (Array.isArray(output)) output = output[0]
  return output;
};

console.log(modeNested([7, [[5, [8], 8], 2, 5]]))

module.exports = {mode, modeNested};
