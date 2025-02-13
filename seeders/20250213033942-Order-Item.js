'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderItems', [
      {
        order_id: 1,
        product_id: 1,
        quantity: 2,
        price: 299.99,
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15')
      },
      {
        order_id: 2,
        product_id: 2,
        quantity: 1,
        price: 2999.99,
        createdAt: new Date('2024-02-01'),
        updatedAt: new Date('2024-02-01')
      },
      {
        order_id: 3,
        product_id: 3,
        quantity: 1,
        price: 1499.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderItems', null, {});
  }
};