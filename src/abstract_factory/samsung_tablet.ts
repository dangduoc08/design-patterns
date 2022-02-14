import { AbstractTablet } from './abstract_tablet'

export class SamsungTablet implements AbstractTablet {
  touching(): void {
    console.log('Samsung tablets have "Double-tap" feature. Touch the screen twice in the same location.')
  }
}