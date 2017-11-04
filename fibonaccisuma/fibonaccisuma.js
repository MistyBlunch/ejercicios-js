var arr = [];

function fib(n){
  if (n==0 || n ==1){
    return 1;
  }else{
    return fib(n-1) + fib(n-2);
  }
}

for (i=0 ; i <10; i++){
  arr[i] = fib(i);
  console.log(arr[i])
}
