/*

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

We will sort the array using a strategy called selection sort, which works as
follows. First, put the smallest number in the array at position 0. Then, put
the second-smallest number in the array at position 1. Then, put the
third-smallest number in the array at position 2 etc. After going through the
whole array, the array will end up being sorted.

*/

//input array
//output same array
  //sorted from lowest to highest using 'selection sort'

//create a lowest var
//NESTED FOR LOOP
  //first loop
    //lowest assigned to element at [i]
    //second loop (j = i + 1)
      //if element at j < lowest, then reassign lowest to element at j
    //if lowest < element at i
      //swap them

const selectionSort = array => {

  for (let i = 0; i < array.length - 1; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[lowest] > array[j]) lowest = j;
    }
    let temp = array[i];
    array[i] = array[lowest];
    array[lowest] = temp;
  }
  return array;
};

console.log(selectionSort([7, 1, 1, 7]))

/*

Extension:

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

For this extension, we will use a strategy called insertion sort, which works as
follows. Imagine that the first k - 1 numbers of the array are in ascending
order. We take the kth number and insert it into the correct position amongst
the k - 1 numbers such that now, the first k numbers of the array are in
ascending order. In other words:

The first value in the array is considered to be already fine.
The second value is either placed before/after the first value.
The third value is inserted in the correct position amongst the first two values.
The fourth value is inserted in the correct position amongst the first three values.
etc.

*/

const insertionSort = array => {
  
};

module.exports = {selectionSort, insertionSort};
