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
let Land=[]
let notLand=[]
for(let i=0;i<countries.length;i++){
    if(countries[i].includes("land")){
        Land.push(countries[i])
    }else{
        notLand.push(countries[i])
    }
}
console.log("Countries containing land are:",Land)
console.log("Countries not containing land are:",notLand)