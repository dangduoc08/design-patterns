import { AbstractFactory } from './abstract_factory'
import { SamsungFactory } from './samsung_factory'
// import { AppleFactory } from './apple_factory'

(function main(factory: AbstractFactory) {
  console.log('---***--- ABSTRACT FACTORY PATTERN ---***---')
  const laptop = factory.createLaptop()
  const smartphone = factory.createSmartphone()
  const tablet = factory.createTablet()
  laptop.playGame()
  smartphone.call()
  tablet.touching()

  console.log('')
})(new SamsungFactory())