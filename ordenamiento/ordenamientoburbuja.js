var array = [];
var aux  = 0;

for (var i = 0; i <20; i++) {
  array[i] = Math.round(Math.random() * 100) + 1;
}
console.log(array);
var n = array.length;

function ordenar(ar){
  for (var i = 1; i < n; i++) {
   for (var j = 0; j < n-i; j++) {
     if (ar[j] > ar[j+1]) {
       aux = ar[j];
       ar[j] = ar[j+1];
       ar[j+1] = aux;
     }
   }
 }console.log(ar);
}

ordenar(array);
