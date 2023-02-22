function macAddress(){
    let str = "0123456789ABCDEF";
    let mac = "";
    for(let i=0;i<6;i++){
        mac += str.charAt(Math.round(Math.random()*str.length));
        mac += str.charAt(Math.round(Math.random()*str.length));
        if(i!=5)
        mac+=":"
        
    }

    return mac;
}

console.log(macAddress());