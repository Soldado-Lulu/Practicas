//Palíndromo:
//    Verifica si una palabra o frase ingresada por el usuario es un palíndromo (se lee igual de izquierda a derecha y viceversa).
function esPalindromo(cadena) {
    // Convertir a minúsculas y eliminar espacios y caracteres especiales
    let cadenaLimpia = cadena
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ""); // Solo letras y números

    // Comparar la cadena limpia con su reverso
    let cadenaReversa = cadenaLimpia.split("").reverse().join("");
    return cadenaLimpia === cadenaReversa;
}

// Ejemplo de uso
let palabraOFrase = prompt("Ingresa una palabra o frase para verificar si es un palíndromo:");
if (esPalindromo(palabraOFrase)) {
    console.log(`"${palabraOFrase}" es un palíndromo.`);
} else {
    console.log(`"${palabraOFrase}" no es un palíndromo.`);
}

/*
Normalización de la entrada:

Convertimos la cadena a minúsculas con .toLowerCase() para ignorar mayúsculas/minúsculas.
Usamos .replace(/[^a-z0-9]/g, "") para eliminar caracteres no alfanuméricos (espacios, comas, etc.).
Inversión de la cadena:

.split("") convierte la cadena en un arreglo de caracteres.
.reverse() invierte el orden del arreglo.
.join("") convierte el arreglo nuevamente a una cadena.
*/