function sumOfOdds(n){
    let sum =0;
    for(let i=1;i<=n;i+=2){
        sum += i;
    }
    return sum;
}

console.log(sumOfOdds(10));