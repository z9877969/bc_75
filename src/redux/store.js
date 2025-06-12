import { configureStore } from '@reduxjs/toolkit';
import countReducer from './count/countReducer';
import todoReducer from './todo/todoReducer';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    count: countReducer,
  },
});
