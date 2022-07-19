// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 
//input array
//output array 

//WHERE each element represents the sum of all elements of the input array excluding the element at the index

//create output array
//create a prefix arr = []
//create a postfix arr = []
//iteriate through nums beginning at i = 0
  //if i = 0 then push prefix as is
  //else push nums[i] * prefix[i - 1]
//iteriate through nums beginning at i = nums.length - 1
  //if i = nums.length - 1 then push as is
  //else unshift nums[i] * postfix[0]
//iteriate through nums
  //declare prior and post 
  //push into output prior*post

var productExceptSelf = function(nums) {
  const output = [];
  const prefixArr = [];
  const postfixArr = [];

  //prefix represents all the numbers being multiplied from left to right
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) prefixArr.push(nums[i]);
    else prefixArr.push(nums[i] * prefixArr[i - 1])
  }
  
  //postfix represents all the numbers being multiplied from right to left
  for (let j = nums.length - 1; j >= 0; j--) {
    if (j === nums.length - 1) postfixArr.push(nums[j])
    else postfixArr.unshift(nums[j] * postfixArr[0])
  }

  //here we multiple prefix with postfix in a way that does not involve the index in question
  for (let k = 0; k < nums.length; k++) {
    let prefix;
    if (k === 0) prefix = 1;
    else prefix = prefixArr[k - 1];
    let postfix;
    if (k === nums.length - 1) postfix = 1;
    else postfix = postfixArr[k + 1]
    output.push(prefix * postfix)
  }

  return output
};

console.log(productExceptSelf([1,2,3,4]))