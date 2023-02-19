let arr=[]
while(arr.length<5){
    let rand = Math.ceil(Math.random()*100)
    if(arr.includes(rand)!=1){
        arr.push(rand)
    }
}
console.log(arr)