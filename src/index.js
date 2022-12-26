import { app } from './app.js'
import { sequelize } from './database/database.js'
/* eslint-disable no-unused-vars */
import { Band } from './modules/Band.js'
import { Genre } from './modules/Genre.js'
import { Instrument } from './modules/Instrument.js'
import { Occupation } from './modules/Occupation.js'
import { Member } from './modules/Member.js'
import { Album } from './modules/Album.js'
import { Song } from './modules/Song.js'

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
