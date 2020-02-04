var miguel = {
    nombre: 'Miguel',
    apellido: 'Zabala',
    edad: 20,
    peso: 60
}
console.log(`${miguel.nombre} al INICIO del año pesa ${miguel.peso}Kg`)

const INCREMENTO_PESO = 0.3
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = miguel.peso - 3

var dias = 0

while (miguel.peso > META) {

    if (comeMucho()) {
        aumentarDePeso(miguel)
    }
    if (realizaDeporte()) {
        adelgazar(miguel)
    }
    dias += 1
}

if (miguel.peso < 60) {
    console.log(`${miguel.nombre} al FINAL del año pesa ${miguel.peso.toFixed(2)}Kg, ADELGAZÓ en ${dias} días.`)
} else {
    console.log(`${miguel.nombre} al FINAL del año pesa ${miguel.peso.toFixed(2)}Kg, ENGORDÓ`)
}