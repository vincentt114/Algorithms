function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 */

//input head

//create a cache
//create a order and initialize to 0
//sort through the entire linked list
  //fill out the cache so that the order is the key and the ll is the value

//iteriate through the cache using the order to reassign 

const reverseLinkedList = head => {

  if (head === null) return null;
  if (head.next === null) return head;

  const cache = {};
  let initialOrder = 0, current = head;

  while (current) {
    cache[initialOrder] = current;
    initialOrder++;
    current = current.next;
  }
  initialOrder--;
  const max = initialOrder;

  while (initialOrder >= 0) {
    if (initialOrder === 0) cache[0].next = null;
    else cache[initialOrder].next = cache[initialOrder - 1];
    initialOrder--;
  }
  return cache[max]
};

module.exports = { Node, reverseLinkedList }
