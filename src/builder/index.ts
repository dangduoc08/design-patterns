import {
  Pizza,
  PizzaSize,
  PizzaCrust
} from './pizza'
import {
  PizzaBuilder
} from './pizza_builder'

(function main() {
  console.log('---***--- BUILDER PATTERN ---***---')
  const pizzaMaker = new PizzaBuilder('Seafood Black Pepper')
  pizzaMaker.addCrust(PizzaCrust.Cheese_Stuffed)
  pizzaMaker.addSize(PizzaSize.Regular)
  pizzaMaker.addDrink('Coke')
  pizzaMaker.addPrice(268000)
  pizzaMaker.addStarter('Calamari')

  const pizza: Pizza = pizzaMaker.build()
  console.log('Pizza Hut\'s', pizza)
  console.log('')
})()