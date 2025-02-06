/*
    The break and continue statements provide stricter control over the 
    execution of code in a loop
*/
   

/*break exits the loop immediately, forcing execution to continue to the next
    instruction after the loop
*/


const numbers = [0, 1, 2, 3, 4, 5];
const { log } = console; 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        log(`${numbers[i]}, bye`);
        break;
    }
}

log();

let count = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0) {
        break;
    }
    count++;
}

log(count);

