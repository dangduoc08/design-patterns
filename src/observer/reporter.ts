import {
  Observer
} from './observer'
import {
  AccountModel
} from './account_model'
import {
  TransactionStatus
} from './transaction_status'

export class Reporter implements Observer {
  async update(accountModel: AccountModel): Promise<void> {
    accountModel.transaction_status = accountModel.old_account_balance <= accountModel.account_balance ?
      TransactionStatus.FAILED :
      TransactionStatus.SUCCESSFUL
  }
}
