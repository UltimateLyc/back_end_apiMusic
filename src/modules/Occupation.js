import { DataTypes, sequelize } from '../config/config.js'
import { Member } from './Member.js'

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

Member.hasMany(Occupation, {
  foreignKey: 'memberId',
  sourceKey: 'id_member'
})

Occupation.belongsTo(Member, {
  foreignKey: 'memberId',
  target: 'id_member'
})
