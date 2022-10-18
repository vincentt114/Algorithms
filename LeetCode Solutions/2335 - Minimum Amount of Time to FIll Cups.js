// You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either fill up 2 cups with different types of water, or 1 cup of any type of water.

// You are given a 0-indexed integer array amount of length 3 where amount[0], amount[1], and amount[2] denote the number of cold, warm, and hot water cups you need to fill respectively. Return the minimum number of seconds needed to fill up all the cups.

 

// Example 1:

// Input: amount = [1,4,2]
// Output: 4
// Explanation: One way to fill up the cups is:
// Second 1: Fill up a cold cup and a warm cup.
// Second 2: Fill up a warm cup and a hot cup.
// Second 3: Fill up a warm cup and a hot cup.
// Second 4: Fill up a warm cup.
// It can be proven that 4 is the minimum number of seconds needed.
// Example 2:

// Input: amount = [5,4,4]
// Output: 7
// Explanation: One way to fill up the cups is:
// Second 1: Fill up a cold cup, and a hot cup.
// Second 2: Fill up a cold cup, and a warm cup.
// Second 3: Fill up a cold cup, and a warm cup.
// Second 4: Fill up a warm cup, and a hot cup.
// Second 5: Fill up a cold cup, and a hot cup.
// Second 6: Fill up a cold cup, and a warm cup.
// Second 7: Fill up a hot cup.
// Example 3:

// Input: amount = [5,0,0]
// Output: 5
// Explanation: Every second, we fill up a cold cup.

//input array of 3 integers
//output integer
    //represents the least number of seconds needed to fill the cups
    //rules
        //input array represents the number of 3 different cups (cold, warm , hot)
        //can either fill up 2 cups of different water
        //or fill up 1 cup of same water

//strat
    //declare a helper function that takes in an array
        //sorts array from largest to least
        //if index of 1 is greater than 0 subtract index of 1
        //subtract 1 from index of 0
        //sort largest to least
        //return
    //sort input
    //declare a seconds counter and initialize to 0
    //implement a while loop based on index of 0 being greater than 0
        //call helper
        //increment seconds
    //return seconds

var fillCups = function (amount) {
  const helper = amount => {
    amount.sort((a, b) => b - a)
    amount[0] -= 1;
    if (amount[1] > 0) amount[1] -= 1;
    return amount.sort((a, b) => b - a)
  }
  amount.sort((a, b) => b - a)
  let seconds = 0;
  while (amount[0] > 0) {
    console.log(amount)
    helper(amount);
    seconds++;
  }
  return seconds;
};