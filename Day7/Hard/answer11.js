function sum(){
    let ans =0;
    for(let i of arguments){
        ans += i;
    }
    return ans;
}

console.log(sum(2,4,5,62,4));