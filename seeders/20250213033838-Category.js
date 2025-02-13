'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Informática',
        description: 'Produtos de informática e acessórios',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Celulares',
        description: 'Smartphones e acessórios',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Games',
        description: 'Consoles, jogos e acessórios',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};