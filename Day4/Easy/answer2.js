const prompt = require("prompt-sync")();
let myAge = 19;
let yourAge = parseInt(prompt("Enter your age: "));
if(myAge > yourAge){
    console.log(`I am ${myAge - yourAge} years older than you.`);
}else{
    console.log(`You are ${yourAge - myAge} years older than me.`);
}