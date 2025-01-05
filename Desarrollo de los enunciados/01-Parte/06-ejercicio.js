//Tabla de multiplicar:
//    Genera la tabla de multiplicar para un número dado por el usuario.
function tablaMultiplicar(N){
for(let i=0; i<=10;i++){
    respuesta = i * N;
    console.log(respuesta);
}
}


const valor = parseInt(prompt("Ingrese su numero paragenerar la tabal de multiplicar ",10));
console.log(tablaMultiplicar(valor));