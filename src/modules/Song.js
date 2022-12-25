import { DataTypes, sequelize } from '../config/config.js'

export const Song = sequelize.define('song', {
  id_song: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration: {
    type: DataTypes.TIME,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
