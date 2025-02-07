const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
document.addEventListener('DOMContentLoaded', loadTodos);


todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task) {
    addTodoToList(task);
    saveTodoToLocalStorage(task);
    todoInput.value = '';
  }
});


function addTodoToList(task) {
  const li = document.createElement('li');
  li.innerHTML = `${task} <button onclick="deleteTodo(this)">Delete</button>`;
  todoList.appendChild(li);
}


function saveTodoToLocalStorage(task) {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(task);
  localStorage.setItem('todos', JSON.stringify(todos));
}


function loadTodos() {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach((task) => addTodoToList(task));
}


function deleteTodo(button) {
  const task = button.parentElement.textContent.trim().replace('Delete', '');
  button.parentElement.remove();
  let todos = JSON.parse(localStorage.getItem('todos'));
  todos = todos.filter((todo) => todo !== task);
  localStorage.setItem('todos', JSON.stringify(todos));
}