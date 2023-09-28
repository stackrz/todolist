todoApp = document.querySelector('UL');


function addInput(content) {
    addedItem = document.createElement('li');
    addedItem.append(content);
    todoApp.appendChild(addedItem);
}

function getInputValue() {
  return  document.querySelector ('input').value
}

function clearInput() {
    document.querySelector('input').value = ''
}

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault(); 
    addInput(getInputValue()); 
    clearInput();
});

document.getElementById('li').style.textDecoration = 'line-through dotted red';


todoApp.addEventListener('click', (e) => {
  if (e.target.style.textDecoration == 'line-through') {
      e.target.style.remove.textDecoration = 'none'
  } else {
    e.target.style.textDecoration = 'line-through'
  }
 

   console.log(e.target)
});
