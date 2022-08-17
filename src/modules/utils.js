import localStorageMock from '../__mocks__/localStorage.js';

class Task {
  constructor(description, index = 0, isComplete = false) {
    this.description = description;
    this.isComplete = isComplete;
    this.index = index;
  }

  getObject = () => {
    const t = {
      description: this.description,
      index: this.index,
      isComplete: this.isComplete,
    };
    return t;
  }

  addTask = (task) => {
    // tasks.push(task);
    // localStorage.setItem('tasks', JSON.stringify(tasks));
    // localStorageMock.setItem('tasks', JSON.stringify(tasks));
    localStorageMock.push(task);
    return localStorageMock;
  }

  deleteTask = (id) => {
    console.log(localStorageMock.length);
    localStorageMock.splice(id, 1);
    console.log(localStorageMock.length);
    return localStorageMock;
  }
}

module.exports = Task;