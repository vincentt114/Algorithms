// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

//input string, integer
//output string

//rule
    //output string is the input string that has been converted into a horizontal "zig-zag" and then compiled left to right, top to bottom

//strat
    //nested arrays to create the zig zag function
    //create an array that consists of numRows 
        //fill out the array top to bottom -> LOGIC for creating zig zag pattern
            //the first chars (numRows - 1) will be pushed into 0th index of each row



            var convert = function(s, numRows) {
              if (numRows === 1 || s.length < numRows) return s
              
              let rows = [];
              let reverse = false;
              let count = 0;
              
              for (let i = 0; i < numRows; i++) {
                  rows[i] = []
              }
              
              for (let i = 0; i < s.length; i++) {
                  rows[count].push(s[i]);
                  reverse ? count-- : count++;
                  if (count === numRows - 1 || count === 0) reverse = !reverse
              }
              
              let output = '';
              for (let i = 0; i < rows.length; i++) {
                  for (let j = 0; j < rows[i].length; j++) {
                      output += rows[i][j]
                  }
              }
              
              return output;
          };