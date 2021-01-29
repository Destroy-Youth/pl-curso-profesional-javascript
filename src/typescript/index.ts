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

// Functions
function add(a: number, b: number): number {
  return a + b
}

const sum = add(2, 45)

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return a + b
  }
}

const addFour = createAdder(4)
const fourPlusSix = addFour(6)

// Optional and default params
function fullName(firstName: string = 'Agente', lastName?: string): string {
  return `${firstName} ${lastName}`
}

const myFullName = fullName(undefined, 'Smith')
console.log(myFullName)
