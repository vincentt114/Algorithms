/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.


ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/

//input arr of arr
//output arr
  //elements are common to all arrs

//take first arr and see if other arr elements are common
//if yes add to an output arr

const commonElements = (...args) => {
  let output = [...args[0]];
  for (let i = 0; i < output.length; i++) {
    let remove = false
    for (let j = 1; j < args.length; j++) {
      if (!args[j].includes(output[i])) remove = true;
    }
    if (remove === true) {
      output.splice(i, 1);
      i--;
    }
  }
  if (output.length === 0) return "Nothing in Common!"
  return output;
}

let arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
let arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
let arr3 = [2, 100, 2000, 'dog', 3, 'lion'];
console.log(commonElements(arr1, arr2, arr3))

/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {

}

module.exports = {commonElements, commonElementsOptimized} 