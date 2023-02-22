function capitalizeArray(arr){
    for(let i=0;i<arr.length;i++){
        let str = arr[i];
        arr[i] = str.toUpperCase();
    }
    return arr
}

let arr=["abc","def","ghi"];
console.log(capitalizeArray(arr))