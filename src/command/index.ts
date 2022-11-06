import { Invoker } from './invoker'
import { OffCommand } from './off_command'
import { OnCommand } from './on_command'
import { Computer } from './computer'

(function main() {
  console.log('---***--- COMMAND PATTERN ---***---')

  const dell = new Computer('Dell')
  const invoker = new Invoker(dell)
  invoker.setCommand(new OnCommand())
  invoker.run()
  invoker.setCommand(new OffCommand())
  invoker.run()

  console.log('')
})()