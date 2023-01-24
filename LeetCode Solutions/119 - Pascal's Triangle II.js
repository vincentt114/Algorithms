// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]

//input integer
//output array
    //that represents the nth layer of the pascal triangle

//strat
    //create an array that consists of the first 2 layers of triangle
    //create a while loop based on array length being less or equal to row index
        //declare a current as empty array
        //declare a first as 0 and second as 1
        //enter inner while loop based on second being less than last inner array length
            //push into current the sum of value at first and second
            //increment first and second
        //push 1 into current
        //unshift 1 into current
        //push current into array
    //return array at rowIndex


var getRow = function(rowIndex) {
  const arr = [[1], [1, 1]];
  while (arr.length <= rowIndex) {
      const current = [];
      let first = 0, second = 1;
      const lastRow = arr[arr.length - 1]
      while (second < lastRow.length) {
          current.push(lastRow[first] + lastRow[second]);
          first++;
          second++;
      }
      current.push(1);
      current.unshift(1);
      arr.push(current);
  };
  return arr[rowIndex];
};