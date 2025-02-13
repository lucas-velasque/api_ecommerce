'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        user_id: 1,
        address_id: 1,
        status: 'delivered',
        total_amount: 599.98,
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15')
      },
      {
        user_id: 1,
        address_id: 2,
        status: 'processing',
        total_amount: 2999.99,
        createdAt: new Date('2024-02-01'),
        updatedAt: new Date('2024-02-01')
      },
      {
        user_id: 1,
        address_id: 1,
        status: 'pending',
        total_amount: 1499.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};