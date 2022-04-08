/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²) time. Is it possible to do this in O(n) time? 
  Example:
  const nums = [2, 5, 11, 15]
  twoSum(nums, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,
  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/


const twoSum = (arr, target) => {

  /* worst time complexity  O(n²)   
    The brute force attempt to generate every possible pair
    in the array that sum up to the target which involves 2 nested loops.
     
    In this soution, pointer 1(i) starts at the first index of the array. 
    pointer 2(j) starts at the element after i. The outer 'for' loop will remain fixed 
    at one element while the inner loop will add and check if each element after the fixed 
    element adds up to sum of the target.
    Big O Analysis (where n is the number of elements)
    Time Complexity: O(n²)  
    Space Complexity: O(n)
 
   */
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === target) return true;
    }
  }
  return false;

}

const twoSum2 = (arr, target) => {

  /* Better attempt  O(n) 
  This method keeps track of all the numbers that were visited inside the array in an object. 
  We know that the complement of the target is the target minus the element. 
  For example :
  Target = 7
  nums = [2, 5, 11, 15]
  compliment = 7 - 2 = 5
 
  We will now check to see if the complement is inside of the array in constant time O(1) using the object. 
  if our object contains a 5 we know that 5 + 2 = 7. 
  Rational: complement + arr[i] = target. 
  Big O Analysis (where n is the number of elements)
  Time Complexity: O(n) since we would only loop through the array one time
  Space Complexity: O(n) Space is linear since our cache size is dependent on the number of element inside the array.
 */

  const cache = {};
  for (let i = 0; i < arr.length; i += 1) {
    const complement = target - arr[i];
    if (cache[complement]) return true;
    cache[arr[i]] = true;
  }
  return false;

}

  /*
    Recursive solution 
    Big O Analysis (where n is the number of elements)
    Time Complexity: O(n²) since each recusive call is an element in the array j will eventually visit revisit the same element i has seen.
    Space Complexity: O(n) Space is linear since our cache size is dependent on the number of element inside the array.
  */

const twoSumRecurse = (arr, target, i = 0 , j = i + 1 ) => {
  // do not count duplicates in the array.
  if(i === j ) j = j + 1;
  if (arr[i] + arr[j] === target) return true;
  // when you have checked all elements in the array
  if (i === arr.length - 1) return false;
  // if J is at the last element, reset it to the front and check all other element in the array
  if (j === arr.length - 1) {
    i = i + 1;
    j = 0;
  }

  j = j + 1;
  return twoSumRecurse(arr, target, i, j)
}



/*
Extension:
 Given an array of numbers and a target number, 
 return true if three of the numbers in the array add up to the target. 
 Otherwise, return false.
  
 The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?
*/

const threeSum = (arr, target) => {
  /* worst time complexity  O(n³)
   The brute force attempt to generate every possible triple
   in the array that sum up to the target which involves 3 nested loops.
   Big O Analysis (where n is the number of elements)
   Time Complexity: O(n³)
   Space Complexity: O(n)
  */

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      for (let k = j + 1; k < arr.length; k += 1) {
        if (arr[i] + arr[j] + arr[k] === target) return true;
      }
    }
  }

  return false;

}

const threeSum2 = (arr, target) => {

  /* Better attempt  O(n²)  
   This method uses three pointers where the first pointer is
   fixed for the first iteration while the other two increment and decrement. 
   Pointer 1: starts at the first element in the array 
   Pointer 2: starts at the second element in the array
   pointer 3: starts at the last elment in the array.
   As we sum the three elements, if the sum is less than the target
   we will need a larger number. Since the array is sorted, we can increase 
   pointer 2 for a larger additive. If the sum of the three is larger than the target,
   we will decrement the last pointer since the larger element is at the end of the array.
   Big O Analysis (where n is the number of elements)
   Time Complexity: O(n²)
   Space Complexity: O(n) : since we are making a copy of the array and sorting the elements in the copy.
  */

  const copyArr = [...arr];
  copyArr.sort((a, b) => a - b);
  for (let i = 0; i < copyArr.length - 2; i += 1) {
    let j = i + 1;
    let k = copyArr.length - 1;
    while (j < k) {
      if (copyArr[i] + copyArr[j] + copyArr[k] === target) return true;
      else if (copyArr[i] + copyArr[j] + copyArr[k] < target) j += 1;
      else k -= 1;
    }
  }
  return false;
}

const nums = [2, 5, 11, 15]
console.log(threeSum2(nums, 31))

module.exports = { twoSum, threeSum };