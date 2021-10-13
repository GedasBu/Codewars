function comp(array1, array2) {
  if (array1 === null || array2 === null ){
   return false;
 }
 let counter = 0;
 array1.sort(function(a, b){return a-b});
 array2.sort(function(a, b){return a-b});
 
 for (let i = 0; i < array1.length; i++) {
 
  if ((array1[i]*array1[i]) === array2[i]){
    counter++;
  } else return false;
 }

 if(counter === array1.length){   
   return true;
 } 

}


a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b);