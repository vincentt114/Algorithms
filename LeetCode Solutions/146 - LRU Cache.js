// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

//STRAT
    //create a node class
    //create a linked list class
        //constructor (val, key, next, prev)
            //has length
        //push - pushes to the tail and returns the node
        //removes the node
    //LRU
        //constructor
            //creates linked list class
            //creates cache
            //creates capacity
        //get (key)
            //remove the node
            //construct the node
            //push the node
        //put (key, value)
            //check if cache[key] exist
                //if yes
                    //capacity above 0?
                        //if yes then cache[key] = node
                        //remove ll
                        //push
                    //capacity 0 or less
                        //update key-value to cache
                        //delete key-value in linked list
                        //add key-value to linked list
                //if no
                    //capacity above 0
                        //if yes then cache[key] = node
                        //push
                        //capacity--;
                    //capacity 0 or less
                        //remove the most recent linked list
                        //delete the cache
                        //add key-value to cache
                        //add key-value to linked lis

class Node {
  constructor(key = null, value = null, prev = null, next = null) {
    this.key = key;
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  push(key, value) {
    const prev = this.tail.prev;
    const node = new Node(key, value, prev, this.tail);
    prev.next = node;
    this.tail.prev = node;
    this.length++;
    return node
  }
  remove(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    this.length--;
  }
}

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.ll = new LinkedList()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache[key]) return -1

  const node = this.cache[key];
  this.ll.remove(node);
  this.ll.push(key, node.value);
  return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

  if (this.cache[key]) {
    const remove = this.cache[key];
    this.ll.remove(remove);
    this.cache[key] = this.ll.push(key, value)
  } else if (this.capacity > 0) {
    this.cache[key] = this.ll.push(key, value)
  } else { //covers new key-value and no more capacity
    const remove = this.ll.head.next;
    this.ll.remove(remove);
    delete this.cache[remove.key];
    this.cache[key] = this.ll.push(key, value)
  }

};
                      