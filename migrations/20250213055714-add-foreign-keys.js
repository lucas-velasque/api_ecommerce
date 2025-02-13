'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Products FK
    await queryInterface.addConstraint('Products', {
      fields: ['category_id'],
      type: 'foreign key',
      name: 'fk_products_category',
      references: {
        table: 'Categories',
        field: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });

    // Reviews FKs
    await queryInterface.addConstraint('Reviews', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_reviews_user',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('Reviews', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'fk_reviews_product',
      references: {
        table: 'Products',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    // Addresses FK
    await queryInterface.addConstraint('Addresses', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_addresses_user',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    // CartItems FKs
    await queryInterface.addConstraint('CartItems', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_cart_items_user',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('CartItems', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'fk_cart_items_product',
      references: {
        table: 'Products',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    // Orders FKs
    await queryInterface.addConstraint('Orders', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_orders_user',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('Orders', {
      fields: ['address_id'],
      type: 'foreign key',
      name: 'fk_orders_address',
      references: {
        table: 'Addresses',
        field: 'id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });

    // OrderItems FKs
    await queryInterface.addConstraint('OrderItems', {
      fields: ['order_id'],
      type: 'foreign key',
      name: 'fk_order_items_order',
      references: {
        table: 'Orders',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('OrderItems', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'fk_order_items_product',
      references: {
        table: 'Products',
        field: 'id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });

    // Tracking FK
    await queryInterface.addConstraint('Trackings', {
      fields: ['order_id'],
      type: 'foreign key',
      name: 'fk_tracking_order',
      references: {
        table: 'Orders',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove all foreign keys
    await queryInterface.removeConstraint('Products', 'fk_products_category');
    await queryInterface.removeConstraint('Reviews', 'fk_reviews_user');
    await queryInterface.removeConstraint('Reviews', 'fk_reviews_product');
    await queryInterface.removeConstraint('Addresses', 'fk_addresses_user');
    await queryInterface.removeConstraint('CartItems', 'fk_cart_items_user');
    await queryInterface.removeConstraint('CartItems', 'fk_cart_items_product');
    await queryInterface.removeConstraint('Orders', 'fk_orders_user');
    await queryInterface.removeConstraint('Orders', 'fk_orders_address');
    await queryInterface.removeConstraint('OrderItems', 'fk_order_items_order');
    await queryInterface.removeConstraint('OrderItems', 'fk_order_items_product');
    await queryInterface.removeConstraint('Trackings', 'fk_tracking_order');
  }
};