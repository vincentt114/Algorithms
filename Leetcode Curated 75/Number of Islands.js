// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

//input matrix (arr of arrs)
//output integer

//WHERE integer represents the number of "islands" in matrix (1 island defined as all the 1(s) that are touching up down left right)
//STRAT
  //declare an output
  //nested for loop iteriating through entire matrix
  //use a helper function to "convert" 1s to 0s after counting them as an island

var numIslands = function(grid) {
    let output = 0;
    const helper = (i, j) => {
      //top
      if (i > 0) {
        if (grid[i - 1][j] === "1") {
          grid[i - 1][j] = "0";
          helper(i - 1, j)
        }
      }
      //down
      if (i < grid.length - 1) {
        if (grid[i + 1][j] === "1") {
          grid[i + 1][j] = 0;
          helper(i + 1, j)
        }
      }
      //left
      if (j > 0) {
        if (grid[i][j - 1] === "1") {
          grid[i][j - 1] = "0";
          helper(i, j - 1);
        }
      }
      //right
      if (j < grid[0].length - 1) {
        if (grid[i][j + 1] === "1") {
          grid[i][j + 1] = "0";
          helper(i, j + 1);
        }
      }
    }
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === "1") {
          output++;
          helper(i, j);
        }
      }
    }
    return output;
};

console.log(numIslands(
  [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  ))