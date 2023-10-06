//Users/3a/code/todolist/server/todo-dao-stub.js

const todoDAO = require ('./todo-dao-stub.js'); 
const path = require('path');
const express = require('express')
const app = express()
const port = 3000

app.get('/api/todo', (req, res) => {
  todoDAO.get()
  .then((todos) => res.send(todos)
      
      )
    } 
  )
;

 
app.post('/api/todo', (req, res) => {
    body:{newitem}
    res.body={body}
        }
    )
;

//json parser //download postman for browser // express post request// test more // console.log

//put /api/todo

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
    } 
);

app.use (express.static(path.join(__dirname, '../client/')
     )
  )
;

//server- save new item --respond with updated list or error --completed 
//will have status of 200 -- error will have 400-(i fucked up) or 500(you
// server fucked up)

//app.get('/', (req, res) => {
//     console.log('whatever')
//   res.send('TODO LIST')
// })
