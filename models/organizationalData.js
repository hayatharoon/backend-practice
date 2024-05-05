const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const OrganizatinalData = sequelize.define(
    'OrganizatinalData',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hiredDate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      accountNumber: {
        type: DataTypes.STRING,
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
          record.createdAt = moment().unix();
          record.updatedAt = moment().unix();
          record.hiredDate = moment().unix();
        },
        beforeUpdate: (record) => {
          record.updatedAt = moment().unix();
          record.hiredDate = moment().unix();
        },
      },
    }
  );
  return OrganizatinalData;
};
