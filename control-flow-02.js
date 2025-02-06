/* 
    Switch Statement

    The switch statement is a complex decision-making statement in which a value
    is evaluated and flow is redirected to the first matching branch, known
    as a 'case' statement
*/

let number = 3;

switch (number) {
    case 1:
        console.log('One');
        break;
    case 2: 
        console.log('Two');
        break;
    case 3: 
        console.log('Three');
        break;
    case 4:
        console.log('Four');
        break;
    default: 
        console.log('Number not recognized')
}

//What happens without a switch break
//The program continues to the next labeled statement 
//The program executes the statements until a break or the end of the statement is reached 

// Essentially, the switch statement prevents a developer from having
// to write an unnecessarily long sequence of if-else statements