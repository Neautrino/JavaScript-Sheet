let string = 'You cannot end a sentence with because because because is a conjunction'
let str = 'because because because';
let index = string.indexOf(str);
let len = str.length;
console.log(string.substr(index , len));
console.log(string.slice('because because because'));