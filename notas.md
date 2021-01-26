# Notas del curso

## ¿Que hace a un profesional?

- conocimiento de lenguaje
- conocimiento de entornos
- Mejores practicas
- Versado en el codigo : **LEER** codigo ajeno constantemente.
- Herramientas: Probar conceptos existente en nuestro codigo
- Etica
  - Responsabilidad
  - Entrega en tiempo sus trabajos
  - Sabe decir **no**
  - No hace danio
  - Entiende que cada componente creado es **fundamental** para el sistema
- Experiencia

## HTML

- El navegador procesara el HTML hasta tener una estructura similar a un arbol, conocido como el **DOM**.
- En cuanto el contenido se termina de cargar se dispara el evento _DOMContentLoaded_
- En cuanto el navegador encuentra un script, detiene la carga de los elementos del DOM hasta que termina la ejecucion del script
- Se puede marcar como asincronas las cargas de scripts, marcando el script con _async_ `<script async src=""></script>`
  - De esta manera se cargaran y ejecutaran primero los scripts mas pequenios.
- Para que el script sea ejecutado al final de ser cargado el DOM se debe marcar el script con _defer_

## Javascript

- Fundamentos
- No fundamento
- Funcionamiento

### Scope

- Global
- Function
- Block
- Module

### Closure

- Utilizados como generadores de funciones
- Permiten la creaciond de variables privadas en JS

### this

- Hace referencia al objeto/scope donde el bloque de cosigo se esta ejecutando.
- Usando _strict mode_ no es posible referenciar al objeto window en el scope global.
- Si usamos this en una clase, el this har'a referencia a la instancia de la clase.
- Las funciones contenidas en un objeto pueden usar el this para referenciar al objeto que contiene a la funcion.

#### Metodos

apply, call y bind son funcione propias del prototipo _function_

- `function.call(newThis, ...params)` nos permite ejecutar la funcion con una nueva referencia como this.
- `function.apply(newThis, [])` similar a _call()_, con la diferencia de que los parametros son pasados como arreglo.
- `function.bind(newThis)` genera una nueva funcion que tendra como this el parametro que se le pasa.
  - **currying**: con ayuda de _bind(newThis, ...params)_ nos permite guardar parcialmente argumentos en las funciones generadas.
  ```
  const danielCamina = caminar.bind(danielObj, 200);
  const juanCamina = caminar.bind(juanObj, 2900, "sur");
  danielCamina("oeste");
  juanCamina();
  ```

### Prototype

- _new_ es syntactic sugar para `Object.create(obj)`, que a partir del prototipo de un objeto, genera uno nuevo que "hereda" del original
- Todos los objetos tiene un **prototype** que hereda de otro prototype, que asu vez hereda de otro y asi sucesivamente creando el _prototype chain_.
  - Cuando llamamos a una funcion o atributo en un objeto que no fue creado explicitamente con tal funcion, javascript buscara la funcion en el prototype chain de manera ascendente hasta encontrar un match.
  - _hasOwnProperty_ funciona para verificar si la propiedad es propia del objeto y no de un prototipo.

## Funcionamiento de Javascript

- Creado en Netscape
- Es interpretado

### Funcionamiento del motor de Js

1. Recibe codigo fuente.
2. Parsea y produce un **Abstract Syntax Tree** (AST).
3. Se compila en bytecode y se ejecuta.
4. Se optimiza a machine code y se reemplaza el codigo base.

> Un SyntaxError es lanzado cuando el parser encuentra partes del codigo que no pertenecen a la sintaxis del lenguaje.
> El parsing toma un 15% al 20% del proceso de ejecucion.
> Bundling y code splitting es muy importante, ya que la mayoria del codigo JS en una pagina **nunca** se ejecuta.

### Parser de V8

#### Eager

- Encuentra errores de syntaxis
- Crea el AST
- Construye scopes

#### Lazy

- Doble de rapido que el Eager parsing
- No crea AST
  -Constrye parcialmente los scopes

#### AST

Es un grafo que representa el programa.
Usado tambien en bundlers, transpilers, linters, type checkers y syntax highlighters

### Interpreter

Convierte el AST en **bytecode** que es similar al ensamblador para el navegador.
A la par un **optimizing compiler o profiler** crea datos perfiladoes para que el resultado **Machine code** sea mas eficiente.

> Hot functions en V8: Bloqes de codigo ejecutados muy seguido que el engine mantendra en cache para que sea mas rapida su ejecucion.

#### Bytecode vs MachineCode

| Bytecode                                                              | Machine code                                                                |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Codigo similar a assembly. Portatil. Ejecutado en la virtual machine. | Binario. Instruccuines especificas para un procesador, por su arquitectura. |

### Cada navegador tiene su implementación de JavaScript Engine:

- SpiderMonkey - Firefox
- Chackra - Edge
- JavaScriptCore - Safari
- V8 - Chrome

### Eventloop

El feature que permite a js parecer ser multithread, siendo que solo tine un thread.

- Call Stack: Pila de ejecucion del lenguaje.
- Memory heap: Espacio de memeoria que contiene informacion sobre las variables, scope y objetos.
- Componentes asincronos:
  - Scheduled task: Fila de tareas asincronas que se programaron para ser ejecutadas.
  - Task queue: Las tareas que estan listas para entrar en el _event loop_ y ser procesadas eventualmente.
  - Microtask queue: Tareas asincronas que tienen prioridad para entrar al Call stack, como las **Promesas**
  - Event loop: Cuando el Call stack esta vacio, introduce tareas del task queue para ser ejecutadas.

> **Recuerda!!!** Nunca bloquees el hilo principal.

#### Promises

```javascript
// Peticiones secuenciales
async function getTopMoviesInSequence() {
  const ids = await getTopMoviesIds()
  const movies = []

  for (const id of ids) {
    const movie = await getMovie(id)
    movies.push(movie)
  }

  return movies
}

// Peticiones en paralelo
async function getTopMoviesInParallel() {
  const ids = await getTopMoviesIds()
  const moviePromises = ids.map(id => getMovie(id))

  const movies = await Promise.all(moviePromises)

  return movies
}

// La promesa que se resuelva primero
async function getFastestTopMovie() {
  const ids = await getTopMoviesIds()
  const moviePromises = ids.map(id => getMovie(id))
  const movie = await Promise.race(moviePromises)
  return movie
}
```

> Todas las funciones _async_ regresan una promesa.

### Getters y setters

Utilizados para darle a objetos propiedades virtuales.

```javascript
let person = {
  name: 'Miguel',
  last_name: 'Soler',
  age: 28,
  languages: ['js', 'css', 'react'],
  get fullName() {
    return `${this.name} ${this.last_name}`
  },
  set newLenguaje(lenguaje) {
    this.lenguajes.push(lenguaje)
  },
}

console.log(person.fullName)
person.newLenguaje = 'Java'
```

Un feature similar podria ser `Object.assignProperty(obj, opts:{})` que te permite aniadir propiedades del nuevo atributo, como si es iterable o puede ser sobreescrito.

### Proxy

```javascript
const target = {
  red: 'rojo',
  green: 'verde',
}

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop]
    }
    const suggestion = Object.keys(obj).find(key => {
      return Levenshtein.get(key, prop) <= 3
    })

    if (suggestion) {
      console.log(`${prop} no se encontro, quisiste decir ${suggestion}`)
    }

    return obj[prop]
  },
}

let proxy = new Proxy(target, handler)
```

En el ejemplo, `proxy.reee` nos dara un aviso del posible match de la propiedad que seria `proxy.red`
