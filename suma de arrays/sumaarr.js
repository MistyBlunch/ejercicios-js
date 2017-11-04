var arr = [];
var suma = 0;
var mult = 1;

for(i=0;i<10;i++){
arr[i] = Math.floor((Math.random() * 10) + 1); //x10 para que sean números de 1 dígito, par 2 dígitos sería x100
suma = suma + arr[i];
mult = mult * arr[i];
console.log(arr[i]);
}
console.log("La suma es: " + suma);
console.log("La multiplicación es: " + mult);
