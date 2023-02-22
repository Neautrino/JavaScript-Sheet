function reverseArray(arr){
    let len = arr.length;
    for(let i=0;i<len/2;i++){
        let temp = arr[len-1-i];
        arr[len-1-i]=arr[i]
        arr[i]=temp
    }
    return arr;
}

let arr = [1,2,3,4,5,6]
console.log("Before Reverse: ",arr)
reverseArray(arr)
console.log("After Reverse: ",arr)