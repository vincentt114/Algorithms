// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[1] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

//input array
//output array of array

//WHERE
  //output subarrs consist of 3 unique indices of input where they sum to 0

//STRAT
  //sort nums input into numerical order - helps avoid dupes
  //declare output arr
  //for loop but its limit will be nums.length - 2
    //internal logic to avoid dupes
      //if arr[i] = arr[i + 1] continue
    //internal logic to save time
      //if arr[i] > 0 break b/c cannot sum up to 0 from items once lowest is 0
    //declare j and initialzie it to i + 1
    //declare k and initialize it to nums.length
  //while loop
    //declare sum and initialize it to the sum of the 3
    //if sum === 0 
      //push it the 3 integers as an arr into the output arr
      //logic to push j and k away from their dupes
      //decrement/increment j and k
    //else if sum > 0
      //decremeent k
    //else increment j


var threeSum = function(nums) {
  const output = [];
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;
    if (nums[i] > 0) break;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        output.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      }
      else if (sum > 0) k--;
      else j++;
    }
  }
  return output;
};

console.log(threeSum([-1,0,1,2,-1,-4]))