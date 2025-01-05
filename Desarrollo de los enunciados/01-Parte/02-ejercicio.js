//Número par o impar:
//    Pide al usuario un número y determina si es par o impar.

function saberParImpar(N){
    if(N % 2 === 1){
        return console.log( N + " No es par");
    } 
    else{
        return console.log(N + " Es par");
    }
}
let N = parseInt(prompt("Ingrese un numero positivo ") ,10);
const resultado = saberParImpar(N);
