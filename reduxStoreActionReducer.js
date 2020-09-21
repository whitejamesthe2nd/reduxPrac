const { createStore } = require('redux');

const CREATE_TASK = 'CREATE_TASK';
const RESET_TASK_LIST = 'RESET_TASK_LIST';
const DELETE_TASK = 'DELETE_TASK';

const tasksReducer = (state = [], action) => {
 switch (action.type) {
    case CREATE_TASK:
      // TODO: Define what happens when a `createTask` action is dispatched
        const newTask = {
            message: action.taskMessage,
        };
        return [...state, newTask];
    case DELETE_TASK:
        const idx = action.taskId;
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
      // TODO: Define what happens when a `deleteTask` action is dispatched
    case RESET_TASK_LIST:
        case RESET_TASK_LIST:
        return action.emptyTaskList;
      // TODO: Define what happens when a `resetTaskList` action is dispatched
    default:
      return state;
};
}

const store = createStore(tasksReducer);

const createTask = (taskMessage) => {
  return {
    type: CREATE_TASK,
    taskMessage: taskMessage,
  };
};
const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    taskId: taskId,
  };
};
const resetTaskList = () => {
    return {
      type: RESET_TASK_LIST,
      emptyTaskList: [],
    };
};

module.exports = {
    createTask,
    deleteTask,
    resetTaskList,
    store
}
