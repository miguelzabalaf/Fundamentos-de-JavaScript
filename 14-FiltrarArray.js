var miguel = {
    nombre: 'Miguel',
    apellido: 'Zabala',
    altura: 1.75
}

var victoria = {
    nombre: 'Victoria',
    apellido: 'Zabala',
    altura: 1.65
}

var alfonso = {
    nombre: 'Alfonso',
    apellido: 'Zabala',
    altura: 1.72
}

var indira = {
    nombre: 'Indira',
    apellido: 'Figueroa',
    altura: 1.60
}

var personas = [miguel, victoria, alfonso, indira]

// const esAlta = (persona) => persona.altura >= 1.70
const esAlta = ({ altura }) => altura >= 1.70

// var personasAltas = personas.filter(function (persona) {
    //     return persona.altura >= 1.70
    // })
var personasAltas = personas.filter(esAlta)

console.log(personasAltas) // ME MUESTRA A LOS OBJETOS QUE MIDEN MAS O IGUAL QUE 1.70 (2)

// ************************************************************************************

const esBaja = ({ altura }) => altura < 1.70

var personasBajas = personas.filter(esBaja)

console.log(personasBajas) // ME MUESTRA A LOS OBJETOS QUE MIDEN MENOS QUE 1.70 (2)
