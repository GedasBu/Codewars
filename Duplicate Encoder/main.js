let letter='';
let letter2='';
let duplicate;
let newString;
let lowerCaseWord = '';

function duplicateEncode(word) {
  newString = '';
  lowerCaseWord = word.toLowerCase();   
  for (let i = 0; i < word.length; i++) {    
    letter = lowerCaseWord.slice(i, i + 1);    
 
    duplicate = 0;
    for (let l = 0; l < word.length; l++) {    

      if (letter === lowerCaseWord.slice(l, l + 1)) {
        duplicate++;
       };
      
    };
 
    if (duplicate > 1) {
      newString +=')';
    } else {newString += '(' };
  }
return newString;
}

duplicateEncode('recede');
duplicateEncode('sos');
console.log(newString);
