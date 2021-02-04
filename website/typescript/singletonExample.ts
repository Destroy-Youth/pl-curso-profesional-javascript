class Singleton {
  private static instance: Singleton

  private constructor() {}

  /**
   * getInstance
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }
}

const a = Singleton.getInstance()
const b = Singleton.getInstance()

console.log(`La igualdad de ${a} y ${b} es {a===b}`) // true
