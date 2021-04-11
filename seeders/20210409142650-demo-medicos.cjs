'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const hashTemp = 10;
    const commonPassword = "medico";

    const passwordHash = await bcrypt.hash(commonPassword, hashTemp);

    await queryInterface.bulkInsert('Medicos', [{
      nombre: "ernesto",
      email: "ernesto@dentalmd.com",
      password: passwordHash
    },
    {
      nombre: "dolores",
      email: "dolores@dentalmd.com",
      password: passwordHash
    },
    {
      nombre: "maria",
      email: "maria@dentalmd.com",
      password: passwordHash
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