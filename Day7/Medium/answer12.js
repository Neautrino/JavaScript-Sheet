function sumOfEven(n){
    let sum =0;
    for(let i=2;i<=n;i+=2){
        sum += i;
    }
    return sum;
}

console.log(sumOfEven(10));