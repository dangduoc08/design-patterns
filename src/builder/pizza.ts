export enum PizzaSize {
  Large,
  Regular,
  Small,
}

export enum PizzaCrust {
  Pan,
  Sausage_Stuffed,
  Cheese_Stuffed,
}

export class Pizza {
  public name!: string
  public starter!: string
  public size!: PizzaSize
  public crust!: PizzaCrust
  public drink!: string
  public price!: number

  constructor(name: string, starter: string, size: PizzaSize, crust: PizzaCrust, drink: string, price: number) {
    this.name = name
    this.starter = starter
    this.size = size
    this.crust = crust
    this.drink = drink
    this.price = price
  }
}