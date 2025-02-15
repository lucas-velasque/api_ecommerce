'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Eletrônicos',
        description: 'Produtos eletrônicos em geral',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Roupas',
        description: 'Vestuário masculino e feminino',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Livros',
        description: 'Livros de diversos gêneros',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alimentos',
        description: 'Produtos alimentícios',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};