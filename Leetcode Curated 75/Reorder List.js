// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

//input head of ll
//output nothing
    //need to rearrange ll so that the 2nd half is injected into 1st half at every other

//STRAT
    //create an array and fill it with the nodes using a while loop
    //create a var to hold array length
    //create new var and intiailize to head
    //enter for loop to array length
        //if i divisble by 2 then new var next is arr shift
        //else pop

        var reorderList = function(head) {
    
          const arr = [];
          let current = head;
          while (current) {
              arr.push(current);
              current = current.next;
          }
          
          let len = arr.length;
          current = head;
          
          for (let i = 0; i < len; i++) {
              if (i % 2 === 0) current.next = arr.shift()
              else current.next = arr.pop()
              current = current.next
          }
          current.next = null
      };