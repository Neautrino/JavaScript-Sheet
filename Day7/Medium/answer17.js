function randomHexaNumberGenerator() {
    let str = "0123456789ABCDEF";
    let hexa = "#";
    for (let i = 0; i < 6; i++) {
        hexa += str.charAt(Math.round(Math.random() * str.length));
    }
    return hexa;
}

console.log(randomHexaNumberGenerator())