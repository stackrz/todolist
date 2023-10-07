//PERSISTANCE
/**
* This is what we were gonna get to but rn you don't gotta db
*
*
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
     }       
)
;

con.connect(function(err) {
  if (err) throw err;
  console.log("value");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

todoDB.dao.create = function () { 
    return todoDB.dao.ammended();
};
todoDB.api.create = function () {};
*/

// this was all i was looking for rn

todoList = ['run errands'];
save = function(todo) {
  todoList.push(todo)
  return Promise.resolve(todoList);
};
get = function() {
  return Promise.resolve(todoList);
}

module.exports = { save, get };

