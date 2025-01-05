//Conversión de temperaturas:
//   Crea un programa que convierta una temperatura dada en grados Celsius a Fahrenheit.
function celsiusAFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

let valor = parseFloat(prompt("Ingrese los grados en Celsius"),10);
const resultado = celsiusAFahrenheit(valor);
console.log(resultado);
