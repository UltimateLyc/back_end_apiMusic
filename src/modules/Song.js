import { DataTypes, sequelize } from '../config/config.js'
import { Album } from './Album.js'
import { Genre } from './Genre.js'

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

Album.hasMany(Song, {
  foreignKey: 'albumId',
  sourceKey: 'id_album'
})

Song.belongsTo(Album, {
  foreignKey: 'albumId',
  target: 'id_album'
})

Song.hasMany(Genre, {
  foreignKey: 'songId',
  sourceKey: 'id_song'
})

Genre.belongsTo(Song, {
  foreignKey: 'songId',
  target: 'id_song'
})
