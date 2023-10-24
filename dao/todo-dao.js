const db = require('./db-connection');

const formatTodo = (todo) => ({
  id: todo.id,
  content: todo.content,
  isDone: (todo.is_done === "true"),
})

const getPromise = (resolve, reject) => {
    db.all('SELECT * FROM todos', (err, rows) => {
        if (err){
            reject(err);
        } else {
            resolve(rows.map(formatTodo));
        }
})};

function get(){
    return new Promise(getPromise)
}

const savePromise = (todo) => (resolve, reject) => {
  db.all(`INSERT INTO todos 
            (content, is_done)
          VALUES
            ("${todo.content}", "${todo.isDone}")`,
    (err, status) => {
    if (err){
      reject(err);
    } else {
      resolve(todo);
    }
})};

function save(todo){
  if (!todo.isDone) {
    todo.isDone = "false"
  }
  return new Promise(savePromise(todo))
}

module.exports = { get, save }
