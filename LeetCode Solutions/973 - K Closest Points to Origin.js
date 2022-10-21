// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

//input array and integer
//output array of array
    //where there are input integer amounts of sub arrays
    //sub arrays are the shortest from the 0,0 mark

//strat
    //create a sort []
    //create an output []
    //iteriate through points
        //fill up sort with index[ele1]** + index[ele2]**
    //sort sort
    //declare current at 0
    //while loop based on k
        //push into out output [sort[current][1], sort[current][2]]
    //return

var kClosest = function (points, k) {
  const sort = [];
  const output = [];

  for (let i = 0; i < points.length; i++) {
    sort.push([points[i][0] * points[i][0] + points[i][1] * points[i][1], points[i][0], points[i][1]])
  }
  sort.sort((a, b) => a[0] - b[0])

  current = 0
  while (k) {
    output.push([sort[current][1], sort[current][2]])
    k--;
    current++;
  }
  return output;
};