import { SET_CURRENT_TODO, CLEAN_CURRENT_TODO } from '../types';

export const setCurrentTodo = todo => async dispatch => {
  console.log('[setCurrentTodo] -> TODO ', todo);

  dispatch({ type: SET_CURRENT_TODO, payload: todo });
};

export const cleanCurrentTodo = todo => async dispatch => {
  console.log('[cleanCurrentTodo] -> TODO ', todo);

  dispatch({ type: CLEAN_CURRENT_TODO, payload: null });
};
