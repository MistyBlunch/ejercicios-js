//var n = parseInt(prompt("Numero"))
function esPrimo(n) {
  var bandera = false;
  for(i=2; i<=Math.floor(n/2);i++){
    var residuo = n % i;
    if (residuo == 0){
      bandera = true;
      break;
    }else{
      bandera = false;
    }
  }
    if (bandera == false){
      console.log(n)
    }
}
for(var j=2; j<100;j++){
    esPrimo(j);
}
