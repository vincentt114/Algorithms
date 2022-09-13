// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

//input array
//output integer
    //representing the greatest profit that can be obtained

//strat
    //can buy/sell stock on same day
    //so if we can lock in profit at any point, then we do so
    //create a profit var
    //iteriate through prices and lock in i

    var maxProfit = function(prices) {
      let profit = 0;
      
      for (let i = 0; i < prices.length; i++) {
          const prev = prices[i - 1];
          const curr = prices[i];
          if (curr > prev) {
              profit += curr - prev
          }
      }
      
      return profit
  };