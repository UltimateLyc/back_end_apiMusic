import { DataTypes, sequelize } from '../config/config.js'

export const Instrument = sequelize.define('instrument', {
  id_instrument: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
