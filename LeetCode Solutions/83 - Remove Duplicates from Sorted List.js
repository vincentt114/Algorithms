// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//input head of a node
//output return the head

//RULES
    //remove duplicate heads

//strat
    //create a current node and initialize to head
    //create a prev and next node and initialize to null
    //keep a cache of node values
    //enter into a while loop based on the condition of current being truthy
        //if cache[current.val] truthy
            //prev.next = next
        //else 
            //cache[current.val] = true
        //next = current.next
        //prev = current
    //return head
   
var deleteDuplicates = function(head) {

  const cache = {};
  let current = head;
  let prev = null;
  
  while (current) {
      if (cache[current.val]) {
          prev.next = current.next;
      }
      else {
          cache[current.val] = true;
          prev = current;
      }
      current = current.next;
  }
  
  return head;
};