// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false

//input linked list
//output boolean
    //baesd on whether or not the values of the linked lists are a palindrome

//strat
    //create an array
    //iterate through the linked list and push the values of the ll into the array
    //then iterate through array using 2 pointers first and last (using a while loop)
        //if first and last dont equal each other return false
    //return true

var isPalindrome = function(head) {
  const arr = [];
  let current = head;
  while (current) {
      arr.push(current.val);
      current = current.next;
  }
  let first = 0, last = arr.length - 1;
  while (first < last) {
      if (arr[first] != arr[last]) return false
      first++;
      last--;
  }
  return true;
};