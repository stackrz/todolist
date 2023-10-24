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
const db = require('./db-connection');

const getPromise = (res, rej) => {
  db.all(`select * from todos`, (err, data) => {
    if (err) {
      rej(err);
    } else {
      res(data)
    } 
  });
}

const get = () => new Promise(getPromise)

const randId = () => Math.floor(Math.random() * 1000);

const savePromise = (data) => (res, rej) => {
  db.exec(`insert into todos (todo_id, content, is_done) values (${randId()}, "${data.text}", ${data.isDone})`,
      (err, data) => {
    if (err) {
      rej(err)
    } else {
      res(data)
    }
  });
};

const save = (data) => new Promise(savePromise(data));

save({text: 'yo', isDone: false}).then(x => console.log(x)).then(get).then(x => console.log(x))

module.exports = { save, get };

