
//Class exercise
//Use a sequence of if-else to print a message according
// to the name of a Canadian city
//Vancouver, Toronto, Montreal, Calgary and Winnipeg

city = 'Montreal'

if (city === 'Vancouver') {
    console.log('Nice, you live in Vancouver');
} else if (city ===' Toronto') {
   console.log('Cool, you live in Toronto');
} else if (city === 'Calgary') {
    console.log('Yeehaw! You live in Calgary');
} else if (city === 'Montreal') {
    console.log('Merveilleux, vous habitez à Montréal');
} else if (city === 'Winnipeg'){
    console.log('OOF, you live in Winnipeg');
} else {
    console.log('City not found')
  }

  //This is a bad practice, too many if and else statements
  