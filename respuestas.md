<!-- EJERCICIO 27 -->
LET: Se utiliza cuando el valor asignado a la variable va a ser cambiado mas adelante.
CONST: Se utiliza cuando el valor asignado a la variable no va a cambiar nunca durante el codigo, siempre se va a mantener igual.
VAR: Es una forma de declarar variables.

Usaria LET cuando tengo que declarar una variable que se que en un futuro va a cambiar su valor, CONST cuando se que el valor de esa variable va a mantenerse sin cambios en ningun momento. Actualemente no se recomienda usar VAR para declarar una variable porque tiene comportamientos confusos y ademas quedo descontinuada con la aparicion de LET y CONS (que cumplen la misma funcion de VAR por separado y mejor).

<!-- EJERCICIO 28 -->
El SCOPE es el lugar del codigo donde una variable existe y puede ser usada, la misma puede ser global o local
Lo primero que se muestra es el LOCAL que se encuentra dentro de la funcion (ya que existe solo dentro de la funcion) y luego se muestra el GLOBAL (la cual existe dentro de todo el programa)

<!-- EJERCICIO 29 -->
Combiene usar un ARRAY cuando tenemos una lista de elementos del mismo tipo o que siguen un orden, y combiene usar un OBJETO cuando queremos representar una entidad con diferentes caracteristicas o propiedades
La estructura const inventario = ["espada", "poción", "llave"]; representa un ARRAY ya que todos los items/objetos que el jugador puede usar
La estructura:
const jugador = {
 nombre: "Luna",
 vida: 100,
 nivel: 3
};
es un OBJETO porque representa a un personaje con distintos atributos o datos (nombre, vida, etc) cada uno con sus propias propiedades

<!-- EJERCICIO 30 -->
Un evento en JavaScript es una accion que ocurre en la pagina (como un click, presionar una tecla, mover el mouse y demas) y que JavaScript puede detectar para ejecutar un codigo

boton.addEventListener("click", function () {
 console.log("El usuario hizo clic");
});

El elemento que escucha al evento es Boton
el evento que se esta escuchando es el "click"
y la accion que se ejecuta es el mensaje que se muestra en la consola "El usuario hizo Click"

Por ejemplo, En un boton de "jugar" para uniciar el juego
En un boton de atacar para que eljugador realize una accion cuando lo clickee
En un menu para seleccionar opciones