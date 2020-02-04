var miguel = {
    nombre: 'Miguel',
    apellido: 'Zabala',
    altura: 1.70
}

var victoria = {
    nombre: 'Victoria',
    apellido: 'Zabala',
    altura: 1.65
}

var alfonso = {
    nombre: 'Alfonso',
    apellido: 'Zabala',
    altura: 1.68
}

var indira = {
    nombre: 'Indira',
    apellido: 'Figueroa',
    altura: 1.60
}

var personas = [miguel, victoria, alfonso, indira]

// VAMOS A RECORRER E IMPRIMIR LAS ALTURAS DE CADA UNA DE LAS PERSONAS

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} metros`)
}