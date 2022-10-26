// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

//input matrix
//output integer 
    //integer represents the area of the biggest square (consisting of just 1s)

//strat
    //general -> work backwards and act as if a 1 is the bottom left corner
        //declare output
        //iteriate through entire matrix
            //if current is 0 then continue
            //if i and j are both > 0
                //if 1 then check up and left and diagonal and update the current element to the lowest value amongst them + 1
            //update output as necessary
        //return output squared

var maximalSquare = function(matrix) {
  let output = 0;
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === '0') continue;
          if (i > 0 && j > 0) matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1;
          output = Math.max(output, matrix[i][j])
      }
  }
  return output*output;
};