const sequelize = require('sequelize');
const connection = require('./index.js');

// creates a 'task' SQL table, define col and col types below
const task = connection.define('task', {
  id: {
    type: sequelize.INTEGER, primaryKey: true, autoIncrement: true
  },
  name: {
    type: sequelize.STRING, allowNull: false
  }
});

module.exports = task;