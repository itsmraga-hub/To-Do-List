import localStorageMock from './__mocks__/localStorage.js';

const Task = require('./modules/utils.js');

const task = new Task('Wash dishes', 0, false);
const t = new Task('Code', 1, false);

describe('Task and localStorage Add and Delete Task Tests', () => {
  test('Add Task', () => {
    expect(task.addTask(task.getObject()).length).toBe(localStorageMock.length);
    expect(task.addTask(t.getObject()).length).toBe(localStorageMock.length);
    expect(task.addTask(task.getObject()).length).toBe(localStorageMock.length);
    expect(task.addTask(t.getObject()).length).toBe(localStorageMock.length);
  });
  test('Delete Task', () => {
    expect(task.deleteTask(0).length).toBe(localStorageMock.length);
    expect(task.deleteTask(1).length).toBe(localStorageMock.length);
    expect(task.deleteTask(0).length).toBe(localStorageMock.length);
    expect(task.deleteTask(0).length).toBe(localStorageMock.length);
  });
});