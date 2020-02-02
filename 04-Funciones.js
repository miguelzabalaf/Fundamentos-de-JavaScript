var nombre = 'Miguel', edad = 20

function imprirEdad() {
    console.log(`${nombre} tiene ${edad} años`)
} // UNA FUNCION SIN PARÁMETROS, UNA FUNCION ES UNA ESTRUCTURA QUE GUARD UN CODIGO O FUNCION REUTILIZABLE

// FUNCTION CON PARÁMETROS

function imprimirInfo (name = "Anónimo", edad = 1000) {
    console.log(`Hola ${name}, tienes ${edad} años`)
} // UNA FUNCIÓN CON PARÁMETROS PARA ASÍ PODER ESTABLECER VARIABILIDADES DE UNA MISMA RESPUESTA.