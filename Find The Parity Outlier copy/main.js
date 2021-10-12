function digital_root(n) {

  while (n >= 10) {
    let numberStrings = [];
    let digits = [];
    let sum = 0;
    numberStrings = n.toString().split('');
    digits = numberStrings.map(Number);
    for (let i = 0; i < digits.length; i++) {
      sum += digits[i];
    }
    n = sum;

  }
  return (n);

}

digital_root(7)