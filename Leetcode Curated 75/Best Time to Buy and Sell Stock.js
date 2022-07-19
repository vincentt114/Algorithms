// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

//input array
//output integer

//WHERE
  //output integer represents the greatest difference between elements (element to the right - element to the left)

//STRAT
  //declare following variables
    //buy and initialize to array[0]
    //profit and initialize to 0
  //iteriate over array (beginning at i = 1)
    //if array[i] - lowBuy > profit then reinitialize profit to that value
    //if lowBuy > array[i] then reinitialize lowBuy
  //return profit

  var maxProfit = function(prices) {
    let lowBuy = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
      if ((prices[i] - lowBuy) > profit) profit = (prices[i] - lowBuy);
      if (lowBuy > prices[i]) lowBuy = prices[i];
    }
    return profit;
  };

  console.log(maxProfit([7,1,5,3,6,4]))