/*
Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

getAllProducs([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

Be careful in this problem! What if there is a zero (or multiple zeroes) in the
input array? How would you handle this?
*/

const getAllProducts = array => {
    // declare couple variables. 
    // a variable that will keep a track of the zeroes within our array. (zeroCount)
    // a variable that will store the greatest possible product of multiplying all the values of the index. (products)
    // a variable that will keep a track of the index at where the value zero happens within the array. (indexAtZero)
    // a variable that will create an array of zeroes for the base case (zeroArray)
    let zeroCount = 0;
    let products = 1;
    let indexAtZero;
    const zeroArray = new Array(array.length).fill(0);

    // declare a for loop to iterate through the array
    for (let i = 0; i < array.length; i++) {
        // edge case to check for when we have values equal to zero within our array
        // increment our zero counter.
        // set zeroIndex to the index the zero value occured on.
        // edge case to break out of for loop if there are 2 or more zeroes since all multiplied products will always return as zero.
        if (array[i] === 0) {
            zeroCount++;
            indexAtZero = i;
            if (zeroCount === 2) break;
        }
        // else case for if there are one or no zeroes within our array, 
        else {
            products *= array[i];
        }
    }

    // return statement conditions for when zeroCount is not 2.
    if (zeroCount !== 2) {
        // for when we do not have any zeroes in our array
        // use map method to map a new array with each element being the result of dividing our greatest possible product by each element.
        if (zeroCount === 0) {
            return array.map(element => products / element);
        // for when we have one zero in our array,
        // we will just replace the greatest possible product value at the index where zero occurs.
        } else {
            zeroArray[indexAtZero] = products;
            return zeroArray
        }
    // return an array of zeroes for when there are 2 or more zeroes.
    } else {
        return zeroArray;
    }


}

console.log(getAllProducts([1, 7, 3, 4]))
console.log(getAllProducts([2, 0, 5]))
console.log(getAllProducts([0, 48, 0]))