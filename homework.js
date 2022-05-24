'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
    var aDecimal = 0;
    var indice = 0;
    for(var i = num.length - 1; i >= 0;  i--){
      aDecimal += num[i] * 2 ** indice;
      indice++
    }
    return aDecimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  var resto = "";
  while(num > 0){
    resto = num % 2 + resto;
    num = Math.floor(num/2)
  }
  return resto; 
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}