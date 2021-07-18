import {
  MoneyService
} from './bank_service'
import {
  Reporter
} from './reporter'
import {
  Cashier
} from './cashier'
import {
  Logger
} from './logger'

(async function main() {
  try {
    const moneyService: MoneyService = MoneyService.getAccountInfomation('Jane Doe')
    const cashierObserver = new Cashier()
    const reporterObserver = new Reporter()
    const loggerObserver = new Logger()

    moneyService.attach(cashierObserver)
    moneyService.attach(reporterObserver)
    moneyService.attach(loggerObserver)

    await moneyService.transferMoney(100000000)
    await moneyService.transferMoney(5000)

    moneyService.detach(cashierObserver)
    await moneyService.transferMoney(6000)

    moneyService.clear()
  } catch (err) {
    console.error(err)
  }
})()