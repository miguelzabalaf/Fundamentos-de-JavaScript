var miguel = {
    nombre: 'Miguel',
    edad: 20,
    altura: 1.70,
    estudiando: true,
    hobbies: ['Aprender', 'Hacer deporte', 'Escichar música']
}


function imprimirEnMayusculas (persona) {
//  var { nombre } = persona
    var nombre = persona.nombre
    
    console.log(nombre.toUpperCase())
}

// imprimirEnMayusculas(miguel)
// UN OBEJTO ESTÁ CONSTITUIDO POR LLAVE Y VALOR

function saludo (persona) {
    console.log(`Hola ${persona.nombre}, tengo entendido que tienes ${persona.edad} años`)
}

function cumpleaños (persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
    console.log(persona.edad)
}