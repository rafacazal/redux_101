import { SET_CURRENT_TODO, CLEAN_CURRENT_TODO } from '../types';

const initialState = '';

export default (state = initialState, action) => {
  console.log('action.type: ', action.type);
  console.log('action.payload: ', action.payload);

  switch (action.type) {
    case SET_CURRENT_TODO:
      return action.payload;

    case CLEAN_CURRENT_TODO:
      return initialState;

    default:
      return state;
  }
};
