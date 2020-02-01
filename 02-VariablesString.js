var name = 'Miguel'
var lastname = 'Zabala'

var completeName = name + ' ' + lastname

var completeNameInUppercase = completeName.toUpperCase()
// LA FUNCION UPPERCASE HACE QUE EL STRING QUE CONTIENE LA VARIABLE LO CAMBIE COMPLETAMENTE A MAYUSCULAS.
var completeNameInLowercase = completeNameInUppercase.toLowerCase()
// LA FUNCION LOWERCASE HACE QUE EL STRING QUE CONTIENE LA VARIABLE LO CAMBIE COMPLETAMENTE A MINUSCULAS.

/*
.toUpperCase()--------> SON CONSIDERADAS FUNCIONES SIN PARÁMETROS
.toLowerCase()-----|
*/

var palabra = 'Ciudad'

var primerCaracter = palabra.charAt(0) 
// PARA ACCEDER AL PRIMER CARACTER DE UN STRING

var cantidadLetras = palabra.length
// LENGHT ES UN ATRIBUTO YA QUE NO LO INVOCAMOS COMO UNA FUNCION


// INTERPOLACIÓN DE TEXTOS

var a = "Hola"
var b = "Miguel"

var c = `${a} ${b}` // INTERPOLACIÓN DE TEXTOS CON COMILLAS INVERTIDAS
console.log(c)

// SUB STRING

var str = name.substr(0, 3) 
// A PARTIR DEL CARACTER CON EL INDICE 0 CÓGEME 3 CARACTERES (MIG)
console.log(str)