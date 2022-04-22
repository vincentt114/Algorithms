/*

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters 'r', 'p', and 's'.

For example:

rps(0) -> ['']
rps(1) -> ['r', 'p', 's']
rps(2) -> ['rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss']
rps(3) -> [
  'rrr', 'rrp', 'rrs', 'rpr', 'rpp', 'rps', 'rsr', 'rsp', 'rss',
  'prr', 'prp', 'prs', 'ppr', 'ppp', 'pps', 'psr', 'psp', 'pss',
  'srr', 'srp', 'srs', 'spr', 'spp', 'sps', 'ssr', 'ssp', 'sss'
]

The strings must be returned in the order suggested above.

*/

//input integer
//output array
  //where each element of the array is a string input-integer length
  //each element is represents one of the possible combos of RPS based on the integer

//declare an output arr initialize it to empty
//declare options array and initialize it to the individual ones

//RECURSION
//create a helper function that takes in two variables (option, integer)
  //if integer is 0 push into output and return
  //option concat with index at i (wrap it all in a for loop?)
    //recurse

const rps = n => {
  let output = [];
  const options = ['r', 'p', 's']

  const helper = (option, n) => {
    //base case to get out of recursive loop
    if (n === 0) {
      output.push(option);
      return
    }
    //logic to fill out
    for (let i = 0; i < options.length; i++) {
      helper(option.concat(options[i]), n-1)
    }
  };

  helper('', n);
  return output;
};

console.log(rps(1))
/*

Extension:

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters in 'chars'. Assume that there will be
no duplicates in 'chars'.

This is equivalent to returning all possible passwords of length n given a
character set 'chars'.

For example:

passwords('ab', 1) -> ['a', 'b']
passwords('abxy', 2) -> [
  'aa', 'ab', 'ax', 'ay',
  'ba', 'bb', 'bx', 'by',
  'xa', 'xb', 'xx', 'xy',
  'ya', 'yb', 'yx', 'yy'
]

The strings must be returned in order reflecting the order of letters in 'chars'

*/

//input string and integer
//output array of strings
  //where each element of array is a string that is input-integer length
  //where each element of array represents a possible combo of char of input string

//declare a let variable called output and initialize it to []

//RECURSION
//create a helper function that takes in 2 args (string, integer)
  //if integer is 0 push the string into the output and return
  //for loop - iteriate through the input string
    //helper function (string concating with input string[i], integer -1)
//call helper passing in ('', n)
//return outptu

const passwords = (chars, n) => {
  let output = [];
  const helper = (string, n) => {
    if (n === 0) {
      output.push(string);
      return;
    }
    for (let i = 0; i < chars.length; i++) {
      helper(string.concat(chars[i]), n - 1)
    }
  }
  helper('', n);
  return output;
};

module.exports = {rps, passwords};
