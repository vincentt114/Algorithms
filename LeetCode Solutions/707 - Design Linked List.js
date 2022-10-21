// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.length) return -1;
  let current = this.head.next;
  while (index--) current = current.next;
  return current.val;
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  this.length++;
  const next = this.head.next;
  const node = new Node(val, this.head, next)
  this.head.next = node
  next.prev = node;
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  this.length++;
  const prev = this.tail.prev;
  const node = new Node(val, prev, this.tail);
  this.tail.prev = node;
  prev.next = node;
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0 || index > this.length) return;
  if (index === this.length + 1) {
      this.addAtTail(val);
      return;
  }
  this.length++;
  let current = this.head;
  while (index--) current = current.next;
  const next = current.next;
  const node = new Node(val, current, next);
  current.next = node;
  next.prev = node;
};

/** 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.length) return;
  this.length--;
  if (this.length === index) this.tail.prev = this.tail.prev.prev;
  let current = this.head;
  while (index--) current = current.next;
  current.next = current.next.next;
};