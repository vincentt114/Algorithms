/*

Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

EXAMPLE 1:

Input:
[
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
Output: 1

Input:
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]
Output: 3

Assume that the grid will be an array of arrays of numbers either 0 or 1, and
that the grid will have at least one element.

*/

//input nested array
//output integer
  //where integer represents the total number of 'islands'
    //a island is (a group of) 1(s) where the 1s are horizontal and vertical to one another

//declare output and initialize it to 0
//create a helper function that does the logic
  //if element at i and j === 1
    //up
      //if (i !== 0)
      //if element at [i-1][j] === 1 helper
    //down
      //if (i !== grid[0].length - 1)
      //if element at [i+1][j] === 1 helper
    //left
      //if (j !=== 0)
      //if element at [i][j-1] === 1 helper
    //right
      //if (j !== grid[0][0].length - 1)
      //if element at [i][j+1] === 1 helper

//sort through the grid using a nested for loop to search each individual
  //if element is 1 then increment output and run helper function passing in i, j
  

const numIslands = grid => {
  let output = 0;

  const helper = (i, j) => {
    if (grid[i][j] === 1) grid[i][j] = 0;

    if (i !== 0) {
      if (grid[i - 1][j] === 1) helper(i - 1, j);
    }
    if (i !== grid.length - 1) {
      if (grid[i + 1][j] === 1) helper(i + 1, j);
    }
    if (j !== 0) {
      if (grid[i][j - 1] === 1) helper(i, j - 1);
    }
    if (j !== grid[0].length - 1) {
      if (grid[i][j + 1] === 1) helper(i, j + 1);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        output++;
        helper(i, j);
      }
    }
  }

  return output;
};

module.exports = {numIslands};
