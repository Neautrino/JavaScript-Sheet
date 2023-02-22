let str="0123456789ABCDEF"

function hexaColorGenerator(){
    let color ="#"
    for(let i=0;i<6;i++){
        color+=str.charAt(Math.round(Math.random()*str.length));
    }
    return color;
}

function rgbColorGenerator(){
    let str = "rgb("
    for(let i=0;i<3;i++){
        str+= Math.round(Math.random()*255);
        if(i!=2)str+=","
        else str+=")"
    }
    return str;
}

function generateColors(code,n){
    let arr = []
    if(code=="rgb"){
        for(let i=0;i<n ;i++){
            arr.push(rgbColorGenerator());
        }
    }else{
        for(let i=0;i<n ;i++){
            arr.push(hexaColorGenerator());
        }
    }
    return arr;
}

console.log(generateColors("rgb",3))
console.log(generateColors("hexa",3))