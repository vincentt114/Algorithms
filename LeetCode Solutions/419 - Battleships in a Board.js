// Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.

// Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).

 

// Example 1:


// Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
// Output: 2
// Example 2:

// Input: board = [["."]]
// Output: 0

//input matrix
//output integer
    //that represents the number of 'battleships' on the matrix (continuous line of x)

//strat
    //declare an output
    //declare a helper that takes in x and y
        //converts the x into a .
        //recurses into left/right top/bottom if left/right top/bottom are x
    //iteriate through board
        //if element is a x then call helper
    //return output

var countBattleships = function(board) {
  let output = 0;
  const helper = (i, j) => {
      board[i][j] = '.';
      if (i > 0 && board[i - 1][j] === 'X') helper(i - 1, j);
      if (i < board.length - 1 && board[i + 1][j] === 'X') helper(i + 1, j);
      if (j > 0 && board[i][j - 1] === 'X') helper(i, j - 1);
      if (j < board[0].length - 1 && board[i][j + 1] === 'X') helper(i, j + 1);
  }
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === 'X') {
              output++;
              helper(i, j)
          }
      }
  }
  return output;
};