let res = '';
let string = '';
function validateHello(greetings) {
    console.log(greetings);
string = greetings.toLowerCase();
console.log(string);
   
    if (string.includes('hello') ||  string.includes('ciao') || string.includes('salut') ||  string.includes('hallo') || string.includes('hola') || string.includes('ahoj') || string.includes('czesc')){
      res = true;
    } else{ res = false;};
    return res;
    
  }
  
  validateHello('HOMbre BiEn VIStA; HasTa, doINg; YOu. TSchUss HoMBRE hasta; tsChUSS TRES WIe quE viStA YOu? DOInG, PAsa, Vista TSchusS hOmbRE! DOInG! hALlO. La HoMBRe, VISTA TSCHUSS QUE; LA; QuE');
  console.log(res);