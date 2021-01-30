interface Observer {
  update(data: any): void
}

interface Subject {
  subscribe(observer: Observer): void
  unSubscribe(observer: Observer): void
  notify(data: any): void
}

class BitcoinPrice implements Subject {
  private observers: Observer[] = []

  constructor() {
    const el = document.querySelector('#value')
    el.addEventListener('input', () => {
      this.notify(el.value)
    })
  }

  subscribe(observer: Observer): void {
    this.observers.push(observer)
  }
  unSubscribe(observer: Observer): void {
    const index = this.observers.findIndex(obs => obs === observer)
    this.observers.splice(index, 1)
  }

  notify(data: any) {
    this.observers.forEach(observer => observer.update(data))
  }
}

class PriceDisplay implements Observer {
  private el: HTMLElement

  constructor() {
    this.el = document.querySelector('#price')
  }

  update(data: any): void {
    this.el.innerText = data
  }
}

const value = new BitcoinPrice()
const display = new PriceDisplay()

value.subscribe(display)

setTimeout(() => {
  value.unSubscribe(display)
}, 5000)
