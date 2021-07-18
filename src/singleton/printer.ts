export class Printer {
  static instance: Printer

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() { }

  static getInstance(): Printer {
    if (!Printer.instance) {
      Printer.instance = new Printer()
    }

    return Printer.instance
  }
}