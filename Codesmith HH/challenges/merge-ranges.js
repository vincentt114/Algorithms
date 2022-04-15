/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

*/

//input array of arrays
//output array of arrays
  //where element-arrays are merged where
    //if succeededing element array [1] overlaps with preceding element array [0]

//sort the input array
//create output array
//for loop through the sorted array
  //if i is 0 push into output array
  //else if index of 1 of output last element-array is greater than i's first index of 0 then merge
  //else push
//return output

const mergeRanges = intervals => {
  let sorted = intervals.sort((a, b) => {
    return a[0] - b[0];
  })

  const output = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i === 0) output.push(sorted[i]);
    else if (output[output.length - 1][1] >= sorted[i][0]) {
      if (output[output.length - 1][1] < sorted[i][1]) output[output.length - 1][1] = sorted[i][1]
    }
    else output.push(sorted[i]);
  }

  return output;
};

console.log(mergeRanges([[0, 4], [1, 3], [2, 4], [0, 5]]))

module.exports = {mergeRanges};
