// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// Accepted
// 1,068,243

//strat
//declare cache and store nums input into cache
//sort nums input based on # of appearances using cache[element] = # of appearances
//create a set to remove dupes
//declare output
//add contents of set into output and return 

var topKFrequent = function(nums, k) {
  //figuring out number of appearances
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
      cache[nums[i]] ? cache[nums[i]]++ : cache[nums[i]] = 1
  }
  //sorting entire arr based on num of appearances
  const arr = nums.sort((a, b) => cache[b] - cache[a])
  //creating a set based on appearances so no dupes
  const set = new Set();
  const iterator = set.values()
  for (let i = 0; i < arr.length; i++) {
      set.add(arr[i])
  }
  //creating output
  const output = [];
  while (output.length !== k) {
      output.push(iterator.next().value)
  }
  return output;
};