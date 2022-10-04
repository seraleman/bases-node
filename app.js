const colors = require('colors')

const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./helpers/yargs')

console.clear()

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) =>
    console.log(`Archivo con nombre ${colors.green(nombreArchivo)} creado`)
  )
  .catch((error) => console.error(`Este es el error ${error}`))
