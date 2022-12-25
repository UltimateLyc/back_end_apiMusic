import { DataTypes, sequelize } from '../config/config.js'
import { Album } from './Album.js'
import { Genre } from './Genre.js'

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

Band.hasMany(Genre, {
  foreignKey: 'bandId',
  sourceKey: 'id_band'
})

Genre.belongsTo(Band, {
  foreignKey: 'bandId',
  target: 'id_band'
})

Band.hasMany(Album, {
  foreignKey: 'bandId',
  sourceKey: 'id_band'
})

Album.belongsTo(Band, {
  foreignKey: 'bandId',
  target: 'id_band'
})
