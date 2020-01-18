import { ADD_TODO, SEND_TODO_COMPLETE, SEND_TODO_START, SEND_TODO_FAIL } from '../types';

import api from '../api';

export const handleNewTodo = todo => async dispatch => {
  console.log('[handleNewTodo] -> TODO ', todo);

  dispatch({ type: ADD_TODO, payload: todo });
};

export const sendTodosToServer = todos => async dispatch => {
  console.log('[sendTodosToServer] -> TODO ', todos);

  dispatch({ type: SEND_TODO_START, payload: null });

  try {
    const response = await api.post('/todos', { todos });
    dispatch({ type: SEND_TODO_COMPLETE, payload: response.data });

    console.log('[response.data] ', response.data);
  } catch (error) {
    console.error(error);
    dispatch({ type: SEND_TODO_FAIL, payload: null });
  }
};
