const db = require('./db-connection.js');

const getPromise = (resolve, reject) => {
    db.all('SELECT * FROM todos', (err, rows) => {
        if (err){
            reject(err);
        } else {
            resolve(rows);
        }
})};

function get(){
    return new Promise(getPromise)
}
get().then((x)=>(console.log(x)));