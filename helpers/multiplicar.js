const fs = require('fs')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let tabla = ''
    let tablaArchivo = ''

    for (let i = 1; i <= hasta; i++) {
      tabla += `${base.toString().red} x ${i} = ${base * i}\n`
      tablaArchivo += `${base} x ${i} = ${base * i}\n`
    }

    if (listar) {
      console.log('===================')
      console.log('   Table del', base)
      console.log('===================')

      console.log(tabla)
    }

    const nombreArchivo = `tabla-${base}.txt`

    fs.writeFile(`./tablas/${nombreArchivo}`, tablaArchivo, (err) => {
      if (err) throw err
    })

    return nombreArchivo
  } catch (error) {
    throw error
  }
}

module.exports = {
  crearArchivo,
}
