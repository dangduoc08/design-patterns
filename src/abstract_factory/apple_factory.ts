import { AbstractFactory } from './abstract_factory'
import { AbstractSmartphone } from './abstract_smartphone'
import { AppleSmartphone } from './apple_smartphone'
import { AbstractLaptop } from './abstract_laptop'
import { AppleLaptop } from './apple_laptop'
import { AbstractTablet } from './abstract_tablet'
import { AppleTablet } from './apple_tablet'

export class AppleFactory implements AbstractFactory {
  public createSmartphone(): AbstractSmartphone {
    return new AppleSmartphone()
  }

  public createLaptop(): AbstractLaptop {
    return new AppleLaptop()
  }

  public createTablet(): AbstractTablet {
    return new AppleTablet()
  }
}