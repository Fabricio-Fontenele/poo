import { Account } from './account'
import { Bank } from './bank'
import { SpecialAccount } from './special-account'

console.log('** BEGIN **')

const bank = new Bank(999, 'BANCO EXEMPLO S/A')

const a1 = new Account(987, 12345, 'FULANO DE CASTRO')
const a2 = new Account(123, 98765, 'BELTRANO DA SILVA')
const s3 = new SpecialAccount(123, 98765, 'BELTRANO DA SILVA', 1000.0)

bank.addAccount(a1)
bank.addAccount(a2)
bank.addAccount(s3)
bank.showAccounts()

a1.deposit(1500.0)
a1.withdraw(500.0)
a1.transfer(300.0, s3)

a1.showStatement()
s3.showStatement()


// ac1.showBalance()

// console.log('** END **')
