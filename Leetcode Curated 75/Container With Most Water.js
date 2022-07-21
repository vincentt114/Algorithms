// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

//input array
//output integer

//where the integer represents the greatest square/rectangle area of a graph made from the input arr
//STRAT
  //declare output and initialize to 0
  //2 pointers within a while loop 
    //left will be at 0 
    //right will be at length - 1
    //declare current vol = math.min(nums(left), nums(right)) * right - left
      //reassign output as necessary
    //move left or right depending on whats bigger
  //return

var maxArea = function(height) {
  let output = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const current = (Math.min(height[left], height[right]) * (right - left));
    if (current > output) output = current;
    if (height[left] > height[right]) right--;
    else left++;
  } 
  return output;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))