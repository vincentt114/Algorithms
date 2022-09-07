// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//input array, integer
//output index of integer within array or where it would be (arr is sorted)

//rules
    //but be log n time complexity - implement via a binary search

//strat
    //create a helper function that recursively calls itself (begin, end)
        
        //declare a mid var
        //if array at mid index === integer return mid
        //if target is less than array[mid] call helper but pass mid - 1 as end
        //else call helper but pass mid + 1 as begin

  var searchInsert = function(nums, target) {

    const helper = (begin, end) => {
        if (begin > end) return begin;
        
        const mid = Math.floor((begin + end) / 2);
        if (nums[mid] === target) return mid;
        
        if (nums[mid] > target) return helper (begin, mid - 1)
        else return helper(mid + 1, end)
    }
    
    return helper(0, nums.length - 1)
};