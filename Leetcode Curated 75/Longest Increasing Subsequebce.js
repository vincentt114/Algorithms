// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

//input array
//output integer

//WHERE integer represents the length of the longest increasing subsequence
//strat
    //create a dp array equal to nums length and fill it with 1s b/c 1 is the minimum 
    //create/initialize a output to 1
    //nested for loop beginning with i = 1 and j = 0 (up to i for inner)
    //if i > j
        //then update dp array at i to the greater of num at i or j + 1
        //update longest to greater of longest or dp array at i
//HOW IT WORKS
    //once i > j we update the longest continuous at i for that loop
    //once we iteriate whatever is at j keeps track for us and we can update
    //dp array represents at each index the longest continuous at that index being the end


    var lengthOfLIS = function(nums) {
      let dp = new Array(nums.length).fill(1);
      let longest = 1;
      
      for (let i = 1; i < nums.length; i++) {
          for (let j = 0; j < i; j++) {
              if (nums[i] > nums[j]) {
                  dp[i] = Math.max(dp[i], dp[j] + 1);
                  longest = Math.max(dp[i], longest)
              }
          }
      }
      return longest
  };