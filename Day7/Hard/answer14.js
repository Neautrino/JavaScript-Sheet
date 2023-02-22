function modifyArray(arr){
    if(arr.lenght<5){
        console.log("item not found");
    }
    arr[4]="Subhendu";
    return arr;
}

let arr =['Avocado', 'Tomato', 'Potato','Mango','Lemon','Carrot']
console.log(modifyArray(arr));