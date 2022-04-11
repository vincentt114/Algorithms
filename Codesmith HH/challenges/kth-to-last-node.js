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

//input integer, head
//return value of integer to last node

//create last = 1
//create cache
//while loop through the nodes and creating key-value pairs in cache
  //also incrementing last

//return cache[last - k - 1]

function kthToLastNode(k, head){
  let last = 1;
  let current = head;
  let cache = {}
  while (current) {
    cache[last] = current.value;
    current = current.next;
    last++;
  }
  return cache[last - k]
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(kthToLastNode(2, a));

//Do not delete! 
module.exports = {Node, kthToLastNode};