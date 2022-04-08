/**
 * Write a function that takes two parameters (an integer, and the head of a
 * singly linked list) and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 * 
 * Additional Information:
 *  - invalid inputs should return undefined
 *  - should find the last node by passing in 1
 */


function Node(val) {
    this.value = val;
    this.next = null;
  }

function kthToLastNode(k, head) {
    // initialize two pointers, lead & follow
    let lead = head;
    let follow = head;
    let i = 0;
    
    // increment i and traverse linked list until lead pointer is k nodes ahead of head node
    while (i < k && lead) {
      lead = lead.next;
      i += 1;
    }

    // edge case: if length of the linked list is less than k, return 
    if (i !== k) return;
  
    // traverse the linked list with both pointers. 
    while (lead && follow) {
      lead = lead.next;
      follow = follow.next;
    }
    
    // once lead pointer reaches the end of the linked list, follow will be pointing to the kth to last node
    return follow ? follow.value : undefined;
  }; 
  