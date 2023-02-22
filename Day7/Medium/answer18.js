function userIdGenerator(){
    let str ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let userId = ""
    for(let i=0;i<7;i++){
        userId += str.charAt(Math.round(Math.random()*str.length));
    }
    return userId;
}

console.log(userIdGenerator());