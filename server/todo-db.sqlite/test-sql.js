let count = 0;

const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./todoapp.db', (err) => {
  if (err) {
    console.error(err.message)
    
  }
  console.log('Connected to the database.');
 
  db.all('SELECT * FROM todos', function(err, rows){
    
    console.log(count,rows),
    count += 1;
    
})
});

const todos = []
