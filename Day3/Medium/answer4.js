const prompt = require("prompt-sync")();
let radius = prompt("Enter the radius of circle ");
radius = parseFloat(radius);
const pi = 3.14;
console.log("Area of the circle is :",pi*radius*radius);
console.log("Circumference of the circle is :",2*pi*radius);