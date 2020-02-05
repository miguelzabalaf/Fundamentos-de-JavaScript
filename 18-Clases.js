// function Persona (nombre, apellido, edad, altura) {   
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//     this.altura = altura
// }

class Persona {
    constructor (nombre, apellido, edad, altura) {   
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }

    saludar () {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    saberAltura () {
        if (this.altura >= 1.80) {
            console.log(`Hola ${this.nombre} tu altura es de ${this.altura} metros, significa que eres ALTO`)
        } else {
            console.log(`Hola ${this.nombre} tu altura es de ${this.altura} metros, significa que eres BAJO`)
        }
    }
}

class Desarrollador extends Persona {
    constructor (nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }   

    saludar () {
        console.log(`Hola, soy el desarrollador ${this.nombre} ${this.apellido}`)
    }
}

var miguel = new Persona('Miguel', 'Zabala', 20, 1.70)
var Miguel = new Desarrollador('Miguel', 'Zabala', 1.80)
var alfonso = new Persona('Alfonso', 'Zabala', 53, 1.83)
var indira = new Persona('Indira', 'Figueroa', 50, 1.59)