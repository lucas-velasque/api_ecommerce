'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Camisa do Fluminense',
        description: 'Melhor que botafogo',
        price: 299.99,
        stock: 87,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Notebook Positivo',
        description: 'kkkkk não acredito que tu comprou',
        price: 2999.99,
        stock: 15,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Celular Anti-Social',
        description: 'Sem WhatsApp,',
        price: 1499.99,
        stock: 30,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Super Mario Maker Pirata',
        description: 'Igualzinho o original, confia',
        price: 49.99,
        stock: 100,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};