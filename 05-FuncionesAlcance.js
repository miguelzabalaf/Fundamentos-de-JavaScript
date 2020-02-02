var nombre = 'Miguel'

function nombreEnMayusculas (n) {
    console.log(n.toUpperCase())
}
// LA VARIABLE N SOLO EXISTE EN EL ENTORNO DE LA FUNCION
// LA VARIABLE NOMBRE ES UNA VARIABLE GLOBAL
nombreEnMayusculas(nombre)