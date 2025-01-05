//Números primos:
//    Escribe un programa que determine si un número ingresado por el usuario es primo.

function detectorNumeroPrimo(N) {
    if (!Number.isInteger(N) || N <= 1) {
        return console.log(`El número ${N} no es primo porque no cumple las condiciones básicas.`);
    }

    // Verificar si N tiene divisores
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return console.log(`El número ${N} no es primo.`);
        }
    }

    // Si no se encontraron divisores
    return console.log(`El número ${N} es primo.`);
}

// Solicitar un número al usuario
const valor = parseInt(prompt("Ingresa un número para verificar si es primo:"), 10);
detectorNumeroPrimo(valor);
