import { AbstractLaptop } from './abstract_laptop'

export class SamsungLaptop implements AbstractLaptop {
  playGame(): void {
    console.log('Samsung laptops have RTX 3080 to play any current games.')
  }
}