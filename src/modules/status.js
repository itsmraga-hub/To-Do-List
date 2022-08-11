const checkIfChecked = (tasks, s, i) => {
  if (s.checked) {
    tasks[i].isComplete = true;
  } else {
    tasks[i].isComplete = false;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Filter tasks array
const clearCompleteTasks = (tasks) => tasks.filter((task) => !task.isComplete);

export { checkIfChecked, clearCompleteTasks };