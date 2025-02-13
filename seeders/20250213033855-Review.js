'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        product_id: 1,
        user_id: 1,
        rating: 5,
        comment: 'Melhor camisa que já comprei! Botafogo nem se compara!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 2,
        user_id: 1,
        rating: 2,
        comment: 'Travou aqui hein kkkkkk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 3,
        user_id: 1,
        rating: 4,
        comment: 'Minha mãe continua me ligando',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};