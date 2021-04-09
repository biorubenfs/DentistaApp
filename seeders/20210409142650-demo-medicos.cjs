'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Medicos', [{
      nombre: "ernesto",
      email: "ernesto@dentalmd.com",
      password: "1234"
    },
    {
      nombre: "dolores",
      email: "dolores@dentalmd.com",
      password: "1234"
    },
    {
      nombre: "maria",
      email: "maria@dentalmd.com",
      password: "1234"
    }], {})
  },

  down: async (queryInterface, Sequelize) => {

    const Op = Sequelize.Op;

    await queryInterface.bulkDelete('Medicos', {
      [Op.or]: [{ email: "ernesto@dentalmd.com" },
      { email: "dolores@dentalmd.com" },
      { email: "maria@dentalmd.com" }]
    }, {});
  }
};