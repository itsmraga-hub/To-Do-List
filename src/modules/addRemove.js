class Task {
  constructor(description, index = 0, isComplete = false) {
    this.description = description;
    this.isComplete = isComplete;
    this.index = index;
  }

  addTask = (task, tasks) => {
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  deleteTask = (e, tasks) => {
    e.target.parentElement.remove();
    tasks.splice(e.target.parentElement.id, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

const loadFromStorage = (tasks) => {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  return tasks;
};

export { loadFromStorage, Task };