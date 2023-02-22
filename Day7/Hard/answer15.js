function isPrime(n){
    for(let i=2;i*i<=n;i++){
        if(n%i==0){
            console.log(n," is not a prime number");
            return;
        }
    }
    console.log(n," is a prime number");
}


isPrime(21)
isPrime(23)