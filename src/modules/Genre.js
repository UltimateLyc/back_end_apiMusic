import { DataTypes, sequelize } from '../config/config.js'

export const Genre = sequelize.define('genre', {
  id_genre: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
