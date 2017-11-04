

function ImparOk(n){
  var a = false;
  for(i=2; i<=Math.floor(n/2); i++){
    var residuo = n % 1;
    if (residuo == 0){
      a = true;
      break;
    }else{
      a = false;
    }
  }
    if(a == false) {
        console.log(n);
  }
}
