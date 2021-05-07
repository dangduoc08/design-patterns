import {
  Observer
} from './observer'
import {
  AccountModel
} from './account_model'

export class Cashier implements Observer {
  public async sleep(): Promise<void> {
    return new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 1000)))
  }

  async update(accountModel: AccountModel, money: number): Promise<void> {
    await this.sleep()
    const accountBalance = accountModel?.account_balance ?? 0
    accountModel.old_account_balance = accountBalance
    accountModel.account_balance = accountBalance < money ?
      accountBalance :
      accountBalance - money
  }
}