'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trackings', [
      {
        order_id: 1,
        status: 'delivered',
        carrier: 'Sedex',
        tracking_code: 'BR123456789',
        estimated_delivery: new Date('2024-01-20'),
        current_location: 'Rio de Janeiro, RJ',
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15')
      },
      {
        order_id: 2,
        status: 'in_transit',
        carrier: 'DHL',
        tracking_code: 'DH987654321',
        estimated_delivery: new Date('2024-02-05'),
        current_location: 'São Paulo, SP',
        createdAt: new Date('2024-02-01'),
        updatedAt: new Date('2024-02-01')
      },
      {
        order_id: 3,
        status: 'in_preparation',
        carrier: 'FedEx',
        tracking_code: 'FE456789123',
        estimated_delivery: new Date('2024-02-20'),
        current_location: 'Curitiba, PR',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trackings', null, {});
  }
};