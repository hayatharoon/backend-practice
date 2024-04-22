'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrganizationalData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      jobTitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hiredDate: {
        type: Sequelize.DATE,
      },
      salary: {
        type: Sequelize.INTEGER,
      },
      accountNumber: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('OrganizationalData');
  },
};
