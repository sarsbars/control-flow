let x = 5;

while (x > 0) {
  console.log(x);
  x--;
}

/*let y = 0;

do {
  console.log(y);
  y--;
} while (y > 0);

*/


let isValid = true;
let counter = 5;


while (isValid) {
  if (counter > 0) {
    console.log('Keep Going');
    counter--;
} else {
    isValid = false;
  }
}


let result = 14;
let i = 10;
let keepGoing = true;

do {
    i--;
    if (i === 8 )
        keepGoing = false;
        result -= 2; //this will run everytime because its the SECOND line after an if without {}
}    while (keepGoing);


console.log(result);