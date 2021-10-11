

var uniqueInOrder = function (iterable) {
  let letter = '';
  let i = 0;
  string = [];
  //your code here - remember iterable can be a string or an array

  for (let char of iterable) {
    if (letter !== char) {
      while (iterable[i] === char) {
        if (iterable[i] === char) {
          letter = char;
        };
        i++;
        
      }
string.push(char);

    }


  };

  return (string);
  

}

uniqueInOrder('AAAABBBCCDAABBB')
console.log(string);