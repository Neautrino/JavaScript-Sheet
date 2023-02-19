let arr = [0,0]
for(let i=0;i<=100;i++){
    if(i%2==0){
        arr[0] +=i
    }else{
        arr[1] +=i
    }
}
console.log(arr)