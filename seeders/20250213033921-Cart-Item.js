'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CartItems', [
      {
        user_id: 1,
        product_id: 1,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 2,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 3,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CartItems', null, {});
  }
};