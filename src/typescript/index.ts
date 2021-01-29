function add(a: number, b: number) {
  return a + b
}

let res = add(1, 4)
console.log('hrllo parcel? ', res)

// boolean
let isVisible: boolean = false
let doesHeLoveMe = false
doesHeLoveMe = true

// numbers
let operand: number = 3

// Strings
let myName: string = 'Ivan'

// Arrays
let people: string[] = ['Juana', 'Dima', 'Dimitri']
let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push('Dima')
peopleAndNumbers.push(4)

// Enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
}

let colorFav: Color = Color.Verde

// Any
let joker: any
joker = 'soy string'
joker = 7
joker = false

// Object
let objetito: object
objetito = {}
