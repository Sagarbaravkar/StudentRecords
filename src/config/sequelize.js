require('dotenv').config();
// require('dotenv').config({ path: './.env.dev' });
const Sequelize = require("sequelize");
console.log("process.env.DB_USERNAME", process.env.DB_USERNAME)
console.log("process.env.DB_USERNAME", process.env.DB_PASSWORD)
console.log("process.env.DB_USERNAME", process.env.DB_NAME)
console.log("process.env.DB_USERNAME", process.env.DB_HOST)
console.log("process.env.DB_USERNAME", process.env.DB_DIALECT)



const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    // dialect: process.env.DB_DIALECT,
    dialect: 'postgres',
    connectionLimit: 10,
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = sequelize;


