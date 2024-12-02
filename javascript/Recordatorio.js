// 1. VARIABLES Y TIPOS DE DATOS
// Declaración de variables con let y const
let nombre = "Juan"; // Variable que puede cambiar
const edad = 25;     // Variable constante
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

// Tipos de datos
let numero = 42;           // Número
let booleano = true;       // Booleano
let indefinido;            // Undefined (sin valor)
let nulo = null;           // Null
let arreglo = [1, 2, 3];   // Array (lista)
let objeto = { clave: "valor", otroClave: 42 }; // Objeto

console.log(numero, booleano, indefinido, nulo, arreglo, objeto);

// 2. OPERADORES Y CONDICIONES
let suma = 5 + 3;    // Operadores aritméticos
let esMayor = 10 > 5; // Operadores de comparación
if (esMayor) {
    console.log("10 es mayor que 5");
} else {
    console.log("5 no es mayor que 10");
}

// Operador ternario
let resultado = esMayor ? "Sí" : "No";
console.log(`¿Es 10 mayor que 5? ${resultado}`);

// 3. BUCLES
for (let i = 0; i < 5; i++) {
    console.log(`Iteración: ${i}`);
}

// Recorrer un arreglo
arreglo.forEach((valor) => {
    console.log(`Valor en el arreglo: ${valor}`);
});

// 4. FUNCIONES BÁSICAS
function sumar(a, b) {
    return a + b;
}
console.log(`La suma de 2 y 3 es: ${sumar(2, 3)}`);

// Funciones flecha (más concisas)
const multiplicar = (a, b) => a * b;
console.log(`El producto de 4 y 5 es: ${multiplicar(4, 5)}`);

// 5. OBJETOS Y MÉTODOS
let estudiante = {
    nombre: "María",
    edad: 22,
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    },
};
estudiante.saludar();

// 6. PROMESAS Y ASINCRONÍA
const promesa = new Promise((resolve, reject) => {
    let exito = true; // Simula una operación
    if (exito) resolve("¡Promesa cumplida!");
    else reject("Promesa fallida.");
});

promesa
    .then((mensaje) => console.log(mensaje)) // Manejo del éxito
    .catch((error) => console.error(error)); // Manejo del error

// Funciones asíncronas y await
const obtenerDatos = async () => {
    try {
        const respuesta = await promesa; // Espera a que la promesa se resuelva
        console.log(respuesta);
    } catch (error) {
        console.error(error);
    }
};
obtenerDatos();

// 7. PROGRAMACIÓN AVANZADA
// Clases y herencia
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hablar() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal {
    hablar() {
        console.log(`${this.nombre} ladra.`);
    }
}

const miPerro = new Perro("Fido");
miPerro.hablar();

// Uso de módulos (si estás en un entorno con soporte para ES6)
//import { miModulo } from "./miModulo.js"; // Suponiendo que miModulo.js exporta algo
//miModulo.miFuncion();

// 8. MANEJO DE ERRORES
try {
    throw new Error("Algo salió mal");
} catch (error) {
    console.error(`Error capturado: ${error.message}`);
} finally {
    console.log("Esto siempre se ejecuta.");
}

// 9. FUNCIONES AVANZADAS
// Uso de closures
function crearContador() {
    let contador = 0;
    return () => {
        contador++;
        console.log(`Contador: ${contador}`);
    };
}

const contador = crearContador();
contador(); // Contador: 1
contador(); // Contador: 2

// Programación funcional (map, filter, reduce)
let numeros = [1, 2, 3, 4, 5];
let cuadrados = numeros.map((n) => n * n); // Elevar cada número al cuadrado
let pares = numeros.filter((n) => n % 2 === 0); // Filtrar pares
let sumaTotal = numeros.reduce((acum, n) => acum + n, 0); // Sumar todos los números

console.log(`Cuadrados: ${cuadrados}`);
console.log(`Pares: ${pares}`);
console.log(`Suma total: ${sumaTotal}`);
