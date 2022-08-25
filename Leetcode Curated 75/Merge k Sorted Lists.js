// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

//input array of linked list
//output return the head of the combined linked list

//strat
//create a new list node

//create an empty array
//iteriate through all the nodes and pull out the val and push into the empty array

//sort the array low -> high
//while array.length
    //have the next of the new list node be the shift of array

    var mergeKLists = function(lists) {
    
      const node = new ListNode(0, undefined);
      let current = node;
      
      let arr = [];
      for (list of lists) {
          while(list) {
              arr.push(list.val);
              list = list.next
          }
      }
      
      arr.sort((a, b) => a - b)
      // console.log(arr)
      while (arr.length) {
          // console.log('arr:', arr)
          current.next = new ListNode(arr.shift());
          current = current.next;
      }
      return node.next;
  };