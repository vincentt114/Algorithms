// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

//input string, array
//output string
    //output is the substring within input string that appears the most, excluding the strings within input array (lower case everything)
//strat
    //create an empty cache
    //create an output and initialize to empty string, create a outputCount and initialize to 0
    //lowercase paragraph and then split it into an array -> use regex to split it by symbols
    //iteriate through paragraph
        //if current is in cache increment
        //else if current not in banned then add key-value pair of current : 1
        //check if value is greater than outputCount, if yes
            //update outputCount
            //update output
    //return output

var mostCommonWord = function(paragraph, banned) {
  const cache = {};
  let output = ''; outputCount = 0;
  paragraph = paragraph.toLowerCase().split(/[ ,.'";:?!]/)
  console.log(paragraph)
  for (let i = 0; i < paragraph.length; i++) {
      if (!paragraph[i].length || banned.includes(paragraph[i])) continue;
      if (cache[paragraph[i]]) cache[paragraph[i]]++;
      else cache[paragraph[i]] = 1;
      if (outputCount < cache[paragraph[i]]) {
          output = paragraph[i];
          outputCount = cache[paragraph[i]];
      }
  }
  return output;
};