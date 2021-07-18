import {
  Pizza,
  PizzaSize,
  PizzaCrust
} from './pizza'

export class PizzaBuilder {
  private name!: string
  private starter!: string
  private size!: PizzaSize
  private crust!: PizzaCrust
  private drink!: string
  private price!: number

  constructor(name: string) {
    this.name = name
  }

  public addStarter(starter: string): void {
    this.starter = starter
  }

  public addSize(size: PizzaSize): void {
    this.size = size
  }

  public addCrust(crust: PizzaCrust): void {
    this.crust = crust
  }

  public addDrink(drink: string): void {
    this.drink = drink
  }

  public addPrice(price: number): void {
    this.price = price
  }

  public build(): Pizza {
    return new Pizza(this.name, this.starter, this.size, this.crust, this.drink, this.price)
  }
}