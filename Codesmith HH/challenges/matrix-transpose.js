/* 

Given a two dimensional array, write a function called 'matrixTranspose' that returns 
a transposed version of that array.

Example: 
const twoDimArray = [['fred', 'barney'], 
                     [30, 40], 
                     [true, false]]
                      
console.table(matrixTranspose(twoDimArray)); // -> [['fred', 30, true], 
                                                    ['barney', 40, false]]

*/

//input array of array
//output array of array
  //where array elements are transposed
  //ex: [[00, 01],
  //     [10, 11],
  //     [20, 21]]
  //      =>
  //    [[00, 10, 20],
  //     [01, 11, 21]]

//create a map cache
//for each method on the matrix
  //for each element do a for loop
  //check cache for key i, if not present then create cache at index i and intialize to array with element element inside
  //else push element element into cache
//create output array
//for in on map pushing in contents
//return output

const matrixTranspose = matrix => {
  let cache = new Map();
  matrix.forEach((elements) => {
    for (let i = 0; i < elements.length; i++) {
      if (!cache[i]) cache[i] = [elements[i]];
      else cache[i].push(elements[i])
    }
  })
  const output = [];
  for (let keys in cache) {
    output.push(cache[keys])
  }
  return output;
};

console.log(matrixTranspose([['fred', 'barney'], [30, 40], [true, false]]))

/*

Extension:
Given an nxn matrix, write a function called 'matrixRotate' that rotates the matrix 90 degrees clockwise.
If given an mxn matrix, return undefined.

For example:  
const matrix = [  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]  ]

console.table(matrixRotate(matrix)) // ->  [  [7, 4, 1],
                                              [8, 5, 2],
                                              [9, 6, 3]  ]

BONUS: Rotate the matrix in place. In other words, the space complexity of the solution should be O(1).

*/

//input array of arrays
//output array of arrays
  //where elements of first array become last elements of every output array
  //second array elements become second to last elements of every output array

//create output initialize to empty array
//for loop on input starting at last array
  //inner for loop starting at last array's element
    //check to see if output at index j exists, if not then push array of array [i][j] into it
    //else push
//return output

const matrixRotate = matrix => {

  if (matrix.length && matrix.length !== matrix[0].length) return undefined;

  const output = [];
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!output[j]) output.push([matrix[i][j]]);
      else output[j].push(matrix[i][j])
    }
  }
  return output;
};

module.exports = { matrixTranspose, matrixRotate };
