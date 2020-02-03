var miguel = {
    nombre: 'Miguel',
    apellido: 'Zabala',
    edad: 15,
    ingeniero: true,
    futbolista: false,
    dj: false,
    fotografo: true
}

var alfonso = {
    nombre: 'Alfonso',
    apellido: 'Zabala',
    edad: 50,
    ingeniero: true,
    futbolista: true,
    dj: true,
    fotografo: true
}

function imprimirProfesiones (persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero) {
        console.log('Ingeniero')
    }
    if (persona.futbolista) {
        console.log('Futbolista')
    }
    if (persona.dj) {
        console.log('DJ')
    }
    if (persona.fotografo) {
        console.log('Fotógrafo')
    }
}

// function imprimirSiEsMayorDeEdad (persona) {
//     const mayoriaDeEdad = 18
//     if (persona.edad >= mayoriaDeEdad) {
//         console.log(`${persona.nombre} tiene ${persona.edad}, es mayor de edad.`)
//     } else {
//         console.log(`${persona.nombre} tiene ${persona.edad}, es menor de edad.`)
//     }
// }


// *************************************************************

const mayoriaDeEdad = 18

function esMayorDeEdad (persona) {
    return persona.edad >= mayoriaDeEdad
}

function imprimirSiEsMayorDeEdad (persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad por tener ${persona.edad} años`)
    } else {
        console.log(`${persona.nombre} es menor de edad por tener ${persona.edad} años`)
    }
}