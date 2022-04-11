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

// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}

//input ll and value
//output value
//but want to remove first instance of linked list

//check to see if head is linked list
  //if yes reassign and remove
  //return

//declare past
//declare current
//use a while loop
  //if current's value === val
    //if val.next isnt null
      //reassign past to current's next
      //return
    //else reassign past's next to null

const linkedListRemove = (ll, val) => {
  if (ll.head.val === val) {
    const current = ll.head;
    const newHead = ll.head.next;
    ll.head = newHead;
    return current;
  }
  else {
    let past = ll.head;
    let current = ll.head.next;
    while (current) {
      if (current.val === val) {
        if (current.next !== null) {
          past.next = current.next;
          return current;
        }
        else {
          past.next = null;
          return current;
        }
      }
      past = current;
      current = current.next;
    }
  }
  return undefined;
};


/*
Extension: 
* Write a function to delete the first instance of a node in a singly linked list with a space complexity of O(1). 
* Write a function to delete the all instances of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'd' -> 'c' -> 'd')
 
 And given a.val, 'd', the evaluated result of calling your function should be:

 ('a' -> 'b' -> 'c')

*/

const linkedListRemoveMultiple = (ll, val) => {

}

module.exports = { LinkedList, Node, linkedListRemove, linkedListRemoveMultiple };
