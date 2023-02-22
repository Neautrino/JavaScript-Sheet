function showDateTime(){
    const time = new Date();
    let year = time.getFullYear()
    let month = time.getMonth()+1
    if(month<10){
        month = '0'+month;
    }
    let date = time.getDate();
    if(date<10){
        date = '0'+date
    }
    let hour = time.getHours();
    if(hour<10){
        hour = '0'+hour
    }
    let minute = time.getMinutes();
    if(minute<10){
        minute = '0'+minute
    }

    console.log(`${date}/${month}/${year} ${minute}:${hour}`);
}

showDateTime();