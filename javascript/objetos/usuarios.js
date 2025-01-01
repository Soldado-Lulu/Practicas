
function crearUsuario(name, email){
    return {
        email:email,
        name: name,
        activo: false,
        recuperarClave:function(){
            console.log('recuperando calve .....');
        },
    };
}

