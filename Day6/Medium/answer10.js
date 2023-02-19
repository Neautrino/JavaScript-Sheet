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

let newarr=[]
for(let i=0;i<countries.length;i++){
    if(countries[i].length==5){
        newarr.push(countries[i])
    }
}
console.log(newarr)