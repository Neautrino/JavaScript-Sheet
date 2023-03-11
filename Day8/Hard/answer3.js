const prompt = require("prompt-sync")();
const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]
const rating = function(){
    let newUser = {}
    newUser.userId = prompt("Enter user Id: ")
    newUser.rate = prompt("Enter rating: ")
    return newUser;
}

const rateProduct = function(){
    console.log("\nRatings for mobile phones:")
    products[0].ratings.push(rating());

    console.log("\nRatings for Laptops:")
    products[1].ratings.push(rating());

    console.log("\nRatings for TV:")
    products[2].ratings.push(rating());
}

const average = function(ratings){
    let sum = 0.0;
    let len = ratings.length;
    for(let i = 0;i<len;i++){
        sum += ratings[i].rate;
    }
    return parseFloat(sum/len);
}

const averageRating = function(){
    console.log("\nAverage ratings of mobile phone is: ",average(Object.values(products[0].ratings)));
    console.log("\nAverage ratings of Laptop is: ",average(Object.values(products[1].ratings)));
    console.log("\nAverage ratings of TV is: ",average(Object.values(products[2].ratings)));
}

rateProduct();
averageRating();