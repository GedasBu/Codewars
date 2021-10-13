function validParentheses(parens){
 let countLeft = 0;
 let countRight = 0;
 let length = parens.length-1;
 if (parens.length < 0 && parens.length > 100 || parens[0] === ')' || parens[length] === '('){
  console.log('false');
  return false;
 }
 
    while (parens[0] === '('){
      // console.log('eilute', parens,'ilgis', parens.length);
      // console.log('pirmas simbolis',parens[0]);
      let l = 0; 
      // if (parens[l] === ')'){
      //   parens = parens.replace('(','');
      //   console.log('rez1',parens);
      //   parens = parens.replace(')','');
      //   console.log('rez',parens); 
      // }
      do{
            l++;
            if (parens[l] === ')'){
              // console.log('l', l);
              parens = parens.replace('(','');
              // console.log('rez1',parens);
              parens = parens.replace(')','');
              // console.log('rez',parens);
              // console.log('naujas simbolis',parens[l]);
              break;
            }
            // console.log('ieskau',parens[l],'l',l); 
           
          } while (parens[l]!==')')

        
      
    }

    if (parens.length === 1){
      console.log('false')
      return false
    } else {
      console.log('true')
      return true};



   
    
    








    // validParentheses("(())");


  // for (let parentheses of parens ){
  //     if(parentheses === '('){
  //       countLeft++;
  //     } else {
  //       countRight++;
  //     }
  //   }
  //   if (countLeft === countRight){
  //     console.log('true');
  //     return true;
  //    } else {
    //      console.log('false');
  //      return false; 
  //    }

  //  }
  // "())(()"

      
      
      
      // do{
      //     l+=1;
      //     if (parens[l] === ')'){
      //       parens = parens.replace('(','');
      //       console.log('rez1',parens);
      //       parens = parens.replace(')','');
      //       console.log('rez',parens);
      //     }
    
      //   } while (parens[l]!==')')
    
     
      

   
   

  //  for (let i=0;i<parens.length;i++){  
  //   console.log('eulute', parens) ; 
  //   console.log('pirmas simbolis',parens[0]); 

  //   if (parens[0] === '('){    
  //   do{
  //     l=i+1;
  //     if (parens[l] === ')'){
  //       parens = parens.replace('(','');
  //       console.log('rez1',parens);
  //       parens = parens.replace(')','');
  //       console.log('rez',parens);
  //     }

  //   } while (parens[l]!==')')

  //   } else{
  //   console.log('galutnis stringas',parens,'false');
  //   return false
  //  }
  // };
    
    
 
}

validParentheses("(())(()");