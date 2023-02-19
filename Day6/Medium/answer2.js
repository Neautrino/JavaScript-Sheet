let chars = "0123456789abcdef"
let str ="#"
for(let i=0;i<6;i++){
    str += chars.charAt(Math.floor(Math.random()*chars.length))
}
console.log(str)