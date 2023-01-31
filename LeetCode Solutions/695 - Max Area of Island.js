// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

 

// Example 1:


// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0

//input matrix
//output integer
    //that represenst the area of an island (consists of just 1)

//strat
    //create a helper function
        //looks up left down right
            //if theres a 1 and that 1 is not included in an area hold var, then push and recruse
    //create an output
    //iteriate through matrix
        //if element is 1
            //create area hold var
            //call helper
            //update output
    //return output

var maxAreaOfIsland = function(grid) {

  //used to count current area
  let count = 0;
  let output = 0;

  const helper = (i, j) => {
      //update matrix to so we do not duplicate work
      grid[i][j] = 0;
      //increments count
      count++;
      //recurses if top/left/bot/right are 1s
      if (i > 0 && grid[i - 1][j] === 1) helper(i - 1, j);
      if (i < grid.length - 1 && grid[i + 1][j] === 1) helper(i + 1, j);
      if (j > 0 && grid[i][j - 1] === 1) helper(i, j - 1);
      if (j < grid[i].length - 1 && grid[i][j + 1] === 1) helper(i, j + 1)
  }

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 1) {
              helper(i, j);
              output = Math.max(output, count);
          }
          count = 0;
      }
  }

  return output;
};