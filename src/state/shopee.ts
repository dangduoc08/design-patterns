import {
  State
} from './state'

export class Shopee implements State {
  public createOrder(): void {
    console.log('Create Shopee order')
  }
}
