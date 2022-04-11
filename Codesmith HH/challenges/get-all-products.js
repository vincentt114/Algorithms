/*

Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

getAllProducs([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

Be careful in this problem! What if there is a zero (or multiple zeroes) in the
input array? How would you handle this?

*/

//input arr
//output arr 
  //where element is integer 
    //where all elements are multiplied except one

//create output arr
//for loop
  //create new arr (copy of array)
  //splice out i
  //multiply
  //push

const getAllProducts = array => {
  let output = [];

  for (let i = 0; i < array.length; i++) {

    let copy = [...array];
    copy.splice(i, 1)

    let hold = copy[0];
    for (let j = 1; j < copy.length; j++) {
      hold *= copy[j]
    }

    output.push(hold);
  }
  return output;
};

console.log(getAllProducts([1, 7, 3, 4]))

module.exports = {getAllProducts};
