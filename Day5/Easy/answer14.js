const itCompanies = [
    'Facebook' , 
    'Google' , 
    'Microsoft', 
    'Apple', 
    'IBM' , 
    'Oracle', 
    'Amazon'
];
for(let i=0;i<itCompanies.length;i++){
    if(itCompanies[i].split('o').length-1 > 1){
        console.log(itCompanies[i]); 
    }
}