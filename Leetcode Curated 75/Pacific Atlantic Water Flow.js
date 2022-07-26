// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.


// Example 1:


// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// Example 2:

// Input: heights = [[2,1],[1,2]]
// Output: [[0,0],[0,1],[1,0],[1,1]]
 

// Constraints:

// m == heights.length
// n == heights[r].length
// 1 <= m, n <= 200
// 0 <= heights[r][c] <= 105

var pacificAtlantic = function(heights) {
    //creating initial sets

    const pacific = [];
    const atlantic = [];
    for (let i = 0; i < heights.length; i++) {
      pacific.push(new Array(heights[0].length).fill(false));
      atlantic.push(new Array(heights[0].length).fill(false));
    }

    const dfs = (row, column, prev, ocean) => {
      //check if on board
      console.log(prev)
      if (row < 0 || 
        row > heights.length - 1 ||
        column < 0 ||
        column > heights[0].length - 1) return
      //check if current spot is less than moving spiot
      if (heights[row][column] < prev) return 
      if (ocean[row][column]) return
      else {
        ocean[row][column] = true;
        dfs(row + 1, column, heights[row][column], ocean);
        dfs(row - 1, column, heights[row][column], ocean);
        dfs(row, column + 1, heights[row][column], ocean);
        dfs(row, column - 1, heights[row][column], ocean);
      }
    } 
          //horizontal
    for (let i = 0; i < heights[0].length; i++) {
      dfs(0, i, heights[0][i], pacific)
      dfs(heights.length - 1, i, heights[heights.length - 1][i], atlantic)
    }
    // pacific vertical
    for (let i = 0; i < heights.length; i++) {
      dfs(i, 0, heights[i][0], pacific)
      dfs(i, heights[0].length - 1, heights[i][heights[0].length - 1], atlantic)
    }
    
    const output = [];
    for (let i = 0; i < heights.length; i++) {
      for (let j = 0; j < heights[i].length; j++) {
        if (pacific[i][j] && atlantic[i][j]) output.push([i, j])
      }
    }
    console.log(atlantic)
    console.log(pacific)
    return output;
};

console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))