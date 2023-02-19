const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let str = ''
for(let i=0;i<mernStack.length;i++){
    let newstr = mernStack[i].toString()
    str += newstr.slice(0,1)
}
console.log(str)