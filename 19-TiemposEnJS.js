console.log(`a`) // SE EJECUTA ENSEGUIDA

setTimeout(() => {
    console.log(`b`)
}, 2000) // SE EJECUTA A LOS 2 SEGUNDOS

setTimeout(() => {console.log(`c`)}, 4000) // SE EJECUTA A LOS 4 SEGUNDOS

setTimeout(() => {console.log(`D`)}, 100)