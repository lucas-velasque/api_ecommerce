'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Eletrônicos',
        description: 'Produtos eletrônicos em geral',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Móveis',
        description: 'Móveis para casa e escritório',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Roupas',
        description: 'Vestuário em geral',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Livros',
        description: 'Livros de diversos gêneros',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Esportes',
        description: 'Artigos esportivos',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};