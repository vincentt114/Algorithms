/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

// O(n^2) brute force solution
const duplicateNumber = array => {
  for (let i = 0; i < array.length; i++){
    //inner loop
    for (let j = i + 1; j < array.length; j++){
      if(array[i] === array[j]) return array[j];
    }
  }
  // no duplicate in array
  return 'No duplicate found';
}

// O(n) time complexity, O(n) space compelexity
const duplicateNumber = array => {
  // create a cache of stored values
  let cache = {};
  // iterate over array
  for (let i = 0; i < array.length; i++){
    // if number is in cache, return that number
    if(cache.hasOwnProperty(array[i])) return array[i];
    // if number not found, add to cache
    cache[array[i]] = true;
  }
  // no duplicate in array
  return 'No duplicate found';
};

// 0(n) time complexity, O(1) space complexity
// XOR and bitwise in javascript https://www.w3schools.com/js/js_bitwise.asp
// ^ symbol is the XOR operator in javascript
// Examples:
//  0 ^ 0 = 0
//  0 ^ 1 = 1
//  1 ^ 0 = 1
//  1 ^ 1 = 0
const duplicateNumber = array => {
  // initialize result to 0
  let result = 0;
  // use XOR to find the duplicate
  for (let i = 0; i < array.length; i++){
    result = array[i] ^ i ^ result;
  }
  return result;
}


/*
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

// O(nlogn) time complexity, O(n) space complexity
const duplicateNumberAdvanced = array => {
  // sort the array
  const sorted = array.sort((a,b) => a - b);
  // get the min and max, using es6 array destructuring
  let [min, max] = [sorted[0], sorted[sorted.length-1]];
  // get the actual sum of the array
  const actual = sorted.reduce((a,b) => a + b);
  // get the expected sum of the series
  const expected = (min + max) * (array.length-1)/2;
  // difference of actual and expected should be the duplicate number
  return actual - expected;
};

// O(n) time complexity, O(1) space complexity
const duplicateNumberAdvanced = array => {
  // initialize min, max, and sum
  let min = Infinity, max = -Infinity, sum = 0;

  for(let i = 0; i < array.length; i++){
    min = (array[i] < min ? array[i] : min);
    max = (array[i] > max ? array[i] : max);
    sum += array[i];
  }
  // calculate expected sum
  const expected = (min+ max) * (array.length-1)/2;
  return sum - expected;
}

module.exports = { duplicateNumber, duplicateNumberAdvanced };
