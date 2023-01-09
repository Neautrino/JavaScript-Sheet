const prompt = require("prompt-sync")();
let year = parseInt(prompt("Enter your birth year"));
let age = 2023 - year;
age >= 18
    ?console.log(`You are ${age}. You are old enough to drive.`)
    :console.log(`You are ${age}. You will be allowed to drive after ${18-age} years.`);
    
