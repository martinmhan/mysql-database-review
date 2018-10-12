const mysql = require("mysql");
const Sequelize = require("sequelize");

const connection = new Sequelize("dbreview", "root", "martin", {
  host: "localhost",
  dialect: "mysql"
});

connection
  .authenticate()
  .then(() => console.log("connected to mysql database"))
  .catch(err => console.error(err));

module.exports = connection;
