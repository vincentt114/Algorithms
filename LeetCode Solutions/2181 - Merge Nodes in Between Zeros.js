// You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

// For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

// Return the head of the modified linked list.

 

// Example 1:


// Input: head = [0,3,1,0,4,5,2,0]
// Output: [4,11]
// Explanation: 
// The above figure represents the given linked list. The modified list contains
// - The sum of the nodes marked in green: 3 + 1 = 4.
// - The sum of the nodes marked in red: 4 + 5 + 2 = 11.
// Example 2:


// Input: head = [0,1,0,3,0,2,2,0]
// Output: [1,3,4]
// Explanation: 
// The above figure represents the given linked list. The modified list contains
// - The sum of the nodes marked in green: 1 = 1.
// - The sum of the nodes marked in red: 3 = 3.
// - The sum of the nodes marked in yellow: 2 + 2 = 4.

//input top of a linked list
//output top of a linked list
    //where we sum all the values of nodes in between 0 value nodes

//strat
//declare a zRule and initialize to false
//declare a currentSum and initialize to 0
//declare a top
//declare a prevNode
//declare a accumulator
//declare a current
//situation for when zRule is enforce and not enforced
//zRule not enforced and current value is false
    //zRule true
//zRule not enforced
    //if no top then haed is new Node passing in current value
    //update prevNode
//zRule is enforced
    //if current val is 0
        //if no top and accumulator is true then
            //top is new node passing i accumulator
            //update accumulator
            //update prev node
        //if accumulator is true
            //create new node 
            //update prev node
            //update accumulator
    //else
        //update accumulator with current node's val
//update current node
//return top

var mergeNodes = function(head) {

let zRule = false, top, prevNode, accumulator = 0, current = head;

while (current) {
  if (!zRule && !current.val) {
      zRule = true;
  }
  else if (!zRule) {
      if (!top) {
          top = new ListNode(current.val);
          prev = top;
      }
      else {
          const node = new ListNode(current.val);
          prev.next = node;
          prev = node;
      }
  }
  if (zRule) {
      if (!current.val) {
          if (!top && accumulator) {
              top = new ListNode(accumulator);
              prev = top;
              accumulator = 0;
          }
          else if (accumulator) {
              const node = new ListNode(accumulator);
              prev.next = node;
              prev = node;
              accumulator = 0;
          }
      }
      else {
          accumulator += current.val
      }
  }
  current = current.next;
}
return top;
};