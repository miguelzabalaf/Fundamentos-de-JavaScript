// DECLARAMOS UNA CLASE EN DONDE SE PUEDEN CREAR VARIABLES / USUARIOS CON LOS PARÁMETROS DE NOMBRE Y APELLIDO
function heredaDe (prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}


function Persona (nombre, apellido, edad, altura) {   
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}

// CREAMOS FUNCIONES QUE PUEDEN DESEMPEÑAR CON LOS USUARIOS CREADOS, COMO SALUDAR

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.saberAltura = function () {
    if (this.altura >= 1.80) {
        console.log(`Hola ${this.nombre} tu altura es de ${this.altura} metros, significa que eres ALTO`)
    } else {
        console.log(`Hola ${this.nombre} tu altura es de ${this.altura} metros, significa que eres BAJO`)
    }
}


function Desarrollador (nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, soy el desarrollador ${this.nombre} ${this.apellido}`)
}


// VAMOR A CREAR NUEVOS USUARIOS PROTOTIPOS, UN OBJETO.
var miguel = new Persona('Miguel', 'Zabala', 20, 1.70)
var Miguel = new Desarrollador('Miguel', 'Zabala')
var alfonso = new Persona('Alfonso', 'Zabala', 53, 1.83)
var indira = new Persona('Indira', 'Figueroa', 50, 1.59)