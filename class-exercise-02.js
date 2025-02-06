// Given the following array, use a for loop to print the odd numbers only

const numbers = [2, 3, 7, 4, 9, 1, 8, 11, 16];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
        console.log(numbers[i]); }
    } 

console.log(); //this just prints a blank space 

// Given the folllowing array, use a for loop to print the odd numbers that
// re multiples of 3
const list = [1, 2, 3, 7, 4, 9, 1, 8, 11, 15, 17, 18, 20, 21];

for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 1 && list[i] % 3 === 0) {
             console.log(list[i]); }
            } 
        
            console.log(); 

const words = [
    'hello', 'blue', 'goodbye', 'happiness', 'cat', 'bird'
]

for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
       let result = `${words[i]} has 5 or more characters`;
        console.log(result);
        } 
}

//     console.log(words[i] + ' has 5 or more characters'); } THIS IS YUCK
    // do the above and below instead of using a plus


let studentName = 'Connor';
let studentAge = '22';

console.log(
    `Welcome, ${studentName}. You are ${studentAge} years old.`
);