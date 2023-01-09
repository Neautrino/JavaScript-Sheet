const prompt = require("prompt-sync")();
let hour = prompt("Enter hours");
hour = parseInt(hour);
let rate = prompt("Enter rate per hour");
rate = parseInt(rate);
console.log("Your weekly earning is :",hour*rate);