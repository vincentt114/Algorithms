/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

const duplicateNumber = array => {
  while (array.length) {
    let check = array.shift();
    if (array.includes(check)) return check;
  }
};


/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

//input arr
//output integer
  //where the integer is an element that apepars twice in the array

//

const duplicateNumberAdvanced = array => {
  const cache = {};
  for (let i = 0; i <= array.length; i++) {
    if (!cache[array[i]]) cache[array[i]] = true;
    else return array[i]
  }
};

module.exports = { duplicateNumber, duplicateNumberAdvanced };
