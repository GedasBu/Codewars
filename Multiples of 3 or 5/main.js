function solution(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      sum = sum + i;
      console.log('dalinasi is 3 ir 5', i);
    } else if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
      console.log('dalinasi is 3 arba 5', i);
    }
  }
  console.log('Skaiciu suma', sum);
  return sum;
}

solution(11)
