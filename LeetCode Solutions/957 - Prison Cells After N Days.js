// There are 8 prison cells in a row and each cell is either occupied or vacant.

// Each day, whether the cell is occupied or vacant changes according to the following rules:

// If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
// Otherwise, it becomes vacant.
// Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.

// You are given an integer array cells where cells[i] == 1 if the ith cell is occupied and cells[i] == 0 if the ith cell is vacant, and you are given an integer n.

// Return the state of the prison after n days (i.e., n such changes described above).

//strat
    //create a helper function that updates
    //create a history array
    //declare a current as cells
    //enter into a while loop based on n being truthy
        //update current by passing in current to helper
        //if history has current then
            //declare a mod as n % length
            //return cells[mod]
        //else push current into history
    //return current

var prisonAfterNDays = function (cells, n) {
  const helper = cells => {
    let output = '';
    for (let i = 0; i < cells.length; i++) {
      if (cells[i - 1] === cells[i + 1]) output += 1
      else output += 0;
    }
    return output;
  }
  let current = cells.join('');
  let history = [];
  while (n--) {
    current = helper(current);
    if (history.includes(current)) {
      const mod = n % history.length;
      return history[mod].split('')
    }
    history.push(current);
  }
  return current.split('');
};