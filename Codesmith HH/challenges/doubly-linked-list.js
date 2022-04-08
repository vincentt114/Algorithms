/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null

  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

  NOTE: must use non-arrow functions for object constructors and prototype methods
  @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {
  const added = new Node(val);
  if (this.tail === null && this.head === null) {
    this.head = added;
    this.tail = added;
  }
  else {
    const hold = this.tail;
    this.tail.next = added;
    this.tail = added;
    this.tail.prev = hold;
  }
};

/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {
  //edge case
  if (this.head.val === null && this.tail.val === null) return;
  //if head
  if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
    return;
  }

  let current = this.head.next;
  while (current.val !== val) {
    current = current.next;
  }
  //if tail
  if (this.tail === current && current.val === val) {
    this.tail = this.tail.prev;
    this.tail.next = null;
    return;
  }
  else if (current.val === val) {
    current.prev.next = current.next;
    current.next.prev = current.prev;
    return;
  }
};

module.exports = { DoublyLinkedList, Node };

