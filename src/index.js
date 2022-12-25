import { app } from './app.js'
import { sequelize } from './database/database.js'

async function main () {
  try {
    await sequelize.sync({ force: false }) // Sincroniza el codigo con lo que hara en la base de datos // force:false sirve para que no se modifique la tabla ya creada
    await sequelize.authenticate() // Verrifica que nos podamos conectar a la bd
    app.listen(3000)
    console.log('Server is ON')
  } catch (error) {
    console.log(error)
  }
}

main()
