// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

//input array, integer
//output array of array
    //where each subarray consists of elements frmo array that sum into integer target
        //subarray elements must be unique

//strat
    //create an output array
    //sort nums
        //iteriate
            //iteriate inner loop
                //declare third as j + 1
                //declare fourth at nums length
                //while loop based third and fourth
                    //declare a sum
                    //if sum is target then 
                        //push
                        //move third
                        //move fourth
                    //else if sum is less than target
                        //move third
                    //else if sum is greater than target
                        //move fourth

var fourSum = function(nums, target) {
  const output = [];
  nums.sort((a, b) => a - b);

  //first iteriation - i is first number
  for (let i = 0; i < nums.length - 3; i++) {
      //used to skip duplicates for i
      if (i > 0 && nums[i] === nums[i - 1]) continue
      //second iteriation - j is second number
      for (let j = i + 1; j < nums.length - 2; j++) {
          //used to skip duplicates when we are on multiple iterations of j, w/ respect to i
          if (j > i + 1 && nums[j] === nums[j - 1]) continue
          let k = j + 1;
          let l = nums.length - 1;
          while (k < l) {
              const sum = nums[i] + nums[j] + nums[k] + nums[l];
              if (sum === target) {
                  output.push([nums[i], nums[j], nums[k], nums[l]]);

                  //used to skip duplicates of k when we have a match
                  const kHold = nums[k];
                  while (nums[k] === kHold) k++;

                  //used to skip duplicates of l when we have a match
                  const lHold = nums[l];
                  while (nums[l] === lHold) l--;

              } else if (sum < target) k++;
              else l--;
          };
      };
  };

  return output;
};                        