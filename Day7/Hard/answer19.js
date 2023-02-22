function sevenRandomNumbers(){
    let arr =[]
    while(arr.length!=7){
        let rand = Math.floor(Math.random()*10)
        if(arr.includes(rand)){
            continue;
        }
        arr.push(rand);
    }
    return arr;
}

console.log(sevenRandomNumbers());