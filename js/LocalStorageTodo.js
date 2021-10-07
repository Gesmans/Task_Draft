
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.input');
const todoItemsList = document.querySelector('.todo-items');

let todos = []; // This is the Storage Array 

//Check and Gathers text enter into the Task Box
todoForm.addEventListener('submit', submitText);
function submitText(event) {
  event.preventDefault();
  addItem(todoInput.value);
}

//Applys Object Template to "Task Data"
function addItem(item) {
  if (item !== '') {
    const todo = {
      id : Date.now(),
      name: item, 
      completed: false
    }; 

    todos.push(todo) // Pushes the Object "Task Data" to the Array
    addToLocalStorage(todos);
  } else {
    alert("You must write Something!!");
  }
  todoInput.value = '';

} 
//Adds Array "Task Data" to the Local Storage
function addToLocalStorage (todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
  

}

// This Pulls the "Task Data" array from Local Storage
function pullFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  
  if(reference) {
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

// This Renders the Visual of the "Task Data" Array
function renderTodos(todos) {
  todoItemsList.innerHTML = '';

  todos.forEach(function(item) {
  const li = document.createElement('li');
  li.setAttribute('id', 'list');
  li.setAttribute('class', 'item');
  li.setAttribute('data-key', item.id);

  li.innerHTML = `${item.name}
  <button class="fa fa-times"></button>`;

  todoItemsList.append(li);

  });

}




//Deletes Indvidual "Task Data" Objects from the Array/List
function deleteTodo(id) {
  todos = todos.filter(function(item) {
    return item.id != id;
  });

  addToLocalStorage(todos);

}

//Pulls "Task Data" Array from Local Storage when Page refreshes
pullFromLocalStorage();

todoItemsList.addEventListener('click', function(event) {
  if(event.target.classList.contains('fa-times')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});

function removeArray(id) {
  todos = todos.filter(function(item) {
    return item.id = 0;
    
  })

  var list = document.getElementById("tasks");
  list.innerHTML= ''
  localStorage.clear();



    }
  
  

