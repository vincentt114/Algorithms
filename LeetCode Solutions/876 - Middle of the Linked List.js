// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

//input head of linked list
//output the middle of linked list (if its even amount then return the 2nd middle node)

//strat
    //create an array
    //iterate through linked lists and push into array
    //if length is odd
        //return math ceiling of length / 2
    //else
        //return length / 2 + 1

var middleNode = function(head) {
  const arr = [];
  let current = head;
  while (current) {
      arr.push(current);
      current = current.next;
  }
  if (arr.length % 2 === 1) return arr[Math.floor(arr.length / 2)]
  else return arr[arr.length / 2]
};