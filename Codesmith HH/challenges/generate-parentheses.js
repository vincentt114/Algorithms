/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

//input integer
//output array of all possible combos of parantheses of integer

const generateParentheses = n => {

  const output = [];
  const helper = (string, l, r) => {
    if (r === 0) {
      output.push(string);
      return
    };
    if (l > 0) {
      helper(string.concat('('), l - 1, r)
    }
    if (r > l) {
      helper(string.concat(')'), l, r - 1)
    }
  }
  helper('', n, n);
  return output;
};

console.log(generateParentheses(3))

module.exports = {generateParentheses};
