/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

//input string
//output integer

//create output and initialize to 0
//iteriate through input using a for loop; initialize i to input length - 1
  //convert input at index i to number
  //add to output element x 2 to the power of input length - 1 - i
//return

function binToDec(binString){
  let output = 0;
  for (let i = binString.length - 1; i >= 0 ; i--) {
    const element = Number(binString[i]);
    output += element * (2**(binString.length - 1 - i))
  }
  return output;
}



module.exports = {binToDec};