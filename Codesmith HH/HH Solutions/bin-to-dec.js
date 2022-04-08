/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. 
DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

The general strategy for converting a binary number into a decimal number is to start with the digit in the right-most (first) position. 
Multiply whatever value sits in that postion (0 or 1) by 2 to the power of the position. 

Once you have all the position's values squared, simply add them together. 

For example: 0101

0 <- 1 <- 0 <- *1* 
0th position. 1(the *binary* number) multiplied by 2 to the power of 0 (the index) is 1.

0 <- 1 <- *0* <- 1
1st position. 0 (the *binary* number) multiplied by 2 to the power of 1(the index) is 0.

0 <- *1* <- 0 <- 1
2nd position. 1 (the binary number) multiplied by 2 to the power of 2(the index) is 4. 

*0* <- 1 <- 0 <- 1
3rd position. 0 (the binary number) multiplied by 2 to the power of 3(the index) is 0. 

The evaluated result of each position is 1 + 0 + 4 + 0, which equals 5. 
*/

// Version 1: Iterating through a binary string array from right to left 
function binToDec(binary) {
  // initialize an index counter
  let index = 0;

  // initialize a sum
  let sum = 0;

  // iterate through binary number from right to left
  for (let i = binary.length - 1; i > -1; i--){
    // if the element is a 1, add 2 to the power of the index to the sum
    if (binary[i] == '1'){
       sum += (Math.pow(2, index)); 
    };
    // increment index
    index++;
  };

  // return sum
  return sum; 
}

// Version 2: Iterating over an array left to right, eliminating the need for a "counter" variable.
function binToDec2(binary) {
  // convert to array to reverse
  let binaryArr = binary.split('').reverse();
  // initialize sum 
  let sum = 0;

  // iterate from left to right, adding into sum the current element multiplied by 2 to the power of i
  for (let i = 0; i < binaryArr.length; i++) {
    sum += binaryArr[i] * 2**i;
  }
  // return sum
  return sum;
}

//  Version 3: ParseInt (For demonstration only, now that we can write it out long-hand).
function binToDec3(binary) {
  // use built-in function
  return parseInt(binary, 2);
}

