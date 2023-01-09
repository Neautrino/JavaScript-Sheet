const prompt = require("prompt-sync")();
let myAge = parseInt(prompt("Enter my age           "));
let yourAge = parseInt(prompt("Enter your age "));
myAge > yourAge
    ?console.log("I am",myAge-yourAge,"years older than you.")
    :console.log("I am",yourAge-myAge,"years younger than you.")