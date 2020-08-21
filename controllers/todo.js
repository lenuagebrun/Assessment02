var Todo = require('../data/todos');

module.exports = {
  create,
  delete: deleteTodo
}

function create(req, res) {
  Todo.create(req.body)
  res.redirect('/')
}

function deleteTodo(req, res) {
  Todo.deleteATodo(req.params.id);
  res.redirect('/');
}