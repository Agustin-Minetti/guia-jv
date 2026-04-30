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
/* const sumar = (a, b) => {
    return a + b;
};
console.log(sumar(10, 5)); */

/* --EJERCICIO 16-- */
/* const jugador = {
 nombre: "Luna",
 vida: 100,
 energia: 80,
 nivel: 1,
 inventario: ["espada", "poción"]
};
console.log("Nombre del jugador: " + jugador.nombre);
console.log("Vida del jugador: " + jugador.vida);
console.log("Energía del jugador: " + jugador.energia);
console.log("Nivel del jugador: " + jugador.nivel);
console.log("Inventario del jugador: " + jugador.inventario); */

/*--EJERCICIO 17--*/
/* const jugador = {
 nombre: "Kai",
 nivel: 1,
 monedas: 0
};
console.log(jugador);

function subirNivel(jugador) {
 jugador.nivel += 1;
 jugador.monedas += 50;
}
subirNivel(jugador);
console.log(jugador); */

/* --EJERCICIO 18-- */
const person = [
    { nombre: "Luna", vida: 100, tipo: "Maga", nivel: 5 },
    { nombre: "Kai", vida: 120, tipo: "Guerrero", nivel: 4 },
    { nombre: "Nina", vida: 90, tipo: "Arquera", nivel: 3 }
];

for (let i = 0; i < person.length; i++) {
    console.log(person[i].nombre + " es: " + person[i].tipo + " con nivel " + person[i].nivel);
}