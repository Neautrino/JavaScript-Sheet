const prompt = require("prompt-sync")()
function BMI(weight , height){
    return weight/(height*height);
}

let weight=prompt("Enter your weight ");
let height = prompt("Enter your height");
let bmi = BMI(weight,height);
if(bmi<18.5){
    console.log("You are Under Weight , Your BMI is:",bmi);
}else if(bmi>=18.5 && bmi<=24.9){
    console.log("You are Normal Weight , Your BMI is:",bmi);
}else if(bmi>=25 && bmi<=29.9){
    console.log("You are Over Weight , Your BMI is:",bmi);
}else{
    console.log("You are Obese , Your BMI is:",bmi);
}