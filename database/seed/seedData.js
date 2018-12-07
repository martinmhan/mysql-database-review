const db = require('../model.js');

const seedData = [
  {
    name: 'wake up'
  },
  {
    name: 'drink coffee'
  },
  {
    name: 'wash up'
  },
  {
    name: 'get dressed'
  },
  {
    name: 'drive to work'
  },
];

db.sync({force: false})
.then(() => {
  db.bulkCreate(seedData) // inputs an array then adds every object as a row
  .then(() => {console.log('Tasks table has been successfully seeded')});
});