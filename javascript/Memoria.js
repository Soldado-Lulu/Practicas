// Datos de ejemplo organizados
const datos = {
    variables: {
        nombre: "Juan",
        edad: 25,
        tipos: {
            numero: 42,
            booleano: true,
            indefinido: undefined,
            nulo: null,
            arreglo: [1, 2, 3],
            objeto: { clave: "valor", otroClave: 42 }
        }
    },
    operadores: {
        suma: 5 + 3,
        esMayor: 10 > 5,
        resultado: 10 > 5 ? "Sí" : "No"
    },
    bucles: [0, 1, 2, 3, 4],
    funciones: {
        multiplicar: (a, b) => a * b,
        calcularAreaTriangulo: (base, altura) => (base * altura) / 2
    },
    objetos: {
        estudiante: { nombre: "María", edad: 22 }
    },
    asincronia: "Promesa cumplida",
    clases: {
        animal: "Animal genérico hace un sonido.",
        perro: "Fido ladra."
    },
    manejoErrores: "Algo salió mal",
    funcionesAvanzadas: {
        contador: [1, 2],
        numerosPares: [2, 4, 6, 8],
        promedioPares: 5
    }
};

// Función para renderizar datos en el HTML
const renderizarDatos = (datos) => {
    const contenedor = document.getElementById("contenido");

    contenedor.innerHTML = `
        <h2>1. Variables y Tipos de Datos</h2>
        <ul>
            <li><strong>Nombre:</strong> ${datos.variables.nombre}</li>
            <li><strong>Edad:</strong> ${datos.variables.edad}</li>
            <li><strong>Tipos:</strong>
                <ul>
                    <li><strong>Número:</strong> ${datos.variables.tipos.numero}</li>
                    <li><strong>Booleano:</strong> ${datos.variables.tipos.booleano}</li>
                    <li><strong>Undefined:</strong> ${datos.variables.tipos.indefinido}</li>
                    <li><strong>Null:</strong> ${datos.variables.tipos.nulo}</li>
                    <li><strong>Arreglo:</strong> ${datos.variables.tipos.arreglo.join(", ")}</li>
                    <li><strong>Objeto:</strong> ${JSON.stringify(datos.variables.tipos.objeto)}</li>
                </ul>
            </li>
        </ul>

        <h2>2. Operadores y Condiciones</h2>
        <ul>
            <li><strong>Suma:</strong> ${datos.operadores.suma}</li>
            <li><strong>¿Es mayor?:</strong> ${datos.operadores.resultado}</li>
        </ul>

        <h2>3. Bucles</h2>
        <ul>
            ${datos.bucles.map((i) => `<li>Iteración: ${i}</li>`).join("")}
        </ul>

        <h2>4. Funciones Básicas</h2>
        <ul>
            <li><strong>Multiplicar 4 x 6:</strong> ${datos.funciones.multiplicar(4, 6)}</li>
            <li><strong>Área de triángulo (base 10, altura 5):</strong> ${datos.funciones.calcularAreaTriangulo(10, 5)}</li>
        </ul>

        <h2>5. Objetos y Métodos</h2>
        <ul>
            <li><strong>Estudiante:</strong> Nombre: ${datos.objetos.estudiante.nombre}, Edad: ${datos.objetos.estudiante.edad}</li>
        </ul>

        <h2>6. Promesas y Asincronía</h2>
        <p>${datos.asincronia}</p>

        <h2>7. Clases y Herencia</h2>
        <ul>
            <li><strong>Animal:</strong> ${datos.clases.animal}</li>
            <li><strong>Perro:</strong> ${datos.clases.perro}</li>
        </ul>

        <h2>8. Manejo de Errores</h2>
        <p>${datos.manejoErrores}</p>

        <h2>9. Funciones Avanzadas</h2>
        <ul>
            <li><strong>Contador:</strong> ${datos.funcionesAvanzadas.contador.join(", ")}</li>
            <li><strong>Números pares:</strong> ${datos.funcionesAvanzadas.numerosPares.join(", ")}</li>
            <li><strong>Promedio de pares:</strong> ${datos.funcionesAvanzadas.promedioPares}</li>
        </ul>
    `;
};

// Llamar a la función para renderizar datos
renderizarDatos(datos);
