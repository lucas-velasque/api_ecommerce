'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password123', 10);

    return queryInterface.bulkInsert('users', [
      {
        id: 'e45b1f40-30d1-4e42-a354-e0624f0c4201',
        name: 'John Doe',
        email: 'john@example.com',
        password: hashedPassword,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a92b3c50-40e2-5f53-b465-f1735f0d5312',
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: hashedPassword,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};