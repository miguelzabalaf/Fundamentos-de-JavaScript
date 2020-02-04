var miguel = {
    nombre: 'Miguel',
    apellido: 'Zabala',
    edad: 20,
    peso: 60
}
console.log(`${miguel.nombre} al INICIO del año pesa ${miguel.peso}Kg`)

const INCREMENTO_PESO = 0.2
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (i = 1; i <= 365; i++) {
    var random = Math.random()
    if (random < 0.25) {
        aumentarDePeso(miguel)
    } else if (random < 0.5) {
        adelgazar(miguel)
    }
}

if (miguel.peso < 60) {
    console.log(`${miguel.nombre} al FINAL del año pesa ${miguel.peso.toFixed(2)}Kg, ADELGAZÓ`)
} else {
    console.log(`${miguel.nombre} al FINAL del año pesa ${miguel.peso.toFixed(2)}Kg, ENGORDÓ`)
}