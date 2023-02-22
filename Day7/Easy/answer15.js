function findMax(a,b,c){
    return (a>b && a>c)?a:(b>c)?b:c;
}

console.log("Maximum number is:",findMax(0,-10,5))