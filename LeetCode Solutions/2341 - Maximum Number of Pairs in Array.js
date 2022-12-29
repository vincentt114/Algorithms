// You are given a 0-indexed integer array nums. In one operation, you may do the following:

// Choose two integers in nums that are equal.
// Remove both integers from nums, forming a pair.
// The operation is done on nums as many times as possible.

// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

 

// Example 1:

// Input: nums = [1,3,2,1,3,2,2]
// Output: [3,1]
// Explanation:
// Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
// Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
// Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
// No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.
// Example 2:

// Input: nums = [1,1]
// Output: [1,0]
// Explanation: Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [].
// No more pairs can be formed. A total of 1 pair has been formed, and there are 0 numbers leftover in nums.
// Example 3:

// Input: nums = [0]
// Output: [0,1]
// Explanation: No pairs can be formed, and there is 1 number leftover in nums.

//input array
//output array consisting of
    //[num of removals, remaining elements]
    //can remove where there are elements that are the same

//strat
    //create a helper function that removes an element
        //takes in an array and element to be removed
        //calls slice twice
        //returns the array
    //create a numRemove and initialize to 0
    //iteriate through nums
        //iteriate through nums beginning at i
            //if nums at i and j are equal
            //increment numRemove
            //call helper on nums
            //reset i so it begins at the beginning again
    //return nums remove and nums length

var numberOfPairs = function(nums) {
  const helper = (arr, ele) => {
      arr.splice(arr.indexOf(ele), 1);
      arr.splice(arr.indexOf(ele), 1);
      return arr;
  }
  let numRemove = 0;
  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] === nums[j]) {
              numRemove++;
              nums = helper(nums, nums[i])
              i = -1;
              break;
          }
      }
  }
  return [numRemove, nums.length]
};