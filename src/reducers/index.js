import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer';
import currentTodoReducer from './currentTodoReducer';

const reducers = combineReducers({
  todoList: todoListReducer,
  currentTodo: currentTodoReducer
});

export default reducers;
