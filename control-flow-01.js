/* 
    Control flow: the "if" statement

    The 'if' statement will execute one group of instructions if a condition 
    is true/truthy and another group if it is false/falsy

    true means that a value or comparison is literally true
    truthy means that a value will be CONSIDERED true when evaluated 

*/

let hasData = true;
let isCitizen = false;

if (hasData) {
    console.log('Data is available');
}

if (!hasData) {
    console.log('Data is not available');
}

if (hasData) {
    console.log('Data is available');
} else {
    console.log('Data is not avaialble');
}

let checkData = hasData && isCitizen;

if (checkData) {
    console.log('Data is available and user is a citizen');
}

let a = 15;
let b = 10;
let c = 5

//We can "chain" if statements together with "else if"
// Long sequences of "else if" are hard to read, more than 3 is BAD PRACTICE

if (a > b) {
    console.log('a is greater than b'); 
} else if (b > a){
    console.log('b is greater than a');
} else {
    console.log('a and b are equal');
}


// Conditional Operators (aka ternary operators)
    // A short-hand way to write if-else statements


let age = 17;

let canVote = age >= 18 ? 'Yes' : 'No';

//Thats asking is age greater or equal than 18, its a TINY if/else statement

console.log('Can vote: ' + canVote);

//Truthy and falsy values (uuuuuggghhh!!)
let n = 5;
let z = 0;
let studentName = 'Ousama';

if (n) {
    console.log('n is truthy');
} else {
    console.log('z is falsy');
}

if (z) {
    console.log('n is truthy');
} else {
    console.log('z is falsy');
}
//Truthy means any positive number, any empty object or array

//if (studentName) { //YUCK YUCK YUCK BAD PRACTICE!
  
if (studentName.length > 0) { //BETTER PRACTICE 
    //this is clear, we are checking if a studentName exists
    console.log('Student name is not empty');
} else {
    console.log('Student name is empty');
}

if (studentName === 'Ousama') {
    console.log('Hello Ousama');
} else {
    console.log('Hello');
}
/*
if ( 10 > 5)
    console.group('10 is greater than 5');
else
    console.log('10 is not greater than 5');

 ^ You technically don't have to use {} if it is a smol if statement, but its
 BAD PRACTICE BABY!

 
An if without {} will only execuute the first line of code
 after the condition, in the below example it would print "blah blah blah"
 if (5 > 10)
    console.log('10 is greater than 5');
    console.log('blah blah blah');

 */

