// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

//input array
//output integer
    //integer represents the "rain water" captured -> left/right elements act as the bucket height
        //lesser of left/right - height for each element
        //bucket edges are the continuous from left and from right
//strat
    //create output and initialzie to 0
    //declare left 
    //declare right

    //left[0] will be height[0]
    //iteriate through height beginning at 1
        //cache left[element] to be the greater of current element or previous cache left[i - 1]

    //right[height length - 1] will be height[height length. - 1]
    //iteriate through height beginning at height length - 2
        //cache right[element] to be the greater of current element or previous cache right[i + 1]

    //iteriate height
        //output += math.min(left, right) - height

var trap = function(height) {
  let output = 0;
  const left = {}, right = {};
  
  left[0] = height[0];
  for (let i = 1; i < height.length; i++) {
      left[i] = Math.max(height[i], left[i - 1])
  }
  
  right[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
      right[i] = Math.max(height[i], right[i + 1])
  }
  
  for (let i = 0; i < height.length; i++) {
      output += Math.min(left[i], right[i]) - height[i]
  }
  
  return output; 
};