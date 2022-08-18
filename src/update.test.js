import { checkIfChecked, clearCompleteTasks, editTask } from './modules/editutils.js';
import localStorageMock from './__mocks__/localStorage.js';

describe("Task and LocalStrage Update and Status Change Tests", () => {
  test('Edit task', () => {
    expect(editTask(localStorageMock, 0, 'Edit')).toEqual(localStorageMock[0]);
    expect(editTask(localStorageMock, 1, 'Chess')).toEqual(localStorageMock[1]);
  });

  test('Change status', () => {
    expect(checkIfChecked(localStorageMock, 0)).toEqual(localStorageMock[0].isComplete);
    expect(checkIfChecked(localStorageMock, 4)).toEqual(localStorageMock[4].isComplete);
  });

  test('Clear all completed', () => {
    expect(clearCompleteTasks(localStorageMock).length).toBe(1);
  });
});
