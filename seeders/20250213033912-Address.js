'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addresses', [
      {
        user_id: 1,
        street: 'Rua Laranjeiras',
        number: '123',
        complement: 'Apto 101',
        neighborhood: 'Laranjeiras',
        city: 'Rio de Janeiro',
        state: 'RJ',
        zip_code: '22240-004',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        street: 'Avenida das Américas',
        number: '500',
        complement: 'Bloco 2',
        neighborhood: 'Barra da Tijuca',
        city: 'Rio de Janeiro',
        state: 'RJ',
        zip_code: '22640-100',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};