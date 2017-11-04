//para numeros primos
function esPrimo(n){
    var bandera = false;
    for(i=2;i<=Math.floor(n/2);i++){
        var residuo = n%i;
        if(residuo == 0){
            bandera = true;
			break;
		}else{
			bandera = false;
        }
    }

	if(bandera == false){
		return n;
	}
}

var arr = [];

for(var j=0; j<1000;j++){
    if(esPrimo(j)){
      arr.push(esPrimo(j));
      if (arr.length == 50) {
        break;
      }
    }

}

console.log(arr);


// */var arr = [];
// for (var p=j, o=0; p<=100, o<=50; i++){
// arr[o]= j;
// console.log(j);
// }
