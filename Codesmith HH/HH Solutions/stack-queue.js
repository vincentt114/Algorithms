/**
 * 
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 * - unshift: add value to bottom (start) of stack
 * - shift: remove value from bottom (start) of stack
 * 
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, Last Out rule.
 * 
 * DO NOT USE NATIVE JS METHODS
 * 
 */

/**
 * ==============================
 * ==============================
 *       STACK SOLUTION(S)
 * ==============================
 * ==============================
 */

function Stack() {
  this.stack = {};
  this.length = 0;
}

// pop method should remove and return 
// the last element from the stack
Stack.prototype.pop = function () {
  if (!this.length) return;
  const popped = this.stack[this.length - 1];
  delete this.stack[this.length - 1]
  this.length--;
  return popped;
};

// push method should add passed in value to the end of 
// the stack and return the new length of the stack
Stack.prototype.push = function (val) {
  this.stack[this.length] = val;
  this.length++;
  return this.length;
};


/**
 * ==============================
 * ==============================
 *        QUEUE SOLUTIONS
 * ==============================
 * ==============================
 */

/**
 * @see https://www.geeksforgeeks.org/queue-using-stacks/
 * enQueue(q,  x)
 *   1) Push x to stack1 (assuming size of stacks is unlimited).
 * Here time complexity will be O(1)
 * 
 * deQueue(q)
 *   1) If both stacks are empty then error.
 *   2) If stack2 is empty
 *        While stack1 is not empty, push everything from stack1 to stack2.
 *   3) Pop the element from stack2 and return it.
 * Here time complexity will be O(n)
 */ 
function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function (val) {
  this.stack1.push(val);
}

Queue.prototype.dequeue = function () {
  if (!this.stack1.length 
    && !this.stack2.length) return;
  if (!this.stack2.length) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
}

/**
 * Same Solution, Better Naming!
 */
function Queue2() {
  this.inStack = new Stack();
  this.outStack = new Stack();
}

Queue2.prototype.enqueue = function (val) {
  this.inStack.push(val);
}

Queue2.prototype.dequeue = function () {
  if (!this.inStack.length 
    && !this.outStack.length) return;
  if (!this.outStack.length) {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop());
    }
  }
  return this.outStack.pop();
}

module.exports = { Stack, Queue };
