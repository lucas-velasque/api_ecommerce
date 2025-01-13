'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reviews', [
      {
        productId: 1, // Galaxy S23
        rating: 5,
        comment: 'Excelente smartphone! Câmera incrível.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 1, // Galaxy S23
        rating: 4,
        comment: 'Muito bom, mas a bateria poderia durar mais.',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 2, // Notebook Dell
        rating: 5,
        comment: 'Notebook perfeito para trabalho e jogos.',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 3, // TV LG
        rating: 5,
        comment: 'Imagem fantástica! Vale cada centavo.',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 4, // PS5
        rating: 5,
        comment: 'Console maravilhoso! Gráficos impressionantes.',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};