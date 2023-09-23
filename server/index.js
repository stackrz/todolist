const path = require('path');
const express = require('express')
const app = express()
const port = 3000


//app.get('/', (req, res) => {
//     console.log('whatever')
//   res.send('TODO LIST')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use (express.static(path.join(__dirname, '../client/')));

//server- save new item --respond with updated list or error --completed will have status of 200 -- error will have 400-(i fucked up) or 500(you server fucked up)