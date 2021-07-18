import {
  State
} from './state'

export class Context {
  private state!: State

  public setState(state: State): void {
    this.state = state
  }

  public applyState(): void {
    this.state.createOrder()
  }
}