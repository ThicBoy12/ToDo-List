function addItem(){
  const todolist = document.getElementById('todolist');
  const txtInput = document.getElementById('txt');

  if(txtInput.value.trim() === ''){
    return;
  }

  const itemDiv = document.createElement('div');
  itemDiv.classList.add('todolist-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('check');
  checkbox.addEventListener('change', function(){
    if(checkbox.checked){
      text.style.textDecoration = 'line-through';
      text.style.color = 'lightgray';
    }else{
      text.style.textDecoration = 'none';
      text.style.color = 'black';
    }
  });

  const text = document.createElement('p');
  text.classList.add('txt');
  text.textContent = txtInput.value;

  const delButton = document.createElement('button');
  delButton.classList.add('del-button');
  delButton.textContent = 'x';
  delButton.addEventListener('click', function(){
    todolist.removeChild(itemDiv);
  });

  itemDiv.appendChild(checkbox);
  itemDiv.appendChild(text);
  itemDiv.appendChild(delButton);

  todolist.appendChild(itemDiv);

  txtInput.value = '';
  txtInput.focus();
}

function deleteAll(){
  const todolist = document.getElementById('todolist');
  const txtInput = document.getElementById('txt');

  if (confirm('This will delete all list items, are you sure?')) {
    while (todolist.firstChild) {
      todolist.removeChild(todolist.firstChild);
    }
    txtInput.value='';
  }
}

document.addEventListener('keydown', function(event){
  if(event.key === 'Enter'){
    addItem();
  }
});








