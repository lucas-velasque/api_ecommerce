'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trackings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('in_preparation', 'shipped', 'in_transit', 'out_for_delivery', 'delivered'),
        defaultValue: 'in_preparation'
      },
      carrier: {
        type: Sequelize.STRING
      },
      tracking_code: {
        type: Sequelize.STRING
      },
      estimated_delivery: {
        type: Sequelize.DATE
      },
      current_location: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Trackings');
  }
};