const prompt=require("prompt-sync")()
const checkSeason = (month)=>{
    if(month==11 || month== 12 || month==1){
        return "Winter";
    }else if(month>=2 && month<=4){
        return "Spring"
    }else if(month>=5 && month<=7){
        return "Summer";
    }else{
        return "Autumn";
    }
}

let month = prompt("Enter the month: ");
console.log("Season is:",checkSeason(month));