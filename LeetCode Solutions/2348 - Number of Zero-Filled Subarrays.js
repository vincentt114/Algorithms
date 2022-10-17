// Given an integer array nums, return the number of subarrays filled with 0.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,3,0,0,2,0,0,4]
// Output: 6
// Explanation: 
// There are 4 occurrences of [0] as a subarray.
// There are 2 occurrences of [0,0] as a subarray.
// There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.
// Example 2:

// Input: nums = [0,0,0,2,0,0]
// Output: 9
// Explanation:
// There are 5 occurrences of [0] as a subarray.
// There are 3 occurrences of [0,0] as a subarray.
// There is 1 occurrence of [0,0,0] as a subarray.
// There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.
// Example 3:

// Input: nums = [2,10,2019]
// Output: 0
// Explanation: There is no subarray filled with 0. Therefore, we return 0.

//input array
//output integer
    //output represents the number of potential subarrays of 0 within input

//strat
    //DP based on number of appearances made by 0, 
        //rule = length of subarray + length of subarray - 1, so on until 0
    //create an object
    //create a count and initialize to 0
    //create an output and initialize to 0
    //create a helper function that implements and returns based on the rule in line 12
    //iteriate through nums
        //if element is 0
            //increment count
        //if (element is NOT 0 OR i === length - 1) AND count greater than 1 
            //if object[count] then increment
            //else create a key value pair within object count : 1
            //reinitialize count to 0
    //iteriate through objecct
        //output += helper(key) * value
    //return output
var zeroFilledSubarray = function (nums) {

  //holds the lengths of the 0 subarrays
  const cache = {};
  //used to count current length of 0 subarray
  let count = 0;
  let output = 0;

  //implements the rule for determining num of subarrays within subarrays
  const helper = num => {
    let output = 0;
    while (num > 0) {
      output += num;
      num--;
    }
    return output;
  }

  //filling out cache with - length of subarray : number of appearances
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    }
    if ((nums[i] != 0 || i === nums.length - 1) && count > 0) {
      if (!cache[count]) cache[count] = 1;
      else cache[count]++;
      count = 0;
    }
  }

  //adding to output = helper(subarray)*number of appearances
  for (let key in cache) {
    output += helper(Number(key)) * cache[key]
  }

  return output;
};