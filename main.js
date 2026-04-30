console.log("Guía JavaScript iniciada");

const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;

console.log(nombre, edad, vida, puntaje, estaActivo);

let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;
let puntajeTotal = puntosBase + bonus - penalizacion;
console.log(puntajeTotal);

const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
 const valor = input.value;
 const numero = parseFloat(valor);
 const resultado = numero + 10;
 mensaje.textContent = "El resultado es: " + resultado;
});

const edad = prompt("Ingresa tu edad:");
if (edad >= 13) {
 alert("Podes Jugar al juego");
} else {
 alert("No podes jugar al juego todavia");
}