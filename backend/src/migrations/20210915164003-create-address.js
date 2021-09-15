'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cep: { allowNull: false, type: Sequelize.STRING },
      state: { allowNull: false, type: Sequelize.STRING },
      city: { allowNull: false, type: Sequelize.STRING },
      district: { type: Sequelize.STRING },
      street: { type: Sequelize.STRING },
      number: { type: Sequelize.INTEGER },
      complement: { type: Sequelize.STRING },
      reference: { type: Sequelize.STRING },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'userId',
        references: {
          model: 'users',
          key: 'id',
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('addresses');
  }
};