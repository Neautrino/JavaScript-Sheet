let str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_"

function isValidVariable(a){
    if(str.includes(a)){
        console.log(a," is a valid character")
        return ;
    }else{
        console.log(a," is not a valid character")
        return;
    }
}

isValidVariable("*")
isValidVariable("g")