// input = [9, 5, 4, 5];
// output = [1, 3, 2, 3];

// input = [7, 7, 4, 5, 3, 4, 5, 7]
// output  [4, 4, 2, 3, 1, 2, 3, 4]

    //the top shelf should be the first number that appears in the array with the fewest amount of occurrences
    //the bottom shelf should the be the last number that appears in the array with the highest amount of appearances

//create a cache using the new Map method to preserve the order in which the element appear
//create and initialize a highest num variable
//iteriate through the input to fill out the cache
    //reassign the highest num variable so it remains the highest amount of appearances

//create output variable and initialize it as copy of input array   
//create a current variable initailize at 1
//create a count variable intailize at 1
//while loop based on current varaible vs highest num variable
    //for in loop on cache
        //if cache[key] == current THEN change ALL the key elements in output to count
        //increment count
    //increment current

//return output

// input = [7, 7, 4, 5, 3, 4, 5, 7]
// output  [4, 4, 2, 3, 1, 2, 3, 4]
// const shelves = (array) => {
//   //createing the cache
//   let cache = new Map();
//   //highest is to keep track of the highest number of appearances
//   let highest = 1;
//   //filling out the cache and highest via for loop
//   for (let i = 0; i < array.length; i++) {
//       if (!cache[array[i]]) cache[array[i]] = 1;
//       else cache[array[i]]++;
//       if (cache[array[i]] > highest) highest = cache[array[i]];
//   }
//   //create output
//   let output = [...array];
//   //to keep track of where we are in the while loop ( 1 to highest )
//   let current = 1;
//   //used to determine shelf place
//   let count = 1;

//   console.log(cache)
//   //used to replace elements in output
//   //this while loop sucks because i if input is [ 2, 1, 0, 4, 3, 5]
//     //numbers that i replace may be replaced again
//   while (current <= highest) {
//       for (let keys in cache) {
//           if (cache[keys] === current) {
//               for (let j = 0; j < output.length; j++) {
//                 if (output[j] === keys) output.splice(j, 1, count);
//               }
//               count++;
//           }
//       }
//       current++;
//   }
//   return output;
// }
function shelves(arr) {
  const cache = new Map();
  
  for(let i = 0; i < arr.length; i++) {
    cache.set(arr[i], cache.get(arr[i]) + 1 || 1);
  }
  const newCache = {};
  cache.forEach((value, key) => {
    newCache[value] = newCache[value]?.concat(key) || [key];
    //if (!newCache[value]) = [key]
    //else newCache[value].concat(key)
  });
  console.log(newCache)
  let counter = 1;
  const finalCache = {};
  for(const key in newCache) {
    newCache[key].forEach(element => {
      finalCache[element] = counter++;
    });
  }
  
  return arr.map(element => finalCache[element]);
}

let test = [9, 5, 4, 5]
console.log(shelves(test))

//ORDER NUMBERS
//input 2 strings = "AACDD", "AACDA"
//output string = "YES" or "NO"

//if the 2 inputs similar
  //similar IF 
    //1. strings are both same length 
    //2. if neither strings have a character that appears 3 more times than the other

//ex: SIMILAR : "AAACCD" "ACDBEF"
//ex: NOT SIMILAR: "AAAA" "ABCD"
function orderNumbers(string1, string2){
  const cache = {};

  if(string1.length !== string2.length) return false;

  for(let i = 0; i < string1.length; i++){
    if(!cache[string1[i]]) cache[string1[i]] = 1;
    else{
        cache[string1[i]]++;
    }
    
    if(!cache[string2[i]]) cache[string2[i]] = -1;
    else{
        cache[string2[i]]--;
    }
  }
  console.log(cache);
  for(const key in cache){
      if(Math.abs(cache[key]) >= 3) return false;
  }
  return true;
}

console.log(orderNumbers("AAABCD", "ACDBEF"))
console.log(orderNumbers("AACCD", "ACDBEF"))
console.log(orderNumbers("AACCD", "ZAAZZ"))
//TIME LOGS
//input array and integer = ['5 login 0', '7 logout 120', '4 login 15', '7 login 80', '4 logout 30', '5 logout 20'], 30
//output array = ['4', '5']

//output array consists of the "user ids" whose (logout - login) < integer input

const timeLog = (array, integer) => {
  // declare a variable and assign it to an object
  const cache = {};
  const result = [];
  // iterating through the array
  for (let i = 0; i < array.length; i++) {
    let temp = array[i].split(' ')
    if (!cache[temp[0]]) {
        if (temp[1] === 'login') {
            cache[temp[0]] = [temp[2]];
        } else {
            cache[temp[0]] = [0, temp[2]];
        }
    } else {
        if (cache[temp[0]].length === 1) {
            cache[temp[0]].push(temp[2]);
        } else {
            cache[temp[0]][0] = temp[2];
        }
    }
  }

  for (const prop in cache) {
    if (Number(cache[prop][1]) - Number(cache[prop][0]) < integer) {
        result.push(prop);
    }
    }
  return result;
}



console.log(timeLog(['5 login 0', '7 logout 120', '4 login 15', '7 login 80', '4 logout 30', '5 logout 20'], 30));