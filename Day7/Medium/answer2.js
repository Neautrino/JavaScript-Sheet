function solveQuadratic(a,b,c){
    let x = Math.sqrt((b*b)-(4*a*c));
    let arr = []
    arr[0] = (-b+x)/(2*a)
    arr[1] = (-b-x)/(2*a)

    return arr;
}

console.log(solveQuadratic(1,-1,-2));