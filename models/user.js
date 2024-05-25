const moment = require('moment');
const { encryptPassword } = require('../utils');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING,
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
        beforeCreate: async (record) => {
          record.createdAt = moment().unix();
          record.updatedAt = moment().unix();
          record.password = await encryptPassword(record.password);
        },
        beforeUpdate: (record) => {
          record.updatedAt = moment().unix();
        },
      },
    }
  );
  return User;
};
