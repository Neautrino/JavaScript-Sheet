const dog= {
    name : "Rocky",
    legs : 4,
    color : "Black",
    age: 3,
    bark: function(){
        return "woof woof";
    }
}

dog.breed = "labra dog"
dog.getDogInfo= function(){
    let statement = `${this.name} is a ${this.color} color ${this.breed}.\nHe has ${this.legs} legs.\nHis age is ${this.age}.\nHe used to say ${this.bark()}.`

    return statement;
}
console.log(dog)
console.log(dog.getDogInfo())