const moment = require('moment');
const { GENDER_OPTIONS } = require('../constant');

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    'employee',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      DOB: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM,
        values: GENDER_OPTIONS,
        allowNull: true,
      },
      photo: {
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
          record.createdAt = moment().unix();
          record.updatedAt = moment().unix();
          record.DOB = moment().unix();
        },
        beforeUpdate: (record) => {
          record.updatedAt = moment().unix();
          record.DOB = moment().unix();
        },
      },
    }
  );
  return Employee;
};
