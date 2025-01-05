//Contador de vocales:
//    Escribe un programa que reciba una cadena y cuente cuántas vocales contiene.
function contarVocales(cadena) {
    // Definir las vocales
    const vocales = "aeiouAEIOU";
    let contador = 0;

    // Recorrer cada carácter de la cadena
    for (let letra of cadena) {
        // Si la letra está en las vocales, incrementar el contador
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

// Ejemplo de uso
let texto = "Hola, ¿cómo estás?";
let totalVocales = contarVocales(texto);
console.log(`La cadena "${texto}" contiene ${totalVocales} vocales.`);
