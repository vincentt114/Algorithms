// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

//input arr
//output arr

//WHERE 
  //output arr is the reverse of input arr

//declare 3 variables
  //prev = null
  //current = head
  //next = null
//iteriate through the nodes via a while loop, baesd on the condition that head is truthy
  //update next to current.next //logging the og route
  //update current.next to prev //updating assignment
  //update prev to current
  //update current to next;
//return prev


var reverseList = function(head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

console.log(reverseList([1,2,3,4,5]))