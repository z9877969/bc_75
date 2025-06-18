import { configureStore } from '@reduxjs/toolkit';
import { countReducer } from './count/countSlice';
import todoReducer from './todo/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    count: countReducer,
  },
});
