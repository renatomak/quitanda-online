'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { allowNull: false, type: Sequelize.STRING },
      homePhone: { type: Sequelize.STRING },
      cellPhone: { allowNull: false, type: Sequelize.STRING },
      email: { allowNull: false, type: Sequelize.STRING },
      cpf: { allowNull: false, type: Sequelize.STRING },
      birthDate: { type: Sequelize.DATE },
      password: { allowNull: false, type: Sequelize.STRING },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};