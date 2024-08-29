// require('dotenv').config();
require('dotenv').config({ path: './.env.dev' });
console.log("process.env.DB_USERNAME", process.env.DB_USERNAME)
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    // dialect: process.env.DB_DIALECT
    dialect: 'postgres'
  },
  // test: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   dialect: process.env.DB_DIALECT
  // },
  // production: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   dialect: process.env.DB_DIALECT
  // }
}