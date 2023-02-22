const prompt=require("prompt-sync")()
let str ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function userIdGeneratedByUser(){
    let char = prompt("Enter number of Characters ");
    let n = prompt("Enter number of ids ");
    for(let i=0;i<n;i++){
        let ans="";
        for(let j=0;j<char;j++){
            ans+=str.charAt(Math.round(Math.random()*str.length));
        }
        console.log(ans);
    }
}

userIdGeneratedByUser();