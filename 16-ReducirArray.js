var miguel = {
    nombre: 'Miguel',
    apellido: 'Zabala',
    altura: 1.75,
    cantidadDeLibros: 68
}

var victoria = {
    nombre: 'Victoria',
    apellido: 'Zabala',
    altura: 1.65,
    cantidadDeLibros: 24
}

var alfonso = {
    nombre: 'Alfonso',
    apellido: 'Zabala',
    altura: 1.72,
    cantidadDeLibros: 45
}

var indira = {
    nombre: 'Indira',
    apellido: 'Figueroa',
    altura: 1.60,
    cantidadDeLibros: 62
}

var personas = [miguel, victoria, alfonso, indira]


// **************************************************
var acum = 0

for (var i = 0; i < personas.length; i++) {
    acum = acum  + personas[i].cantidadDeLibros
}

console.log(`En total hay ${acum} libros con ciclo FOR`)
// **************************************************


// **************************************************
const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalDeLibtros = personas.reduce(reducer, 0)
console.log(`En total hay ${totalDeLibtros} libros con el método REDUCE`)
// **************************************************