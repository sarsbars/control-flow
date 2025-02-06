/* Check out while and do-while loops
Don't forget to get some examples
*/

// The do-while will run your code once before checking conditions
// The while always checks conditions first before running your code

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
