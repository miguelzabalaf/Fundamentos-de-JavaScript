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


// const pasarAlturaACms = persona => {
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }

// PARA QUE NO NOS MODIFIQUE EL ARRAY HAY QUE DESTRUCTURAR EL ARRAY, Y QUE SE CREE UNO NUEVO
const pasarAlturaACms = persona => ({ // OTRA MANERA DE DESTRUCTURAR UN OBJETO EN UNA FUNCION
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)