const moment = require('moment');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Skill = sequelize.define(
  'skill',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experience: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    hooks: {
      beforeCreate: (record) => {
        (record.createdAt = moment().unix()), (record.updatedAt = moment().unix());
      },
      beforeUpdate: (record) => {
        record.updatedAt = moment().unix();
      },
    },
  }
);

export default Skill;
