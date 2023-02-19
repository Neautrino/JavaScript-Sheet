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

let bigIndex =0
let bigLength =countries[0].length
for(let i=1;i<countries.length;i++){
    let lenght = countries[i].length
    if(lenght>bigLength){
        bigLength=lenght
        bigIndex = i
    }
}
console.log(countries[bigIndex])