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

const imprimirNombre = ({ nombre }) => `${nombre}`

const mayoriaDeEdad = 18

function esMayorDeEdad (persona) {
    return persona.edad >= mayoriaDeEdad
}

const esMayorDeEdad2 = function (persona) { // SE LE PUEDE ASIGNAR UNA FUNCION A UNA VARIABLE
    return persona.edad >= mayoriaDeEdad
}

const esMayorDeEdad3 = (persona) => {return persona.edad >= mayoriaDeEdad} //ARROW FUNCTIONS

const esMayorDeEdad4 = persona => persona.edad >= mayoriaDeEdad 
//ARROW FUNCTIONS SIN LLAVES PORQUE VA A RETORNAR Y SIN PARENTESIS PORQUE SOLO TIENE UN PARÀMETRO

const esMayorDeEdad5 = ({ edad }) => edad >= mayoriaDeEdad 
//ARROW FUNCTIONS -> LE VAMOS A PASAR UN OBJETO QUE TIENE EL PARÁMETRO EDAD

const esMenorDeEdad = ({ edad }) => edad < !esMayorDeEdad5({ edad })

function imprimirSiEsMayorDeEdad (persona) {
    if (esMayorDeEdad5(persona)) {
        console.log(`${persona.nombre} es mayor de edad por tener ${persona.edad} años`)
    } else {
        console.log(`${persona.nombre} es menor de edad por tener ${persona.edad} años`)
    }
}

function permitirAcceso (persona) {
    if (!esMayorDeEdad5(persona)) {
        console.log(`${persona.nombre} tiene el acceso DENEGADO`)
    } else {
        console.log(`${persona.nombre} tiene el acceso PERMITIDO`)
    }
}