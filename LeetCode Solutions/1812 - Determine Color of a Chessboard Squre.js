// You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.



// Return true if the square is white, and false if the square is black.

// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

//input string
//output boolean
    //where boolean represents if input coordinate is white

//strat
    //create 2 arrays : even and odds
        //fill in even with a, c, e, g
        //fill in odd with b, d, f, h
    //create a helper function
        //takes in first char of input and determines whether we want a remainder of 0 or 1
        //then return % 2nd char by 2 and whether or not it has a remainder of 0 or 1

        var squareIsWhite = function(coordinates) {
          const even = ['a', 'c', 'e', 'g'];
          
          const helper = (letter, number) => {
              if (even.includes(letter)) {
                  return number % 2 === 0
              }
              else return number % 2 === 1
          }
          
          return helper (coordinates[0], coordinates[1])
      };