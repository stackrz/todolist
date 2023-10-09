//required modules & functions in the space of endofunctors 

app.listen(port, () => {
    console.log(`toDoListApp listening on port ${port}`)
  });
  
  app.use (express.static(path.join(__dirname, '../client/')
  ));
  
  app.use(bodyparser.json());
  
  app.get('/api/todo', (req, res) => {
    todoDAO.get()
    .then((todos) => res.send(todos)
  )});
  
  app.post('/api/todo', (req, res) => {
  
   let data = req.body
   todoDAO.save(data); 
    
   console.log(data);
  
   todoDAO.get()
   .then((todos) => res.send(todos));
  });