let now = new Date();
let year = now.getFullYear();
let month = ("0"+(now.getMonth()+1)).slice(-2) ;
let date = ("0"+now.getDate()).slice(-2);
let hour = ("0"+now.getHours()).slice(-2);
let minutes = ("0"+now.getMinutes()).slice(-2);

console.log(`${year}-${month}-${date} ${hour}:${minutes}`);
