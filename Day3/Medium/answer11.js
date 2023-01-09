const prompt = require("prompt-sync")();
let firstName = prompt("Enter your first name ");
let lastName = prompt("Enter your last name ");
firstName.length > lastName.length
    ?console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
    :console.log(`Your first name, ${firstName} is smaller than your family name, ${lastName}`)
    