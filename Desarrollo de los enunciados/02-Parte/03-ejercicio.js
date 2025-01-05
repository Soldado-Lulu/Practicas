//Adivina el número:
//    Crea un juego donde el programa elige un número aleatorio entre 1 y 100, y el usuario debe adivinarlo. Proporciona pistas como "más alto" o "más bajo".
function adivinaElNumero() {
    // Genera un número aleatorio entre 1 y 100
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let adivinado = false;

    console.log("¡Bienvenido al juego de adivinar el número!");
    console.log("He elegido un número entre 1 y 100. ¡Intenta adivinarlo!");

    // Bucle para seguir pidiendo números al usuario hasta que adivine
    while (!adivinado) {
        let intento = parseInt(prompt("Introduce tu número: "), 10);
        intentos++;

        if (Number.isNaN(intento)) {
            console.log("Por favor, ingresa un número válido.");
        } else if (intento < numeroSecreto) {
            console.log("El número secreto es más alto.");
        } else if (intento > numeroSecreto) {
            console.log("El número secreto es más bajo.");
        } else {
            console.log(`¡Felicidades! Has adivinado el número ${numeroSecreto} en ${intentos} intentos.`);
            adivinado = true;
        }
    }
}

// Ejecuta el juego
adivinaElNumero();
