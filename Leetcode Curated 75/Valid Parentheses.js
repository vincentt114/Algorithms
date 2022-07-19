// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

//input a string consisting of brackets
//output boolean

//WHERE 
  //string opening must be closed by appropriate pairing
  //must be in correct order

//PLAN
  //USE RECURSION

//create an order let and initialize to empty ''

//create an let array called order
//create a cache obj
//iteriate through s
  //if an opener add to cache and push to order
  //if closer 
    //decrement from cache (if 0 then return false)
    //check if appropriate pair in order (pop)
//check if order length 
//return 

var isValid = function(s) {

  const order = [];
  const cache = {};

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
      case '{':
      case '[':
        if (!cache[s[i]]) cache[s[i]] = 1;
        else cache[s[i]]++;
        order.push(s[i]);
    }
    if (s[i] === ')') {
      if (cache['('] === 0) return false;
      else cache['(']--;
      if (order.pop() !== '(') return false;
    }
    else if (s[i] === ']') {
      if (cache['['] === 0) return false;
      else cache['[']--;
      if (order.pop() !== '[') return false;
    }
    else if (s[i] === '}') {
      if (cache['{'] === 0) return false;
      else cache['{']--;
      if (order.pop() !== '{') return false;
    }
  }

  if (order.length !== 0) return false;
  return true;

};

console.log(isValid('(){}'))