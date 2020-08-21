const Todos = [];

module.exports = {
    getAll: function () {
      return Todos;
    },
    create,
    deleteATodo
  };

  function create(todo) {
    todo.id = Date.now() % 1000000;
    todo.done = false;
    console.log(todo)
    Todos.push(todo)
  }

  function deleteATodo(id) {
    const idx = Todos.findIndex(todo => todo.id === parseInt(id))
    Todos.splice(idx,1);
  }