import {
  resolve
} from 'path'
import {
  readFileSync
} from 'fs'
import {
  Observer
} from './observer'
import {
  AccountModel
} from './account_model'

interface BankServicer {
  attach(observer: Observer): void
  detach(observer: Observer): boolean
  clear(): void
  transferMoney(money: number): Promise<void>
}

export class MoneyService implements BankServicer {
  private _accountModel!: AccountModel
  private _observerList = new Set<Observer>()

  static getAccountInfomation(owner: string): MoneyService {
    const bankAccounts: Array<AccountModel> = JSON.parse(readFileSync(resolve('./data/bank_accounts.json')).toString())
    const ownerInfo = bankAccounts.filter(account => account.owner === owner)?.[0]
    if (!ownerInfo) {
      throw new Error(`${owner}'s account not found`)
    }
    const bankService: MoneyService = new MoneyService()
    bankService._accountModel = new AccountModel()
    bankService._accountModel = ownerInfo
    return bankService
  }

  public attach(observer: Observer): void {
    this._observerList.add(observer)
  }

  public detach(observer: Observer): boolean {
    return this._observerList.delete(observer)
  }

  public clear(): void {
    this._observerList.clear()
  }

  public async transferMoney(money: number): Promise<void> {
    for (const observer of this._observerList) {
      await observer.update.call(observer, this._accountModel, money)
    }
  }
}
