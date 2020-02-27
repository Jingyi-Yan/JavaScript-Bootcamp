let myAccount={
    name:'Andrew',
    expenses:0,
    income:0
}

let addExpense = function(account,amount){
     account.expenses = account.expenses+amount
 }

let addIncome = function(account,income){
    account.income=account.income+income
}

let resetAccount=function(account){
    account.expenses=0
    account.income=0
}

let getAccountSummary = function(account){
    let balance =account.income-account.expenses
    return `Account for ${account.name} has $${balance}. ${account.expenses} in expenses, ${account.income} in income`
}

addIncome(myAccount,1200)
addExpense(myAccount,100)
addExpense(myAccount,200)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))