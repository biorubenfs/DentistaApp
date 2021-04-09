'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [{
      nombre: "ruben",
      email: "ruben@dental.com",
      password: "1234"
    },
    {
      nombre: "jarki",
      email: "jarki@dental.com",
      password: "1234"
    },
    {
      nombre: "angel",
      email: "angel@dental.com",
      password: "1234"
    },
    {
      nombre: "adrian",
      email: "adrian@dental.com",
      password: "1234"
    },
    {
      nombre: "gabriel",
      email: "gabriel@dental.com",
      password: "1234"
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
