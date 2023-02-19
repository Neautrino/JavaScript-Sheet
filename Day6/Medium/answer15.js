let fruit = ['banana', 'orange', 'mango', 'lemon'] 
len = fruit.length
for(let i=0; i<len/2;i++){
    let temp = fruit[i];
    fruit[i] = fruit[len-i-1]
    fruit[len-i-1] = temp
}
console.log(fruit)