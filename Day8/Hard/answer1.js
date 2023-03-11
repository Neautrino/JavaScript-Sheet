const personAccount = {
    firstName: "Subhendu",
    lastName: "Singh",
    incomes:{
        salary: 50000,
        stocks: 20000,
        mutualFunds: 15000,
        others: 10000
    },
    expenses:{
        rent: 10000,
        food: 8000,
        wearings: 5000,
        books: 3000,
        gaming: 5000,
        others: 5000
    },
    totalIncome: function(){
        let values = Object.values(this.incomes);
        let sum =0;
        for(let i of values){
            sum += i;
        }
        return sum;
    },
    totalExpense: function(){
        let values = Object.values(this.expenses);
        let sum =0;
        for(let i of values){
            sum += i;
        }
        return sum;
    },
    accountInfo: function(){
        return `Account holders name is: ${this.firstName} ${this.lastName}.\n His Total income: ${Object.entries(this.incomes)} and his total expenses is: ${Object.entries(this.expenses)}`;
    },
    addIncome: function(){
        this.incomes.freelancing = 20000
    },
    addExpence: function(){
        this.expenses.travelling = 10000
    }

}

console.log(personAccount.accountInfo())
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
personAccount.addIncome()
personAccount.addExpence()
console.log(personAccount.accountInfo())