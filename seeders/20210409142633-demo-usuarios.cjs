'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const hashTemp = 10;
    const commonPassword = "usuario";

    const passwordHash = await bcrypt.hash(commonPassword, hashTemp);

    await queryInterface.bulkInsert('Usuarios', [{
      nombre: "ruben",
      email: "ruben@dental.com",
      password: passwordHash
    },
    {
      nombre: "jarki",
      email: "jarki@dental.com",
      password: passwordHash
    },
    {
      nombre: "angel",
      email: "angel@dental.com",
      password: passwordHash
    },
    {
      nombre: "adrian",
      email: "adrian@dental.com",
      password: passwordHash
    },
    {
      nombre: "gabriel",
      email: "gabriel@dental.com",
      password: passwordHash
    }], {})
  },

  down: async (queryInterface, Sequelize) => {

    const Op = Sequelize.Op;

    await queryInterface.bulkDelete('Usuarios', {
      [Op.or]: [{ email: "ruben@dental.com" },
      { email: "jarki@dental.com" },
      { email: "angel@dental.com" },
      { email: "adrian@dental.com" },
      { email: "gabriel@dental.com" }]
    }, {});
  }
}