// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

 

// Example 1:


// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
// Example 2:

// Input: root = []
// Output: []

//input root of a bst
//output nothing
    //but need to set the next property of each node

//strat
    //declare 2 arrays
        //currentArr and nextArr -> initialize current array to root
    //enter a while loop based on current's length
        //declare current as currentArr.pop
        //push into next
            //current left
            //current right
        //if currentArr 
            //then current.next will be currentArr[0]
        //else
            //cufrrentArr will be nextArr
            //nextArr nothing

var connect = function(root) {
  if (!root) return root
  let currentArr = [root], nextArr = [];
  while (currentArr.length) {
      const current = currentArr.shift();
      if (current.left) nextArr.push(current.left);
      if (current.right) nextArr.push(current.right);
      if (currentArr.length) current.next = currentArr[0];
      else {
          currentArr = nextArr;
          nextArr = [];
      }
  }
  return root;
};
