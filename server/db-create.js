var sqlite3 = require('sqlite3');

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
  const newdb = new sqlite3.Database('todoapp.db', (err) => {
    if (err) {
      console.log("Getting error " + err);
      exit(1);
    }
    createTables(newdb);
  });
}

new sqlite3.Database('./mcu.db', sqlite3.OPEN_READWRITE,  (err) => {
  if (err && err.code == "SQLITE_CANTOPEN") {
    createDatabase();
    return;
  } else if (err) {
    console.log("Getting error " + err);
    exit(1);
  }
  runQueries(db);
});

