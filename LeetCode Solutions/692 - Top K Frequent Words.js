// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

 

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

//input array and integer
//output array that is integer long that consists of the input array's elements most appeared elements
    //organize by number of appearance and then alphabetically

//strat
    //create a cache
    //iteriate through words
        //fill out cache so that its element: num of appearances
    //create an array consisting of the words (object.keys(cache))
    //sort the array -> 2 parts (1st is num of appearances and 2nd is alphabetically)
        //declare a check and initialize it to b element - a element
        //if check is 0 then return localecompare between a and b
        //else return b element- a element
    //return array slice between 0 and k

var topKFrequent = function (words, k) {
  const cache = {};
  for (let i = 0; i < words.length; i++) {
    if (!cache[words[i]]) cache[words[i]] = 0;
    cache[words[i]]++;
  }
  const arr = Object.keys(cache);
  arr.sort((a, b) => {
    const check = cache[b] - cache[a];
    if (check === 0) return a.localeCompare(b);
    return check
  })
  return arr.slice(0, k)
};