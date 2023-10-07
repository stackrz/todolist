todoApp = document.querySelector('UL');



function addInput(content) {
  addedItem = document.createElement('li');
  addedItem.append(content.text);
  todoApp.appendChild(addedItem);
}

function getInputValue() {
  const text =  document.querySelector('input').value;
 return {
    text,
    isDone : false
 };                                // return  document.querySelector ('input').value
}

function clearInput() {
  document.querySelector('input').value = ''
}

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault(); 
    addInput(getInputValue()); 
    
    fetch('/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(getInputValue())
    });
    clearInput();
      }
   )
;



todoApp.addEventListener('click', (e) => {
  
  if (e.target.style.textDecoration == 'line-through') {
      e.target.style.remove.textDecoration = 'none'
  } else {
    e.target.style.textDecoration = 'line-through'
  }
 

   console.log(e.target)
});

fetch('/api/todo')
    .then(res => res.json())
    .then(todos => todos.map(addInput));

//ALL APPS ONLINE = GET POST PUT DELETE