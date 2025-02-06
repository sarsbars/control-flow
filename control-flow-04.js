/* 
    for...in and for...of loops
    
    The for...in loop is used to iterate over the properties of an object

    The for...of loop is used to iteratre over iterable objects  (array-like objects)

*/


//This a classic object
const athlete = {
    firstName: 'Wayne',
    lastName: 'Gretzky',
    sport: 'Hockey',
    seasonsPlayed: 20
}

for (let property in athlete) {
    console.log(`${property}: ${athlete[property]}`);
}

console.log ()

const numbers = [1, 2, 3, 4, 5];

let counter = 0;
for (let number of numbers) {
    counter++
    console.log(number);
}
//You use these for-of loops when you don't need the index 


console.log (`My loop iterated ${counter} times`)

/*
    counter++

    This is the same, much better way of saying counter = counter + 1
    BUT if you need to increment by more than 1, it will have to be 
    counter += 2, you can even do.. counter *= 2 or counter -= 2
*/

// We are doing this to prove that in JS, arrays are just objects, with
// numberic keys instead of string keys 

for (let prop in numbers) {
    console.log(`${prop}: ${numbers[prop]}`);
}

//you will never use this IRL