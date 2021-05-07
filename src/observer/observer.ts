import {
  AccountModel
} from './account_model'

export interface Observer {
  update(bankAccount: AccountModel, money: number): Promise<void>
}