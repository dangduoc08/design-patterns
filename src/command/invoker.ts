import { Commander } from './commander'
import { Computer } from './computer'

export class Invoker {
  private commander!: Commander
  constructor(private computer: Computer) {}

  public setCommand(commander: Commander): Invoker {
    this.commander = commander
    return this
  }

  public run(): void {
    this.commander.execute(this.computer)
  }
}