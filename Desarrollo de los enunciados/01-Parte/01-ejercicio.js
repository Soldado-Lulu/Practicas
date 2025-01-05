//Suma de N números:
//   Escribe un programa que reciba un número entero positivo (N) y calcule la suma de todos los números desde 1 hasta N.
console.log("-------------------PRIMER EJERCICIO --------------");
// Función para calcular la suma de todos los números desde 1 hasta N
function calcularSumaHastaN(N) {
    if (N <= 0 || !Number.isInteger(N)) {
        return "Por favor, ingresa un número entero positivo.";
    }

    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += i;
    }
    return suma;
}

// Solicitar al usuario el número N
const N = parseInt(prompt("Ingresa un número entero positivo:"), 10);

const resultado = calcularSumaHastaN(N);
console.log(`La suma de los números desde 1 hasta ${N} es: ${resultado}`);
