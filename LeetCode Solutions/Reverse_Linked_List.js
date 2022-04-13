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

//input head
//return new head

//let num = 0
//create cache to hold
//let node initialize to head

//while loop (node)
    //cache[num] = node;
    //increment num
    //node = node.next

//for loop based on num going down
    //if i > 1
        //reassign next next value
    //else reassign next to null

    var reverseList = function(head) {
    
      if (!head) return head;
      
      let num = 0;
      let cache = {};
      let node = head;
      
      while (node) {
          cache[num] = node;
          num++;
          node = node.next;
      }
      
      for (let i = num - 1; i >= 0; i--) {
          if (i > 0) cache[i].next = cache[i - 1];
          else cache[i].next = null;
      }
      
      return cache[num - 1];
  };