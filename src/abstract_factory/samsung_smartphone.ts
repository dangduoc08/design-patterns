import { AbstractSmartphone } from './abstract_smartphone'

export class SamsungSmartphone implements AbstractSmartphone {
  call(): void {
    console.log('Samsung smartphones can call continuously for up to 40 hours without recharging.')
  }
}