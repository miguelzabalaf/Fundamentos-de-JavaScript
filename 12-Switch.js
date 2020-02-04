var signo = prompt(`Ingresa tu signo:`)

switch (signo.toLowerCase()) {
    case 'acuario':
        console.log("Eres acuario, en tu día..")
        break
    case 'leo':
        console.log("Eres leo, en tu día..")
        break
    case 'aries':
    case 'áries':
        console.log("Eres aries, en tu día..")
        break
    default:
        console.log("No ingresaste uno correcto")
}