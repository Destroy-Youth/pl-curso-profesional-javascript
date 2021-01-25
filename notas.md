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
