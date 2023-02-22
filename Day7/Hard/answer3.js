const prompt = require("prompt-sync")()
let str="0123456789ABCDEF"

function hexaColorGenerator(){
    let color ="#"
    for(let i=0;i<6;i++){
        color+=str.charAt(Math.round(Math.random()*str.length));
    }
    return color;
}

function arrayOfHexaColors(){
    let arr = []
    let n = prompt("Enter the number of colors ");
    for(let i=0;i<n;i++){
        arr.push(hexaColorGenerator())
    }
    return arr;
}

console.log(arrayOfHexaColors());