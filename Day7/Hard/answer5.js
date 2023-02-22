let hexvalues = "0123456789ABCDEF";
function hexToDecimal(str){
    let ans =0;
    let len = str.length
    for(let i=0;i<len;i++){ 
        let n = hexvalues.indexOf(str[i]);
        ans += n*Math.pow(16,len-1-i);
    }
    return ans;
}

function convertHexaToRgb(hexa){
    let r = hexToDecimal(hexa.slice(1,3));
    let g = hexToDecimal(hexa.slice(3,5));
    let b = hexToDecimal(hexa.slice(5,7));
    
    return "rgb("+r+","+g+","+b+")";
}

console.log(convertHexaToRgb("#FFFFFF"));
console.log(convertHexaToRgb("#000000"))