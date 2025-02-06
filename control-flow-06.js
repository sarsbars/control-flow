// Nested for loops

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
    console.log(`i: ${i} | j: ${j}`);
    }
}

// This is a 2D array (multidimensional array)
const numbers = [
    [10, 11, 12, 13],
    [20, 21, 22, 23],
    [30, 31, 32, 33],
    [40, 41, 42, 43]
];


for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        console.log(`Row: ${i} | Column: ${j} | Value: ${numbers[i][j]}`);
    }
}