import { DataTypes, sequelize } from '../config/config.js'
import { Album } from './Album.js'

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

Album.hasMany(Genre, {
  foreignKey: 'albumId',
  sourceKey: 'id_album'
})

Genre.belongsTo(Album, {
  foreignKey: 'albumId',
  target: 'id_album'
})
