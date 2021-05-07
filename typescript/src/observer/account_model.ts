import {
  TransactionStatus
} from './transaction_status'

export class AccountModel {
  private _owner!: string
  private _oldAccountBalance!: number
  private _accountBalance!: number
  private _transactionStatus!: TransactionStatus

  public get owner(): string {
    return this._owner
  }

  public set owner(owner: string) {
    this._owner = owner
  }

  public get account_balance(): number {
    return this._accountBalance
  }

  public set account_balance(accountBalance: number) {
    this._accountBalance = accountBalance
  }

  public get old_account_balance(): number {
    return this._oldAccountBalance
  }

  public set old_account_balance(oldAccountBalance: number) {
    this._oldAccountBalance = oldAccountBalance
  }

  public get transaction_status(): TransactionStatus {
    return this._transactionStatus
  }

  public set transaction_status(transactionStatus: TransactionStatus) {
    this._transactionStatus = transactionStatus
  }
}