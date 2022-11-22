// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:


// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

//input 2 integers that represents the dimensions of a matrix
//output integer that represents the number of unique paths to get to the bottom right of the matrix, starting from the top left

//strat - dynamic programming
    //create a matrix based on m x n and fill it with 1s
        //the elements at each subarray represent the number of unique ways to get to that element (will need to update all elements except the top row and left column)
    //iteriate through matrix
        //update the element by top + left
    //return bottom right elemet at matrix

var uniquePaths = function(m, n) {
  let matrix = new Array(m).fill(new Array(n).fill(1));
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          const top = matrix[i - 1][j];
          const left = matrix[i][j - 1];
          matrix[i][j] = top + left
      };
  };
  return matrix[m - 1][n - 1];
};