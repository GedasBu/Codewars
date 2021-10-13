function persistence(num) {
  let timesCounter = 0;
  while (num >= 10) {
    let numberToStrings = [];
    let digits = [];
    let result = 1;

    numberToStrings = num.toString().split('');
    digits = numberToStrings.map(Number);
    for (let i = 0; i < digits.length; i++) {
      result = result * digits[i];
      
    }
    num = result;
    timesCounter++;
  }
 
  return (timesCounter);
 
}

persistence(399);

