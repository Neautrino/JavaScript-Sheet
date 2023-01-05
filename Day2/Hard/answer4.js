let string = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let arr = string.match(/\d+/g);
let sum = 0;
for(let i=0;i<arr.length;i++){
    sum += parseInt(arr[i]);
}
// console.log(arr);
console.log(`The total income is:`,sum);