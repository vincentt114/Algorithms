// Shopping has n items in inventory. 
// Each item has a rating that may be negative. The team wants to work on an algorithm that will suggest combinations of these items that customers might buy or combos for short.
// A combo is defined as a subset of the given n items. The total popularity of a combo is the sum of the popularities of the individual items in the combo. Design an algorithm that can find the k combos with the highest popularities. 
// Two combos are considered different if they have a different subset of items. Return an array of k integers where the ith denotes the popularity of the ith best combo. Combos should be returned arranged best to worst.

// Note: You can have an empty subset as a combo as well. The popularity for such a subset is 0.

// Example
// n = 3
// popularity = [3, 5, -2]
// k = 3

// All possible popularities of combos are 0, 3, 5, -2, 8, 3, 1, 6. The best three cobos have popularities 8, 6, 5. The answer is [8, 6, 5]

//input array, integer
//output array
  //that represents the highest integer sums of elements within input array

//strat
  //sort array highest to lowest
  //create a hold and initialize to 0, prev to 0
  //declare a current and initialize to 0
  //iteriate through array
    //create a temp of hold
    //use forEach method on temp to add element at current to temp
    //concat hold with temp
    //sort hold
    //if hold.length >= k
      //splice hold
      //if prev > hold at length BREAK
      //define prev as hold.length

const combo = (array, k) => {
  //sort
  array.sort((a, b) => b - a);
  console.log(array)
  let hold = [0], current = 0, last = null;

  while (current < array.length) {
    //creating a copy to add all elements at current iteriation to
    const temp = [...hold];
    temp.forEach((ele, index) => temp[index] += array[current])
    //combining copy with original
    hold = [...hold, ...temp]

    //sorting and then reducing to just k highest amount
    hold.sort((a, b) => b - a);
    if (hold.length >= k - 1) {
      hold.splice(k)
    }
    console.log(hold)
    //logic behind this is that if the least highest is no longer increasing, then it's time to end 
    if (hold[k - 1] <= last) break;
    last = hold[k - 1];
    current++;
  }

  return hold
}

console.log(combo([3, 2, 1, 1000], 4))