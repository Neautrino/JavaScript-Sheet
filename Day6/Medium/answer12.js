const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

let newarr = []
for(let i=0;i<webTechs.length;i++){
    let arr = []
    arr.push(webTechs[i])
    arr.push(webTechs[i].length)
    newarr.push(arr)
}
    
console.log(newarr)