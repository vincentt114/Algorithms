// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


//input 2 linked lists
//output the head of the merged linked list between the 2

//STRAT
//create a new linked list 
//enter into a while loop based on list1 and 2 being truthy
    //if list1.val is smaller than list 2
        //then new ll next is list 1
        //list 1 enxt
    //else list 2
        //list 2 next
//return head

var mergeTwoLists = function(list1, list2) {
  const list = new ListNode(0) 
  let current = list;
  
  while (list1 && list2) {
      if (list1.val <= list2.val) {
          current.next = list1;
          list1 = list1.next;
      }
      else {
          current.next = list2;
          list2 = list2.next
      }
      current = current.next
  }
  current.next = list1 || list2;
  
  return list.next
};