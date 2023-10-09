const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3');

DB_FILE = path.join(__dirname, './data.db');

function createTables(db) {
  db.exec(`
    create table todos (
      todo_id primary key not null,
      content text not null,
      is_done text not null
    );

    insert into todos (todo_id, content, is_done)
      values (1, 'learn SQL', 'false'),
             (2, 'cook dope', 'false');
  `);
}

function createDatabase() {
  const newdb = new sqlite3.Database(DB_FILE, (err) => {
    if (err) {
      console.log("Getting error " + err);
      exit(1);
    }
    createTables(newdb);
  });

  return newdb;
}

function createDbConnection() {
  if (fs.existsSync(DB_FILE)) {
    return new sqlite3.Database(DB_FILE);
  } else {
    return createDatabase();
  }
}

module.exports = createDbConnection();
