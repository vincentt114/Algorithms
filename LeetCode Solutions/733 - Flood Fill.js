// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

//input matrix, i, j and integer
//output matrix
    //where we update matrix[i][j] to integer and all other elements that are the initially the same as [i][j] AND are connected to it horizontally or vertically to integer

//strat
    //general - dfs/recursion
    //declare an initial and initialize it to matrix[i][j]
    //helper function that takes in i, j
        //need to add an additional if statement check that element is dif from color to prevent infinite looping
        //change matrix at i and j to color
        //4 if statements to recurse horizontally and vertically
    //call helper
    //return image

var floodFill = function(image, sr, sc, color) {
  const initial = image[sr][sc];

  const helper = (i, j) => {
      if (image[i][j] != color) {
          image[i][j] = color;
          if (i - 1 >= 0 && image[i - 1][j] === initial) helper(i - 1, j);
          if (i + 1 < image.length && image[i + 1][j] === initial) helper(i + 1, j);
          if (j - 1 >= 0 && image[i][j - 1] === initial) helper(i, j - 1);
          if (j + 1 < image[0].length && image[i][j + 1] === initial) helper(i, j + 1);
      }
  }
  helper(sr, sc);
  return image;
};