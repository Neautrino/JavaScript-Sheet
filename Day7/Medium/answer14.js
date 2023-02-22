function sumOfArguments(){
    let sum =0;
    for(let i of arguments){
        sum += i;
    }
    return sum;
}

console.log(sumOfArguments(1,2,3,4,5))