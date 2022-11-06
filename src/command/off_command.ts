import { Commander } from './commander'
import { Computer } from './computer'

export class OffCommand implements Commander {
  execute(computer: Computer): void {
    console.log(`${computer.name} OFF!`)  
  }
}
