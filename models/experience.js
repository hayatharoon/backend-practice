const moment = require('moment');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Experience = sequelize.define(
  'experience',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    organizationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.INTEGER,
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
export default Experience;
