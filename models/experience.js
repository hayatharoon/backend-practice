const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
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
          record.createdAt = moment().unix();
          record.updatedAt = moment().unix();
          record.startDate = moment().unix();
          record.endDate = moment().unix();
        },
        beforeUpdate: (record) => {
          record.updatedAt = moment().unix();
          record.startDate = moment().unix();
          record.endDate = moment().unix();
        },
      },
    }
  );
  return Experience;
};
