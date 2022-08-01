// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//Examples
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11

//input integer
//output integer

//WHERE
  //you 'split' input to several single digit integers 
  //if the sum of the split integers === 1 digit return
  //else repeat

//RECURSION
  //split n
  //if add them up
  //if length is 1 return
  //else recurse

  function digitalRoot(n) {
    // ...
    const string = n.toString()
    let sum = 0
    for (let i = 0; i < string.length; i++) {
      sum += (Number(string[i]))
    }
    if (sum.toString().length > 1) return digitalRoot(sum)
    else return sum
  }