let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

console.log(`${year}-${month+1}-${date} ${hour}:${minutes}`);
console.log(`${date}-${month+1}-${year} ${hour}:${minutes}`);
console.log(`${date}/${month+1}/${year} ${hour}:${minutes}`);