function evenAndOdds(n){
    let even =0;
    let odd = 0;
    for(let i=0;i<=100;i++){
        if(i%2==0){
            even++;
        }else{
            odd++;
        }
    }
    console.log("The number of odds are:",odd)
    console.log("The number of evens are:",even)
}

evenAndOdds(100);