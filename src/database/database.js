import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
  'musicApiSdb', // name databae
  'postgres', // Program of DB
  'root', // password
  {
    host: 'localhost', // Host
    dialect: 'postgres' // Language
  }
)
