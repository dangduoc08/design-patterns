import { AbstractFactory } from './abstract_factory'
import { AbstractSmartphone } from './abstract_smartphone'
import { SamsungSmartphone } from './samsung_smartphone'
import { AbstractLaptop } from './abstract_laptop'
import { SamsungLaptop } from './samsung_laptop'
import { AbstractTablet } from './abstract_tablet'
import { SamsungTablet } from './samsung_tablet'

export class SamsungFactory implements AbstractFactory {
  public createSmartphone(): AbstractSmartphone {
    return new SamsungSmartphone()
  }

  public createLaptop(): AbstractLaptop {
    return new SamsungLaptop()
  }

  public createTablet(): AbstractTablet {
    return new SamsungTablet()
  }
}