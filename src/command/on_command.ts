import { Commander } from './commander'
import { Computer } from './computer'

export class OnCommand implements Commander {
  execute(computer: Computer): void {
    console.log(`${computer.name} ON!`)
  }
}
