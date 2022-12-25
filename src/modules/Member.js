import { DataTypes, sequelize } from '../config/config.js'
import { Band } from './Band.js'

export const Member = sequelize.define('member', {
  id_member: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  born: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  birthPlace: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Band.hasMany(Member, {
  foreignKey: 'bandId',
  sourceKey: 'id_band'
})

Member.belongsTo(Band, {
  foreignKey: 'bandId',
  target: 'id_band'
})
