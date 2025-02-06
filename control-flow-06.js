// Nested for loops

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
    console.log(`i: ${i} | j: ${j}`);
    }
}
console.log()
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
console.log()
const numbers3D = [
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ],
    [
        [13, 14, 15, 16],
        [17, 18, 19, 20],
        [21, 22, 23, 24]
    ]
];

let counter = 0;


for (let i = 0; i < numbers3D.length; i++) { 
    for (let j = 0; j < numbers3D[i].length; j++) { 
        for (let k = 0; k < numbers3D[i][j].length; k++) { 
            console.log(`${numbers3D[i][j][k]}`);
            counter++;
        }
    }
}
console.log(counter);
//We are simulating a 3D array here
for (let i = 0; i < 4; i++) { 
    for (let j = 0; j < 4; j++) { 
        for (let k = 0; k < 4; k++) { 
            console.log(`${[i][j][k]}`);
            counter++;
        }
    }
}
console.log(`${counter} iterations`);