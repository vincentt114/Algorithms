/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/
//input arr
//output reverse the arr in place

//2 moving points beginning at the edges of the array
//while loop to swap the elements the pointers are indicating

//declare the 2 pointers and initialize them to the front/end of the array
//while loop
  //declare a hold variable and initialize it to the element at index end
  //reinitialize the element at the end to the front
  //retinitialize the front element to the hold
  //increment/decrement
//return array

const reverseArray = array => {
  let i = 0; j = array.length - 1;

  while (i < j) {
    const hold = array[j];
    array[j] = array[i];
    array[i] = hold;
    i++;
    j--;
  }

  return array;
}

console.log(reverseArray([1, 2, 3, 4]))

/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseSentence = sentence => {

  let array = sentence.split(' ')
  let i = 0; j = array.length - 1;

  while (i < j) {
    const hold = array[j];
    array[j] = array[i];
    array[i] = hold;
    i++;
    j--;
  }

  return array.join(' ');
};

console.log(reverseSentence('bob likes dogs alot'))

module.exports = {reverseArray, reverseSentence};
