const prompt = require("prompt-sync")();
let name = prompt("Enter your name ");
name.length > 7
    ?console.log("Your name is long")
    :console.log("Your name is short")