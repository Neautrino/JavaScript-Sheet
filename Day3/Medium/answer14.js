const prompt = require("prompt-sync")();
let year = parseInt(prompt("Enter number of years you live: "));
console.log(`You lived ${365*24*60*60*year} seconds.`);