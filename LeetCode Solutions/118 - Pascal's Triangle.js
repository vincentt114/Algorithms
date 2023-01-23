// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

//input integer
//output array of arrays that represent the rows of pascal's triangles

//strat
    //create edge cases for if numRows is 1 
    //create output as array of arrays consisting of 2 subarrays
    //create a while loop based on output length being less than numRows
        //declare first and second
        //declare current as empty array
        //create inner while loop basde on second being less than last subarray length
            //push into current 1st adn 2nd sum
            //increment first and second
        //push current into output
    //return output

var generate = function(numRows) {
  if (numRows === 1) return [[1]];

  const output = [[1], [1,1]];
  while (output.length < numRows) {
      let first = 0, second = 1;
      const last = output[output.length - 1]
      const current = [];
      while (second < last.length) {
          current.push(last[first] + last[second]);
          first++;
          second++;
      }
      current.push(1);
      current.unshift(1);
      output.push(current);
  }

  return output;
};