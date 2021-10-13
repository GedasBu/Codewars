function findOutlier(integers){
  let even = 0;
  let odd = 0;
  let countEven = 0;
  let countOdd = 0;

  for (let i = 0; i<integers.length;i++){
    if (integers[i] % 2 === 0){
      countOdd++;
      odd = integers[i];
    } else  {
      countEven++;
      even = integers[i];
    }    
  }

  if (countOdd>countEven){
    return even;
  } else { 
    return odd;
  }
}

findOutlier([1,1,0,1,1])