import { DataTypes, sequelize } from '../config/config.js'

export const Occupation = sequelize.define('occupation', {
  id_occupation: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
