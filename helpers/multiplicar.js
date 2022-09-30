const fs = require('fs')

const crearArchivo = async (base = 5) => {
  try {
    console.log('===================')
    console.log('   Table del', base)
    console.log('===================')

    let tabla = ''

    for (let i = 1; i <= 10; i++) {
      tabla += `${base} x ${i} = ${base * i}\n`
    }

    console.log(tabla)

    const nombreArchivo = `tabla-${base}.txt`

    fs.writeFile(nombreArchivo, tabla, (err) => {
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
