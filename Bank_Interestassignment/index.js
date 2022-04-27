

// let BankBalance1 = Number(prompt('Enter the first bank balance'))
// let BankBalance2 = Number(prompt('Enter the Second bank balance'))
// let BankBalance3 = Number(prompt('Enter the three bank balance'))
// let BankBalance4 = Number(prompt('Enter the four bank balance'))
// let BankBalance5 = Number(prompt('Enter the five bank balance'))
// console.log(BankBalance1,BankBalance2,BankBalance3,BankBalance4,BankBalance5)
// let BankBalances = [234567, 67893, 1234, 765432, 167890]
// let BankBalances = [249389, 34561, 3462, 242442, 100001]
// let BankBalances = prompt("Enter all bank balance seperated by a ','").split(',')
function calculateInterest () {
    let bankBalance1 = Number(document.getElementById('bank-balance-1').value)
    let bankBalance2 = Number(document.getElementById('bank-balance-2').value)
    let bankBalance3 = Number(document.getElementById('bank-balance-3').value)
    let bankBalance4 = Number(document.getElementById('bank-balance-4').value)
    let bankBalance5 = Number(document.getElementById('bank-balance-5').value)

    let updateBankBalance1 = document.getElementById('updated-bank-balance-1')
    let updateBankBalance2 = document.getElementById('updated-bank-balance-2')
    let updateBankBalance3 = document.getElementById('updated-bank-balance-3')
    let updateBankBalance4 = document.getElementById('updated-bank-balance-4')
    let updateBankBalance5 = document.getElementById('updated-bank-balance-5')
    
    let bankBalances = [bankBalance1, bankBalance2, bankBalance3, bankBalance4, bankBalance5]

for(let i=0; i<bankBalances.length; i++){
    bankBalances[i] = Number(bankBalances[i])
    if(bankBalances[i] > 200000){
        bankBalances[i] = bankBalances[i] + bankBalances[i]*0.1
        bankBalances[i] = bankBalances[i] - bankBalances[i]*0.002   
    }
    else if(bankBalances[i] > 100000){
        bankBalances[i] = bankBalances[i] + bankBalances[i]*0.05
        bankBalances[i] = bankBalances[i] - bankBalances[i]*0.0005
    }
    else{
        bankBalances[i] = bankBalances[i] + bankBalances[i]*0.03
    }
}
// console.log(bankBalances[i])
updateBankBalance1.value = bankBalances[0]
updateBankBalance2.value = bankBalances[1]
updateBankBalance3.value = bankBalances[2]
updateBankBalance4.value = bankBalances[3]
updateBankBalance5.value = bankBalances[4]
}