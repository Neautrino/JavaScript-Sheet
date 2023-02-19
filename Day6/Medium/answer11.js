const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

let maxLength = webTechs[0].length
let index =0
for(let i=1;i<webTechs.length;i++){
    length = webTechs[i].length
    if(length>maxLength){
        maxLength = length
        index =i
    }
}
console.log(webTechs[index])
    