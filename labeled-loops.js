'use strict'

const {log} = console;

//you can name your for loops
outer: for (let i = 1; i < 4; i++) {
    inner: for (let j = 1; j < 4; j++) {
        if (i + j === 4) {
            break inner;
        }
        log (`${i} + ${j}`)
    }    
}

log();

outer: for (let i = 1; i < 4; i++) {
    inner: for (let j = 1; j < 4; j++) {
        if (j === 2) {
            continue inner;
        }
        log (`${i} + ${j}`)
    }    
}

// challenge!
//Change the example above so it does not print if i and j are the same

for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
        if (i === j) { 
            continue; 
        }
        log(`${i} + ${j}`);
    }
}
log();

const numbers = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        log(numbers[i][j])
        if (numbers[i][j] === 2)
            break;
    }
}