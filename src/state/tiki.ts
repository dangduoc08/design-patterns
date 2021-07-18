import {
  State
} from './state'

export class Tiki implements State {
  public createOrder(): void {
    console.log('Create Tiki order')
  }
}
