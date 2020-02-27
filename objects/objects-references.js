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
// Both point to same element in the memory

addExpense(myAccount,2.5)
console.log(myAccount)