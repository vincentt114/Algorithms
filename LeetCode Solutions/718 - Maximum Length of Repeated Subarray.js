// Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

 

// Example 1:

// Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// Output: 3
// Explanation: The repeated subarray with maximum length is [3,2,1].
// Example 2:

// Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
// Output: 5
// Explanation: The repeated subarray with maximum length is [0,0,0,0,0].

 //input 2 arrays
//output integer
	//that represents the length of the longest subarray between the 2 arrays

//strat
	//declare an output and initalize to 0
	//create a helper function that takes in 2 arguments index of Comparing and array to Comapre
		//declare a similar var and initalize to 0
		//declare a compare index and initialize to 0
		//declare a compare index Tracker and initialize to compare index
		//declare comparing index and initialize to index
		//enters a while loop based on comapre index being less than compare length
			//if the values at the 2 indexes are equal
        //increment both
        //increment similar var
        //update output
			//if not equal and comparing index is NOT equal to input index
				//reset comparing index
				//icnrement compare index tracker
				//reset compare index to compare index tracker + 1
				//reset similar
			//else
				//increment compare index tracker
				//reset compare index
	//iteriate through array 1
		//call helper on index and array 2
	//return output

  var findLength = function(nums1, nums2) {
    const helper = (index) => {
    let similar = 0;
    let compareIndex = 0, compareIndexTracker = 0, comparingIndex = index;
    while (compareIndex < nums2.length) {
      if (nums1[comparingIndex] === nums2[compareIndex]) {
        compareIndex++;
        comparingIndex++;
        similar++;
        output = Math.max(similar, output);
      } 
      else if (nums1[comparingIndex] != nums2[compareIndex] && comparingIndex != index) {
        comparingIndex = index;
        compareIndexTracker++;
        compareIndex = compareIndexTracker;
        similar = 0;
      } 
      else {
        compareIndexTracker++;
        compareIndex = compareIndexTracker;
      }
    }
  }
  
  let output = 0;
  for (let i = 0; i < nums1.length; i++) {
    //edge case to remove duplicative work
    if (output >= nums1.length - i) break
    helper(i)
  }
  return output
};