const express = require('express');

const router = express.Router();

router.get('/api/todo', (req, res) => {
  req.app.get('db').todo.get()
    .then((todos) => res.send(todos));
}); 

router.post('/api/todo', (req, res) => {

  const data = req.body
  req.app.get('db').todo.save(data)

  console.log(data);
  
  res.send(data);
});

router.post('/submit', (req, res) => {
  const data = req.body

  req.app.get('db').todo.save(data)
    .then((x) => res.render('todo', x))
});

router.get('/', (req, res) => {
  req.app.get('db').todo.get()
    .then((todoList) => ({ todoList: todoList }))
    .then((x) => res.render('todos', { title: "whatup", ...x }))
})

module.exports = router;

