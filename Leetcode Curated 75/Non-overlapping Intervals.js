//input array of array
//output integer
    //WHERE integer represents the least amount of times it takes to remove overlapping sub arrays

//sort and then go from backwards forwards to determine overlap based on
    //if (pre[1] > post[0]) then remove

//STRAT
    //sort intervals using index 0 as first priority then 1 as second
    //declare a output and initialize to 0
    //declare first pointer and initialize it to end of input
    //enter while loop 
        //declare secodn point j = i - 1
        //second while loop based on (j >= 0 and intervals[j][1] > intervals[i][0])
            //increment output and j
        //i = j
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1]
      else return a[0] - b[0]
    })
    console.log(intervals)
    let output = 0;
    let i = intervals.length - 1;
    while (i > 0) {
        let j = i - 1;
        while (j >= 0 && intervals[j][1] > intervals[i][0]) {
            j--;
            output++;
        }
        i = j;
    }
    return output;
};