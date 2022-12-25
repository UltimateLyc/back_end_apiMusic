import { DataTypes, sequelize } from '../config/config.js'

export const Album = sequelize.define('album', {
  id_album: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  released: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
