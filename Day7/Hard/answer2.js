function rgbColorGenerator(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    console.log(`rgb(${red},${green},${blue})`);

}

rgbColorGenerator();