// You are playing a simplified PAC-MAN game on an infinite 2-D grid. You start at the point [0, 0], and you are given a destination point target = [xtarget, ytarget] that you are trying to get to. There are several ghosts on the map with their starting positions given as a 2D array ghosts, where ghosts[i] = [xi, yi] represents the starting position of the ith ghost. All inputs are integral coordinates.

// Each turn, you and all the ghosts may independently choose to either move 1 unit in any of the four cardinal directions: north, east, south, or west, or stay still. All actions happen simultaneously.

// You escape if and only if you can reach the target before any ghost reaches you. If you reach any square (including the target) at the same time as a ghost, it does not count as an escape.

// Return true if it is possible to escape regardless of how the ghosts move, otherwise return false.

 

// Example 1:

// Input: ghosts = [[1,0],[0,3]], target = [0,1]
// Output: true
// Explanation: You can reach the destination (0, 1) after 1 turn, while the ghosts located at (1, 0) and (0, 3) cannot catch up with you.
// Example 2:

// Input: ghosts = [[1,0]], target = [2,0]
// Output: false
// Explanation: You need to reach the destination (2, 0), but the ghost at (1, 0) lies between you and the destination.
// Example 3:

// Input: ghosts = [[2,0]], target = [1,0]
// Output: false
// Explanation: The ghost can reach the target at the same time as you.

//strat
    //based on the movement rules of movement, we can create a helper function to determine the number of turns it takes to reach targer => i, j
        //declare steps and initialize to 0
        //if i is less than targer[0]
            //while loop
        //if i is greater than target[0]
            //while loop
        //if j is less than target[1]
            //while loop
        //if j is greater than target[1]
            //while loop
        //return steps
    //declare minGhost and initialize to infinity
    //iteriate through ghosts 
        //call helper funciton and update ghosts
    //return calling the helperfunciton on 0 0 is less than ghost

var escapeGhosts = function(ghosts, target) {
  const helper = (i, j) => {
      let steps = 0;
      while (i < target[0]) {
              steps++;
              i++;
      }
      while (i > target[0]) {
              steps++;
              i--;
      }
      while (j < target[1]) {
              steps++;
              j++;
      }
      while (j > target[1]) {
              steps++;
              j--;
      }
      return steps
  }
  let ghostSteps = Infinity;
  for (let i = 0; i < ghosts.length; i++) {
      ghostSteps = Math.min(ghostSteps, helper(ghosts[i][0], ghosts[i][1]));
  };
  // console.log(ghostSteps)
  return (helper(0, 0) < ghostSteps);
};