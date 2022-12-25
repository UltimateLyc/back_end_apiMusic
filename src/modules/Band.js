import { DataTypes, sequelize } from '../config/config.js'

export const Band = sequelize.define('band', {
  id_band: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fundation: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  oficial_web_site: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
