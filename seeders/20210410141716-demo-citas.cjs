'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cita', [{
      fecha: new Date(),
      estado: 0,
      usuarioId: 3
    },
    {
      fecha: new Date(),
      estado: 0,
      usuarioId: 3
    },
    {
      fecha: new Date(),
      estado: 0,
      usuarioId: 1
    },
    {
      fecha: new Date(),
      estado: 0,
      usuarioId: 2
    }
    ])
  },

  down: async (queryInterface, Sequelize) => {

    const Op = Sequelize.Op;

    await queryInterface.bulkDelete('Cita', {});
  }
};
