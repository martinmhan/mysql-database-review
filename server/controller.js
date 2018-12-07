const sequelize = require('sequelize');

const db = require('../database/model.js'); // this represents the task table

module.exports = {
  get: (req, res) => {
		console.log("GET request received");
		db.findAll()
		.then(data => { res.status(200).send(data) })
		.catch(err => { console.error(err) });
	},
	
  post: (req, res) => {
		console.log("POST request received");
		db.create({ name: req.body.name }) // adds a row to the task table
		.then(data => { res.status(201).send(data); })
		.catch(err => { console.error(err) });
	},
	
  update: (req, res) => {
		console.log("UPDATE request received");
		db.update(
			{name: req.body.name}, 
			{where: {id: req.params.id}}
		) // updates the name of the row where id = req.params.id
		.then(() => { res.status(202).send('Update successful!') })
		.catch(err => { console.error(err) });
	},
	
  delete: (req, res) => {
		console.log("DELETE request received");
		db.destroy(
			{where: {id: req.params.id}}
		)
		.then(() => { res.status(200).send('Delete successful!') }) // status code 204 doesn't send message
		.catch(err => { console.error(err) });
  }
};