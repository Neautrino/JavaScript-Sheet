let sumEven =0;
let sumOdd = 0;
for(let i=0;i<=100;i++){
    if(i%2==0){
        sumEven +=i
    }else{
        sumOdd +=i
    }
}
console.log("Sum of all Even numbers is:",sumEven)
console.log("Sum of all Odd numbers is:",sumOdd)
