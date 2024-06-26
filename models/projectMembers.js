const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const ProjectMember = sequelize.define(
    'projectMember',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      role: {
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
        },
        beforeUpdate: (record) => {
          record.updatedAt = moment().unix();
        },
      },
    }
  );

  return ProjectMember;
};
