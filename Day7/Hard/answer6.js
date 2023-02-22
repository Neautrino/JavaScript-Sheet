let hexvalues = "0123456789ABCDEF";

function decimalToHexa(n){
    let hex =""
    if(n==0){
        return "00";
    }
    while(n!=0){
        let rem = n%16;
        hex += hexvalues.charAt(rem);
        n = parseInt(n/16);
    }
    let arr = hex.split("")
    arr = arr.reverse();
    hex = arr.join("")
    return hex;
}

function convertRgbToHexa(r,g,b){
    return "#"+decimalToHexa(r)+decimalToHexa(g)+decimalToHexa(b);
}

console.log(convertRgbToHexa(163,181,193))