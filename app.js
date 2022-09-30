const { crearArchivo } = require('./helpers/multiplicar')
require('colors')

console.clear()

const base = 104

crearArchivo(base)
  .then((nombreArchivo) =>
    console.log(`Archivo con nombre ${nombreArchivo.red} creado`)
  )
  .catch((error) => console.error(`Este es el error ${error}`))
