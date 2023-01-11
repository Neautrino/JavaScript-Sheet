const prompt = require("prompt-sync")();
let score = parseInt(prompt("Enter your score: "));
if(score<=100 && score>=80){
    console.log("Your Grade is: \'A\'");
}
else if(score<=89 && score>=70){
    console.log("Your Grade is: \'B\'");
}
else if(score<=69 && score>=60){
    console.log("Your Grade is: \'C\'");
}
else if(score<=59 && score>=50){
    console.log("Your Grade is: \'D\'");
}
else{
    console.log("Your Grade is: \'F\'");
}