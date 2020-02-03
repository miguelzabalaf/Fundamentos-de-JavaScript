var x = 4,
    y = '4'

    // x == y  DEVUELVE TRUE
    // x === y  DEVUELVE FALSE (ES MEJOR USAR ESTE)

    var miguel = {
        nombre: 'Miguel'
    }

    var alfonso = {
        nombre: 'Miguel'
    }

    // miguel == alfonso DEVUELVE FALSE
    // miguel === alfonso DEVUELVE FALSE

    var juanito = {
        nombre: 'Juanito'
    }

    var pepito = juanito

    // juanito == pepito // DEVUELVE TRUE
    // juanito === pepito // DEVUELVE TRUE

// ******************************************

var otraPersona = {
    ...miguel // DESGLOZAR EL OBJETO MIGUEL
}