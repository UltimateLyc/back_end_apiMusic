import { DataTypes, sequelize } from '../config/config.js'
import { Member } from './Member.js'

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

Member.hasMany(Instrument, {
  foreignKey: 'memberId',
  sourceKey: 'id_member'
})

Instrument.belongsTo(Member, {
  foreignKey: 'memberId',
  target: 'id_member'
})
