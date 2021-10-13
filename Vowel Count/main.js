function getCount(str) {
  let vowelsCount = 0;   
 for (let letter of str ){
   console.log(letter);
   if(letter ==='a' || letter ==='e' || letter ==='i' || letter ==='o' || letter ==='u'){
    vowelsCount++
   }
 }
 
  return vowelsCount;
  
}

getCount('labas');
