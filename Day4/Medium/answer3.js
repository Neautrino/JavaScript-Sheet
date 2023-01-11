const prompt = require("prompt-sync")();
let day = prompt("What is the day today? ");
let updatedDay = day[0].toUpperCase() + day.slice(1).toLowerCase();
if(updatedDay=="Saturday" || updatedDay=="Sunday"){
    console.log(`${updatedDay} is a weekend.`);
}else{
    console.log(`${updatedDay} is a working day.`)
}