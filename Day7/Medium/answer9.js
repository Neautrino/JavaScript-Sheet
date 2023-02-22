let arr = [1,2,3,4,5]
function removeItem(i){
    arr.splice(i,1);
    return arr;
}
console.log(removeItem(3))