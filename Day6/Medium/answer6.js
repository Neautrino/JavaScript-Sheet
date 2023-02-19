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

let newArr =[]
for(let i=0;i<countries.length;i++){
    let arr=[]
    arr.push(countries[i])
    let str = arr.toString()
    arr.push(str.slice(0,3).toUpperCase())
    arr.push(countries[i].length);
    newArr.push(arr)
}

console.log(newArr)