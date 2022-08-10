import './style.css';
import { Task, loadFromStorage } from './modules/addRemove.js';

let tasks = [];

const taskListContainer = document.querySelector('.tasks-list');

const displayTasks = (tasks) => {
  taskListContainer.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    taskListContainer.innerHTML += `<li class="task" id=${i} data-id="${tasks[i].index}">
    <div class="task-desc">
      <input type="checkbox" name="task" class="toggle-check" />
      <input class="task-edit" value="${tasks[i].description}" disabled autofocus/>
    </div>
    <i class="fa-solid fa-ellipsis-vertical "></i>
    <i class="fa-solid fa-trash-can hidden"></i>
  </li>`;
  }
};

const resetForm = (input) => {
  input.value = '';
};

taskListContainer.addEventListener('click', (e) => {
  const task = new Task();
  if (e.target.nodeName === 'INPUT') {
    e.target.parentElement.parentElement.style.backgroundColor = '#ffffa7';
    e.target.parentElement.parentElement.children[1].style.display = 'none';
    e.target.parentElement.parentElement.children[2].style.display = 'inline';
    setTimeout(() => {
      e.target.parentElement.parentElement.style.backgroundColor = '#fff';
      e.target.parentElement.parentElement.children[1].style.display = 'inline';
      e.target.parentElement.parentElement.children[2].style.display = 'none';
    }, 2000);
  }
  if (e.target.classList.contains('hidden')) {
    task.deleteTask(e, tasks);
  }
});

const createTask = (input) => {
  const desc = input.value;
  const task = new Task(desc);
  task.addTask(task, tasks);
};

const taskDesc = document.querySelector('#new-task');

document.querySelector('#addBtn').addEventListener('click', () => {
  createTask(taskDesc);
  resetForm(taskDesc);
  displayTasks(tasks);
});

// Event listener to add task on Enter keypress
document.querySelector('.input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && (e.target.value)) {
    createTask(taskDesc);
    resetForm(taskDesc);
    displayTasks(tasks);
  }
});

// Edit task
const editTask = (e) => {
  const taskToEdit = e.parentElement.parentElement;
  const i = taskToEdit.id;
  taskToEdit.children[0].children[1].addEventListener('input', () => {
    const newValue = taskToEdit.children[0].children[1].value;
    taskToEdit.children[0].children[1].value = newValue;
    tasks[i].description = newValue;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
};

// Event listener to edit
taskListContainer.addEventListener('click', (e) => {
  if (e.target.disabled === true) {
    e.target.disabled = false;
    e.target.setAttribute('autofocus', true);
    editTask(e.target);
  }
});

tasks = loadFromStorage();
displayTasks(tasks);