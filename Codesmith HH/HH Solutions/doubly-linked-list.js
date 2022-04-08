/*
  * Below, you are provided the constructor function for a doubly linked list as well as a constructor function for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null
  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null
  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null
  Edge Cases (not part of prompt, but good to talk about with solutions):
  * What happens if you attempt to remove a non-existent value from the doubly linked list?
  * What happens if you attempt to remove an empty doubly linked list?
  
  Additional Notes:
  * NOTE: must use non-arrow functions for object constructors and prototype methods
  * @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
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
    // create a new instance of Node and pass the inputted 'val' to it
    const newNode = new Node(val);
    // create conditional to ask if this is the first Node to be added to LL
    if (this.head === null & this.tail === null) {
      // if it is, then reassign this.head & this.tail to the new Node to be added
      this.head = newNode;
      this.tail = newNode;
      // if it is not the first Node to be added, simply add the new Node by reassigning the value this.tail to point to the new Node
    } else {
      //first, point this.tail's next to the new Node
      this.tail.next = newNode;
      //then, change the new Node prev value to point to the current this.tail
      newNode.prev = this.tail;
      //lastly, change the value of this.tail to point to the newly added Node
      this.tail = newNode;
    }
  };

  DoublyLinkedList.prototype.remove = function (val) {
    
    if (this.head === null && this.tail === null) return;
    // Ask the question of if the inputted 'val' matches the value inside the head node and if the head is not the only node in the doubly linked list
    if (val === this.head.val && this.head.next !== null) {
      // if it does, then reassign the this.head to it's 'next' value
      this.head = this.head.next;
      // reassign the 'prev' value to null as it is now the head
      this.head.prev = null;
      // return to end function
      return;
     
    } else if (val === this.head.val && this.head.next === null) {
      // if it is, then reassign the this.head to it's 'next' value
      this.head = this.head.next;
      // reassign the this.tail value to null the doubly linked list is empty again
      this.tail = null;
      // return to end function
      return;
      // if not, execute this
    } else {
      // create a variable to track where we are in the LL
      let currNode = this.head;
      // traverse the LL
      while (currNode) {
        // create a variable to refence the next node
        const nextNode = currNode.next;
        // create a variable to reference next node's value
          //used ternary to ask if the current node's next value is 'null'
          //if it is, then I want to assign nextVal to null
          //if it is not, then I want to assign nextVal whatever value is referenced inside of the current node's next property
        const nextVal = currNode.next === null ? null: currNode.next.val;
        //ask if nextNode is currently pointing to the same reference as this.tail and if the value we're searching for is in the next node, which would be the tail
        if (nextNode === this.tail && nextNode.val === val) {
          //if so, reassign this.tail.prev to be the new this.tail
          this.tail = this.tail.prev;
          //then, reassign the new this.tail's next value to be null
          this.tail.next = null;
          // return to end iteration & function
          return;
          // ask the question of if the value inside the next node is the one to be removed
        } else if (nextVal === val) {
          // if it is, then reassign currNode's next property to point to the next of the next
          currNode.next = currNode.next.next;
          // then reassign the currNode.next.prev value to point to the currNode
          currNode.next.prev = currNode;
          // return to end iteration & function
          return;
        }
        // this reassignment is what continues the iteration through LL
        currNode = currNode.next;
      }
      
      return;
    }
  };