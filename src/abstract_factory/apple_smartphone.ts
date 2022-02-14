import { AbstractSmartphone } from './abstract_smartphone'

export class AppleSmartphone implements AbstractSmartphone {
  call(): void {
    console.log('Apple smartphones can call continuously for up to 45 hours without recharging.')
  }
}