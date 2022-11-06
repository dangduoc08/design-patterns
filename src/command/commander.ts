import { Computer } from './computer'

export interface Commander {
  execute(computer: Computer): void
}