function isSameType(arr){
    for(let i=1;i<arr.length;i++){
        if(typeof arr[0] != typeof arr[i]){
            console.log("All are not same type");
            return;
        }
    }
    console.log("All are same type")
}

isSameType([1,2,3,"4",5,6])
