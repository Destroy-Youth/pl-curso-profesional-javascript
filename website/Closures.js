// IIFE
;(function () {
  let color = 'green'

  function printColor() {
    console.log(color)
  }
})()

function makeColorPrinter(color) {
  let colorMessage = `Es el color ${color}`

  return function () {
    console.log(colorMessage)
  }
}

let greenColorPrinter = makeColorPrinter('verde')
greenColorPrinter()

// Creando variables privadas
function makeCounter(start = 0) {
  let count = start

  return {
    increase: function () {
      count++
    },
    decrease: function () {
      count--
    },
    getCount: function () {
      return count
    },
  }
}

let counter = makeCounter(9)
console.log(`La cuenta es ${counter.getCount()}`)
counter.decrease()
counter.decrease()
counter.decrease()
counter.decrease()
console.log(`La cuenta es ${counter.getCount()}`)
counter.increase()
counter.increase()
counter.increase()
console.log(`La cuenta es ${counter.getCount()}`)
