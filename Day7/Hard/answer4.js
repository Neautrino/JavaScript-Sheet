const prompt = require("prompt-sync")()
 
function rgbColorGenerator(){
    let str = "rgb("
    for(let i=0;i<3;i++){
        str+= Math.round(Math.random()*255);
        if(i!=2)str+=","
        else str+=")"
    }
    return str;
}

function arrayOfRgbColors(){
    let n=prompt("Enter number of rgb colors ");
    let arr = []
    for(let i=0;i<n;i++){
        arr.push(rgbColorGenerator())
    }
    return arr
}

console.log(arrayOfRgbColors());