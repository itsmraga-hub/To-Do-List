import './style.css';

// Tasks array of objects
const tasks = [
  {
    description: 'wash the dishes',
    isComplete: false,
    index: 0,
  },
  {
    description: 'Learn react basics',
    isComplete: false,
    index: 1,
  },
  {
    description: 'Practice figma UI/UX',
    isComplete: false,
    index: 2,
  },
  {
    description: 'Complete todo list project',
    isComplete: true,
    index: 3,
  },
  {
    description: 'Play chess',
    isComplete: false,
    index: 4,
  },
];

const taskListContainer = document.querySelector('.tasks-list');
const displayTasks = (tasks) => {
  // taskListContainer.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    // console.log(tasks[i]);
    taskListContainer.innerHTML += `<li class="task" id=${tasks[i].index}>
    <div class="task-desc">
      <input type="checkbox" name="task" class="toggle-check" />
      <span class="description">${tasks[i].description}</span>
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
  </li>`;
  }
};

window.addEventListener('DOMContentLoaded', displayTasks(tasks));
