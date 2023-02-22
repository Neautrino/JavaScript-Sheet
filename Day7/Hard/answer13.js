function average(arr) {
    let ans = 0;
    for (let i of arr) {
        if (Number.isInteger(i))
            ans += i;
        else {
            console.log(i, "is not a number");
            return;
        }
    }
    return ans/arr.length;
}

let arr = [2, 4, 5 , "abc", 62, 4]
console.log(average(arr));