function isUnique(arr){
    for(let i=0;i<arr.length;i++){
        if(i==arr.lastIndexOf(arr[i]));
        else{
            console.log("All elements are not unique")
            return;
        }
    }
    console.log("All the elemenets are unique");
}

isUnique([7,8,5,6])