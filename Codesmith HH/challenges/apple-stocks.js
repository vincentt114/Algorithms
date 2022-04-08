/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

//input array of integer
//output integer
  //where integer is the highest possible difference between elements of integer (left to right)

//initial thoughts
//create a output and initialize to 0
//nested for loop
  //where j = i+1
  //if difference between indexes at i - j > output, then reinitialize output
//return output

//while loop


const highestProfit = apple_stock => {
  let output = 0;
  if (!apple_stock) return output;
  for (let i = 0; i < apple_stock.length; i++) {
    for (let j = i + 1; j < apple_stock.length; j++) {
      if (apple_stock[j] - apple_stock[i] > output) output = apple_stock[j] - apple_stock[i]
    }
  }
  return output;
}

module.exports = {highestProfit}