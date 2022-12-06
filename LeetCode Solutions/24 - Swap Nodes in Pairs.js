// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]

//input root of a ll
//output root of the input ll
    //need to swap every other node

//strat -> use recursion
    //edge case tob reak out of recursion if head or next.next is null
    ///declare current, next, and skip
    //update next.next to current
    //update current.next to recursively call skip
    //return next

    var swapPairs = function(head) {
      if (!head || !head.next) return head;
      let current = head;
      let next = head.next;
      let skip = head.next.next;
      next.next = current;
      current.next = swapPairs(skip);
      return next;
  };