var express = require('express');
var todosController = require('../controllers/todo.js');
var todosData = require('../data/todos')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Unit 2 Assessment', todos: todosData.getAll() });
});

router.post('/', todosController.create);
router.delete('/:id', todosController.delete)

module.exports = router;
