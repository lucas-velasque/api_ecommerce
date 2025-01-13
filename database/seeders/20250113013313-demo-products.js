'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Smartphone Galaxy S23',
        description: 'Smartphone Samsung Galaxy S23 com 256GB de memória',
        price: 4999.99,
        stock: 50,
        category: 'Eletrônicos',
        image_url: 'https://example.com/galaxy-s23.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Notebook Dell XPS',
        description: 'Notebook Dell XPS 15 com Intel i7 e 16GB RAM',
        price: 8999.99,
        stock: 20,
        category: 'Computadores',
        image_url: 'https://example.com/dell-xps.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Smart TV LG 55"',
        description: 'Smart TV LG 55" 4K com webOS',
        price: 3499.99,
        stock: 30,
        category: 'Eletrônicos',
        image_url: 'https://example.com/lg-tv.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PlayStation 5',
        description: 'Console PlayStation 5 com controle DualSense',
        price: 4499.99,
        stock: 15,
        category: 'Games',
        image_url: 'https://example.com/ps5.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'AirPods Pro',
        description: 'Fone de ouvido sem fio Apple AirPods Pro',
        price: 1899.99,
        stock: 40,
        category: 'Acessórios',
        image_url: 'https://example.com/airpods.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};