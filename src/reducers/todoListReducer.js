import { ADD_TODO } from '../types';

const initialState = [];

export default (state = initialState, action) => {
  console.log('action.type: ', action.type);
  console.log('action.payload: ', action.payload);

  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};
