import { AbstractSmartphone } from './abstract_smartphone'
import { AbstractTablet } from './abstract_tablet'
import { AbstractLaptop } from './abstract_laptop'

export interface AbstractFactory {
  createSmartphone(): AbstractSmartphone;
  createTablet(): AbstractTablet;
  createLaptop(): AbstractLaptop;
}