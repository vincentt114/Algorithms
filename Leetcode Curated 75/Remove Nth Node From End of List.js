// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

//input head of node and integer
//output return head

//log them into an object or array?
//2 

//one pass through
//2 pointers fast and slow both initialized to head
//move fast to the nth node using a for loop
//edge case if n wants to remove the head b/c there wont be a prior one
  //if fast === null return head.next
//while loop to move both fast and slow until fast is at the end
//logic to skip
//return


var removeNthFromEnd = function(head, n) {
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (fast === null) return head.next;
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};
