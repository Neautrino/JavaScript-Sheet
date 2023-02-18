const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
len = ages.length;

//Array sorting
ages.sort();
const min = ages[0]
const max = ages[ages.length-1]
console.log(`Minimum age is: ${min} and Maximum age is: ${max}`);
console.log(ages)

//Finding Median
var median
if(len%2==0){
    median = (ages[len/2]+ages[parseInt((len-1)/2)])/2
}else{
    median = ages[parseInt((len-1)/2)]
}
console.log(`Median age is: ${median}`);

//Find average
sum = 0
for(let i=0; i<len; i++){
    sum = sum + ages[i]
}
var average = sum/(len-1);
console.log("Average age is: ",average)

//Find range
console.log("Range of the ages is: ",max-min);

//Comparing
var min_avg = Math.abs(min-average);
var max_avg = Math.abs(max-average);
console.log("Difference Between min_avg and max_avg is: ",min_avg - max_avg)