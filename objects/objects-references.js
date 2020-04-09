let myAccount={
    name:'Andrew',
    expenses:0,
    income:0
}
let otherAccount =myAccount
otherAccount.income=20
otherAccount.name='Jesse'
//The references of the 
otherAccount={}

let addExpense = function(account,amount){
   // account={}//did not point to samething
    account.expenses = account.expenses+amount
}

let addIncome = function(account,income){
    account.income=account.income+income
}

let getAccountSummary = function(account){
    let balance = account.income-account.expenses
    return `Account for ${account.name} has ${balance}. $${account.income} in income. $${account.expenses} in expense.`
}
// Both point to same element in the memory

addExpense(myAccount,2.5)
addIncome(myAccount,20)
console.log(getAccountSummary(myAccount))