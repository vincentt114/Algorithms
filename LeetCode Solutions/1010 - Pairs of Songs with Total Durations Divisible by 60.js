// You are given a list of songs where the ith song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

 

// Example 1:

// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60
// Example 2:

// Input: time = [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.

//input array
//output integer 
    //that represents the number of unique element pairs whose sum is divisible by 60
//STRAT 
    //create an array that is 60 length and fill with 0
    //declare an output
    //iteriate through time
        //declare a current and initialize to element % 60
        //add to output arr[60 - current]
        //arr[current] += 1
    //return output

  var numPairsDivisibleBy60 = function(time) {
    const arr = new Array(60).fill(0);
    let output = 0;
    for (let i = 0; i < time.length; i++) {
        const current = time[i] % 60;
        output += arr[(60 - current) % 60];
        arr[current]++;
    }
    return output;
};