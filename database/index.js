const sequelize = require('sequelize');

// parameters = db name, username, password
let connection = new sequelize('todo', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// establish connection. force false --> create table if it doesn't exist
connection.sync({force: false})
.then(() => {
  console.log('Successfully connected to mysql DB');
})
.catch(err => {
  console.log(err);
});

module.exports = connection;