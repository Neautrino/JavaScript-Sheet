const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter value of a: "));
let b = parseInt(prompt("Enter value of b: "));

//Using IF-ELSE

if(a>b){
    console.log(`${a} is greater than ${b}`);
}else{
    console.log(`${b} is greater than ${a}`);
}

//Using Ternary Operator
a>b
    ?console.log(`${a} is greater than ${b}`)
    :console.log(`${b} is greater than ${a}`);

