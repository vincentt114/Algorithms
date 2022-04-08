/*
Write a function to delete the first instance of a node in a singly linked list.
The function should return the deleted node, or undefined if the value was not found.
Example: 
Given a linked list:
 
('a' -> 'b' -> 'c' -> 'b' -> 'd')
 
And given a value, 'b', the linked list after calling your function should look like:
('a' -> 'c' -> 'b' -> 'd')
And the evaluated result would be the removed node with the value of 'b'.
How might you remove a linked list value without adding extra properties to the constructor functions?
*/

function LinkedList() {
  this.head = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
}


const linkedListRemove = (ll, val) => {
  
  let removedNode;

  // Check to see if target value is in head node
  if (ll.head.val === val) {
    removedNode = ll.head; 
    ll.head = ll.head.next;
    return removedNode;
  } else {
    // Set pointer references to the current and next nodes
    let curNode = ll.head;
    let nextNode = curNode.next;

    while (nextNode) {
      // Determine whether the next node's value matches the input value
      if (nextNode.val === val) {
        // If so: Set the current Node's next property equal to the node that follows the node that matches the input value
        removedNode = nextNode;
        curNode.next = nextNode.next;
        nextNode = nextNode.next;
        // Return the removed node
        return removedNode;
      } else {
        //If not: Iterate the two pointers by one node
        curNode = nextNode;
        nextNode = nextNode.next;
      }
    }
  }
    // If value is not found, return undefined
    return removedNode;
  };

  // Test Cases: 
  // const ll = new LinkedList();

  // const a = new Node('A');
  // const b = new Node('B');
  // const c = new Node('C');
  // const d = new Node('D');
  // const e = new Node('E');
  
  // ll.head = a;
  // a.next = b;
  // b.next = c;
  // c.next = d;
  // d.next = e;

  // #3: Bonus: Remove all instances of the value
  
  // Time Complexity:  0(n)
  // Space Complexity:  0(1)
  
  const linkedListRemoveMultiple = (ll, val) => {
    // Determine whether the first node value matches the input value
    if (ll.head.val === val) return ll.head.next;
    else {
      // Set pointer references to the current and next nodes
      let curNode = ll.head;
      let nextNode = curNode.next;
      while (nextNode) {
        // Determine whether the next node's value matches the input value
        if (nextNode.val === val) {
          // If so: Reassign the pointers to ignore the node matching the target value
          curNode.next = nextNode.next;
          nextNode = nextNode.next;
        } else {
          // If not: Iterate the two pointers by one node
          curNode = nextNode;
          nextNode = nextNode.next;
        }
      }
    }
    // Return the (now updated) original linked list
    return ll;
  };