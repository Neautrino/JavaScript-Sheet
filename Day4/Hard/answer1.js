const prompt = require("prompt-sync")();
let month = prompt("Enter the month: ");
let updatedMonth = month[0].toUpperCase() + month.slice(1).toLowerCase();
let days;
switch(updatedMonth){
    case "January":
        days = 31;
        break;
    case "February":
        days = 28;
        break;
    case "March":
        days = 31;
        break;
    case "April":
        days = 30;
        break;
    case "May":
        days = 31;
        break;
    case "June":
        days = 30;
        break;
    case "July":
        days = 31;
        break;
    case "August":
        days = 31;
        break;
    case "September":
        days = 30;
        break;
    case "October":
        days = 31;
        break;
    case "November":
        days = 30;
        break;
    case "December":
        days = 31;
        break;
}
console.log(`${updatedMonth} has ${days} days.`);