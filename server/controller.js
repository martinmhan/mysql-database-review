const { Todo } = require("../database/models");

module.exports = {
  get: (req, res) => {
    Todo.findAll({})
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => console.error(err));
  },
  post: (req, res) => {
    var { name } = req.body;
    Todo.create({
      name
    })
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => console.error(err));
  },
  update: (req, res) => {
    Todo.update({ name: req.body.newName }, { where: { id: req.params.id } })
      .then(data => {
        res.status(202).send("updated");
      })
      .catch(err => console.error(err));
  },
  delete: (req, res) => {
    Todo.destroy({
      where: { id: req.params.id }
    })
      .then(data => {
        res.status(200).send("deleted");
      })
      .catch(err => console.error(err));
  }
};
