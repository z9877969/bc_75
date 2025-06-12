import { configureStore } from '@reduxjs/toolkit';
import countReducer from './count/countReducer';
import todoReducer from './todo/todoReducer';

const aReducer = (state = 'qwe', action) => state;

export const store = configureStore({
  reducer: {
    a: aReducer,
    todo: todoReducer,
    count: countReducer,
  },

  /* (
    state = {
      a: 'qwe',
      todo: [],
      count: 25,
    },
    action
  ) => {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + action.payload };

      default:
        return state;
    }
  } */
});
