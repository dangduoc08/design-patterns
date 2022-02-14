import { AbstractLaptop } from './abstract_laptop'

export class AppleLaptop implements AbstractLaptop {
  playGame(): void {
    console.log('Apple laptops have Radeon Pro 5700M to play any current games.')
  }
}