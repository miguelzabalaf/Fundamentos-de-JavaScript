// SWAPI.CO

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onResponse = function (luke) {
    console.log(`Hola, yo soy ${luke.name}`)
}
// $.get(lukeUrl, opts, onResponse)


// *********************************************
// HACIENDO MULTIPLES REQUEST

function obtenerPersonaje (id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onResponse)
}

obtenerPersonaje(1)


// EL ASINCRONISMO EN JAVASCRIPT NOS DA LA RESPUESTA EN DESORDEN YA QUE NO HAY UN ORDEN ESPECÍFICO DE EJECUCIÓN, TODO DEPENDE DEL SERVIDOR Y QUE RESPUESTA DA PRIMERO QUE OTRAS, PERO OBVIO, ESTO SE PUEDE CONTROLAR
