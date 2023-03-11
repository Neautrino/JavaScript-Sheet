const prompt = require("prompt-sync")();
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];
const signUp= function() {
    let newObject={};
    newObject._id=prompt("Enter the id: ");
    for(let i of users){
        if(i._id==newObject._id){
            console.log("The user has already an account.")
        return ;
    
        }
    }
    newObject.username=prompt("Enter username: ");
    newObject.email = prompt("Enter email: ");
    newObject.password = prompt("Enter password: ");
    newObject.createdAt = new Date().toLocaleString()
    newObject.isLoggedIn = false;
    users.push(newObject);
}
const signIn = function(){
    let id = prompt("Enter userID: ")
    for(let i of users){
        if(i._id==id){
            let password = prompt("Enter Password: ");
            if(i.password == password){
                console.log("You are succesfully logged in");
                i.isLoggedIn = true;
                return;
            }else{
                console.log("Wrong password\nTry again later");
                return;
            }
        }
    }
}

signUp();
signIn();
console.log(users);