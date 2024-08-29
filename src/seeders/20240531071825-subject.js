"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let index = 0; index < 10; index++) {
      data.push({
        course_id: faker.number.int({ min: 6, max: 10 }),
        name: faker.person.fullName()
      });
    }

    await queryInterface.bulkInsert("subjects", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("subjects", null, {});
  },
};
