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

const likes = function(arr){
    let user = prompt("Enter user Id: ");
    if(arr.includes(user)){
        let index = arr.indexOf(user);
        arr.splice(index,1);
    }else{
        arr.push(user);
    }
    return;
}

const likeProduct = function(){
    console.log("\nFor mobile phones: ")
    likes(products[0].likes)
    console.log("\nFor laptops: ")
    likes(products[1].likes)
    console.log("\nFor TV: ")
    likes(products[2].likes)
}

likeProduct();
likeProduct();
likeProduct();
console.log(products);