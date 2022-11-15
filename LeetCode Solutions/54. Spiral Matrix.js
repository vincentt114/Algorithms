// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

//input matrix
//output array
    //array's elements are the matrix's subelements in spiral order

//start - recursion
    //declare an output and initalize to empty array
    //create a helper function that takes in amtrix
        //top row
            //output = output.cocnat(matrix.shift)
        //last column
            //for loop 
                //pushing in each row's pop
        //bottom row
            //check if bottom row exist
            //if yes then output = output.concat(lastrow.reverse)
        //first column
            //check to see if first column exist
            //if yes for loop
        //recurse
            //check if amtrix exist then recurse
    //call helper
    //return output

var spiralOrder = function(matrix) {
  let output = [];
  const helper = matrix => {
      //top row
      output = output.concat(matrix.shift())
      
      //last col
      for (let i = 0; i < matrix.length; i++) {
          output.push(matrix[i].pop())
      }
      //bot row
      const lastRow = matrix.pop();
      if (lastRow) output = output.concat(lastRow.reverse())
      
      //first col
      for (let i = matrix.length - 1; i >= 0; i--) {
          if (matrix[i].length) output.push(matrix[i].shift())
      }
      
      if (matrix.length && matrix[0].length) helper(matrix);
  }
  helper(matrix);
  return output;
};