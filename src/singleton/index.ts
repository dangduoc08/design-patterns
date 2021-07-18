import {
  Printer
} from './printer'

(function main() {
  const floor1Printer = Printer.getInstance()
  const floor2Printer = Printer.getInstance()

  console.log('floor1Printer === floor2Printer', floor1Printer === floor2Printer)
})()