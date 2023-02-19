let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyx1234567890"
let str ="";
let rand = Math.floor(Math.random()*chars.length)
for(let i=0;i<=rand;i++){
    str += chars.charAt(Math.floor(Math.random()*chars.length))
}
console.log(str)