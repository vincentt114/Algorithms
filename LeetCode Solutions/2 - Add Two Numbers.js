// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

//input 2 linked list heads
//output 1 linked list head
    //nodes are the sum of the ll nodes going left to right
//strat
    //create a new list passing in 0 as current
    //declare output a list (to keep track of for return)
    //declare a sum as 0
    //declare a carry as 0
    //while loop based on l1 being truthy, l2 being truthy, sum truthy
        //if l1 truthy
            //add to sum
            //next l1
        //repeat for l2
        //if sum greater equal than 10
            //increment carry
            //subtract 10 from sum
        //current next is new node passing in sum
        //sum now in carry
        //carry 0
    //return

var addTwoNumbers = function (l1, l2) {
  let current = new ListNode();
  const output = current;
  let sum = 0, carry = 0;
  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    current.next = new ListNode(sum);
    current = current.next
    sum = carry;
    carry = 0;
  }
  return output.next
};