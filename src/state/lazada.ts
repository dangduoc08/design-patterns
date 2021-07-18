import {
  State
} from './state'

export class Lazada implements State {
  public createOrder(): void {
    console.log('Create Lazada order')
  }
}
