// Given an integer n, return the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].

 

// Example 1:

// Input: n = 3
// Output: 3
// Example 2:

// Input: n = 11
// Output: 0
// Explanation: The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.

//input integer
//output single digit integer that represents the input integer index value 

//strat
	//declare a sequence as an empty string
	//declare a current as the number 1
	//enter a while loop based on sequence length being less than n
		//add current to sequence
		//increment current
	//return sequence[n]

function nthDigit(n) {
  let sequence = '';
  let current = 1;
  while (sequence.length <= n) {
    sequence += current;
    current++;
  }
  return Number(sequence[n - 1])
}
  