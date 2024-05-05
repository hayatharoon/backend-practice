const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define(
    'expense',
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
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      payType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      receiptNo: {
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
        },
        beforeUpdate: (record) => {
          record.updatedAt = moment().unix();
        },
      },
    }
  );
  return Expense;
};
