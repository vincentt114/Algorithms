// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

//input arr of arr
//output arr of arr

//WHERE
  //output arr of arrs merge the "intervals" of input arrs of arrs
//STRAT
  //declare output arr and initialize it to first index
  //iteriate through intervals beginning at 1
  //if i[0] < output[output.length - 1][1] reassign
  //else push
  //return
  

var merge = function(intervals) {
    intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
    let output = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
      if (output[output.length - 1][1] >= intervals[i][0]) output[output.length - 1][1] = Math.max(intervals[i][1], output[output.length - 1][1]);
      else output.push(intervals[i]);
    }
    return output;
};

console.log(merge([[1,4], [2, 3]]))