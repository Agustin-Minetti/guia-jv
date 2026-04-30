console.log("Guía JavaScript iniciada");

const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

/* --EJERCICIO 1-- */
/* const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true; */

/* console.log(nombre, edad, vida, puntaje, estaActivo); */

/* --EJERCICIO 2-- */
/* let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;
let puntajeTotal = puntosBase + bonus - penalizacion;
console.log(puntajeTotal); */

/* --EJERCICIO 3-- */
/* const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
 const valor = input.value;
 const numero = parseFloat(valor);
 const resultado = numero + 10;
 mensaje.textContent = "El resultado es: " + resultado;
}); */

/* --EJERCICIO 4-- */
/* const edad = prompt("Ingresa tu edad:");
if (edad >= 13) {
 alert("Podes Jugar al juego");
} else {
 alert("No podes jugar al juego todavia");
} */

 /* --EJERCICIO 5-- */
/* boton.addEventListener("click", function () {
    if (input.value > 70) {
        mensaje.textContent = "Jugador en buen estado";
    } else if (input.value > 30) {
        mensaje.textContent = "Jugador herido";
    } else if(input.value > 1) {
        mensaje.textContent = "Jugador en peligro";
    } else {
        mensaje.textContent = "game over";
    }
}); */

/* --EJERCICIO 6-- */
/* let opcion = "salir";
switch (opcion) {
    case "iniciar":
        console.log("Juego iniciado");
        break;
    case "configuracion":
        console.log("Configurando el juego");
        break;
    case "creditos":
        console.log("Mostrando créditos");
        break;
    case "salir":
        console.log("Saliendo del juego");
        break;
    default:
        console.log("Opción no válida");
} */

/* --EJERCICIO 7-- */
/* for (let i = 3; i >= 1; i--) {
    console.log(i);
}
console.log("Empieza"); */

/* --EJERCICIO 8-- */
/* let puntajeTotal = 0;

for (let ronda = 1; ronda <= 5; ronda++) {
    let puntosRonda = 10;
    puntajeTotal += puntosRonda;
}
console.log(puntajeTotal); */

/* --EJERCICIO 9-- */
/* const inventario = ["espada", "poción", "llave", "escudo", "mapa"];

console.log(inventario[0]); // espada
console.log(inventario[4]); // mapa
console.log(inventario.length); // 5 */

/* --EJERCICIO 10-- */
/* const inventario = ["espada", "poción", "llave", "escudo"];

for (let i = 0; i < inventario.length; i++) {
    console.log(inventario[i]);
} */

/*--EJERCICIO 11--*/
/* let mochila = [];

mochila.push("Linterna");
mochila.push("Comida");
mochila.push("Mapa");
mochila.pop(mochila.length - 1);
console.log(mochila); */

/* --EJERCICIO 12 */
/* const inventario = ["llave"];
 
if (inventario.includes("llave")) {
    console.log("la puerta se abre");
} else {
    console.log("necesitas una llave para abrir la puerta");
} */

/*--EJERCICIO 13--*/
/* function saludarUsuario(nombre) {
    console.log("Hola, " + nombre + "!");
}
saludarUsuario("Milo"); */

/* --EJERCICIO 14-- */
/* function calcularVidaRestante(vida, danio) {
    return vida - danio;
}
let resultado = calcularVidaRestante(100, 30);
console.log(resultado); */

/* --EJERCICIO 15-- */
const sumar = (a, b) => {
    return a + b;
};

console.log(sumar(10, 5));