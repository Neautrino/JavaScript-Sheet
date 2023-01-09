// const prompt = require("prompt-sync")();
let length = prompt("Enter the length of the rectangle ");
length = parseFloat(length);
let width = prompt("Enter the width of the rectangle ");
width = parseFloat(width);
console.log("Area of the rectangle is :",length*width);
console.log("Perimeter of the rectangle is :",2*(length+width));