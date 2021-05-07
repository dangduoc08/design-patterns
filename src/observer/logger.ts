import {
  Observer
} from './observer'
import {
  AccountModel
} from './account_model'
import {
  TransactionStatus
} from './transaction_status'

export class Logger implements Observer {
  async update(accountModel: AccountModel, money: number): Promise<void> {
    const realTransferredMoney = accountModel.old_account_balance - accountModel.account_balance > 0 ?
      accountModel.old_account_balance - accountModel.account_balance :
      money

    console.log(`${accountModel.owner} has ${accountModel.old_account_balance} transfers ${realTransferredMoney} ${TransactionStatus[accountModel.transaction_status]}`)
    console.log(`Current account balance is ${accountModel.account_balance}\n`)
  }
}