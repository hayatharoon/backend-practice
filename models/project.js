const moment = require('moment');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Project = sequelize.define(
  'project',
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
    clientName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
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
        (record.createdAt = moment().unix()), (record.updatedAt = moment().unix()), (record.startDate = moment().unix());
      },
      beforeUpdate: (record) => {
        (record.updatedAt = moment().unix()), (record.startDate = moment().unix());
      },
    },
  }
);

export default Project;
