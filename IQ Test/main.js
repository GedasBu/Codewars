function iqTest(numbers) {
  const stringToNumber = numbers.match(/\d+/g);
  let countOdd = 0;
  let countEven = 0;
  let oddPlace = 0;
  let evenPlace = 0;
  

  for (let i = 0; i < stringToNumber.length; i++) {
    if (stringToNumber[i] % 2 === 1) {
      countOdd++;
      oddPlace = i + 1;

    } else {
      countEven++;
      evenPlace = i + 1;

    }
  }
  if (countOdd < countEven) {    
    return oddPlace;
  } else {    
    return evenPlace;
  }

}







iqTest("2 4 7 8 10")
iqTest("1 2 2")
iqTest("1 2 1 1")

