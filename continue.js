/*
    continue causes the flow to stop the execution of the current iteration, and 
    goes on to the next, preventing any other instruction from being executed
*/
'use strict';

const numbers = [0, 1, 2, 3, 4, 5];
const { log } = console; 

for (let i = 0; i < numbers.length; i++) 
    if (numbers[i] > 2) {
        continue;   
    
    
    log(numbers[i]); //Unreachable code. Not cool - you can see 'log' is slightly lighter coloured
}