function Usuario(nombre){
    this.nombre =nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);


const U = Usuario
let user =new U('Erick');

console.log(user);

function of(Fn , arg){

    return new Fn(arg)
}
let user1 = of(Usuario, 'Chanchito');
console.log(user1);