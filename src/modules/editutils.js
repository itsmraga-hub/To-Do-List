const editTask = (tasks, i, value) => {
  tasks[i].description = value;
  return tasks[i];
};

const checkIfChecked = (tasks, i) => {
  if (!tasks[i].isComplete) {
    tasks[i].isComplete = true;
  } else if (tasks[i].isComplete) {
    tasks[i].isComplete = false;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return tasks[i].isComplete;
};

const clearCompleteTasks = (tasks) => tasks.filter((task) => !task.isComplete);

export { editTask, checkIfChecked, clearCompleteTasks };