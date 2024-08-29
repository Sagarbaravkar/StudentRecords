"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let index = 0; index < 10; index++) {
      data.push({
        name: faker.person.fullName(),
      });
    }

    await queryInterface.bulkInsert("courses", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("courses", null, {});
  },
};
