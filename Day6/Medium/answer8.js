const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

let containIA =[]
let notContainIA =[]
for(let i=0;i<countries.length;i++){
    if(countries[i].includes('ia')){
        containIA.push(countries[i])
    }else{
        notContainIA.push(countries[i])
    }
}

console.log("Countries that contains ia are:",containIA)
console.log("Countries that not contains ia are:",notContainIA)