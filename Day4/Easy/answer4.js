const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number: "));
if(num%2 == 0){
    console.log(`${num} is an even number.`);
}else{
    console.log(`${num} is an odd number.`);
}
